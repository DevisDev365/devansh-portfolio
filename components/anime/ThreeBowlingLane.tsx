import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Ticket } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ThreeBowlingLaneProps {
  playStrike?: () => void;
  playClick?: () => void;
}

export const ThreeBowlingLane: React.FC<ThreeBowlingLaneProps> = ({ playStrike, playClick }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [isStrikeScored, setIsStrikeScored] = useState<boolean>(false);
  const [cameraShake, setCameraShake] = useState<boolean>(false);

  // 5 Key Verified Metrics on the pins
  const scoredStats = [
    { label: '₹59,000', detail: 'Direct Launch Revenue' },
    { label: '1,200+', detail: 'Leads Cleansed & Segmented' },
    { label: '40%', detail: 'Lead Quality Lift Score' },
    { label: '200+', detail: 'Cold Outreach Calls' },
    { label: '61', detail: 'On-Ground Diagnostic Visits' },
  ];

  // Three.js instances ref
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const ballRef = useRef<THREE.Mesh | null>(null);
  const pinsGroupRef = useRef<THREE.Group | null>(null);
  const pinsMeshesRef = useRef<THREE.Mesh[]>([]);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 800;
    const height = Math.min(420, Math.max(300, width * 0.45));

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x0b0b0c);
    scene.fog = new THREE.Fog(0x0b0b0c, 15, 36);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 3.2, 14);
    camera.lookAt(0, 0.5, -6);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Lighting: Arcade Red Neon & Warm White
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const redLight = new THREE.DirectionalLight(0xe4002b, 1.4);
    redLight.position.set(5, 10, 8);
    redLight.castShadow = true;
    scene.add(redLight);

    const laneLight = new THREE.PointLight(0xffffff, 0.9, 22);
    laneLight.position.set(0, 4, -4);
    scene.add(laneLight);

    // 5. Glossy Bowling Lane Surface (Arcade Polish)
    const laneGeo = new THREE.PlaneGeometry(4.2, 28);
    const laneMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      roughness: 0.12,
      metalness: 0.35,
    });
    const lane = new THREE.Mesh(laneGeo, laneMat);
    lane.rotation.x = -Math.PI / 2;
    lane.position.set(0, 0, 0);
    lane.receiveShadow = true;
    scene.add(lane);

    // Neon Gutters in SMAAASH Arcade Red
    const gutterLeftGeo = new THREE.BoxGeometry(0.5, 0.2, 28);
    const gutterMat = new THREE.MeshBasicMaterial({ color: 0xe4002b });
    const gutterLeft = new THREE.Mesh(gutterLeftGeo, gutterMat);
    gutterLeft.position.set(-2.3, 0.05, 0);
    scene.add(gutterLeft);

    const gutterRight = new THREE.Mesh(gutterLeftGeo, gutterMat);
    gutterRight.position.set(2.3, 0.05, 0);
    scene.add(gutterRight);

    // 6. Red Bowling Ball with Specular Highlights
    const ballGeo = new THREE.SphereGeometry(0.45, 32, 32);
    const ballMat = new THREE.MeshStandardMaterial({
      color: 0xe4002b,
      roughness: 0.08,
      metalness: 0.5,
    });
    const ball = new THREE.Mesh(ballGeo, ballMat);
    ball.position.set(0, 0.45, 10);
    ball.castShadow = true;
    scene.add(ball);
    ballRef.current = ball;

    // 7. 10 Authentic Bowling Pins (Lathe Geometry Silhouette)
    const pinPoints: THREE.Vector2[] = [];
    pinPoints.push(new THREE.Vector2(0, 0));
    pinPoints.push(new THREE.Vector2(0.2, 0));
    pinPoints.push(new THREE.Vector2(0.24, 0.15));
    pinPoints.push(new THREE.Vector2(0.32, 0.4));
    pinPoints.push(new THREE.Vector2(0.3, 0.7));
    pinPoints.push(new THREE.Vector2(0.18, 1.1));
    pinPoints.push(new THREE.Vector2(0.12, 1.4));
    pinPoints.push(new THREE.Vector2(0.15, 1.7));
    pinPoints.push(new THREE.Vector2(0.12, 1.9));
    pinPoints.push(new THREE.Vector2(0, 1.95));

    const pinGeo = new THREE.LatheGeometry(pinPoints, 24);
    const pinMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.15,
      metalness: 0.1,
    });

    const pinsGroup = new THREE.Group();
    pinsGroupRef.current = pinsGroup;
    const pinMeshes: THREE.Mesh[] = [];

    // Triangular formation positions (x, z) at pin deck (z = -6.5 to -8.9)
    const pinPositions = [
      { x: 0, z: -6.5 },
      { x: -0.45, z: -7.3 },
      { x: 0.45, z: -7.3 },
      { x: -0.9, z: -8.1 },
      { x: 0, z: -8.1 },
      { x: 0.9, z: -8.1 },
      { x: -1.35, z: -8.9 },
      { x: -0.45, z: -8.9 },
      { x: 0.45, z: -8.9 },
      { x: 1.35, z: -8.9 },
    ];

    pinPositions.forEach((pos) => {
      const pin = new THREE.Mesh(pinGeo, pinMat.clone());
      pin.position.set(pos.x, 0, pos.z);
      pin.castShadow = true;
      pin.receiveShadow = true;
      pinsGroup.add(pin);
      pinMeshes.push(pin);
    });

    scene.add(pinsGroup);
    pinsMeshesRef.current = pinMeshes;

    // Render Loop
    const animate = () => {
      renderer.render(scene, camera);
      animFrameId.current = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const w = container.clientWidth || 800;
      const h = Math.min(420, Math.max(300, w * 0.45));
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      renderer.dispose();
    };
  }, []);

  // Bowl Action Trigger
  const rollBall = () => {
    if (isRolling || isStrikeScored) return;
    if (playClick) playClick();
    setIsRolling(true);

    const ball = ballRef.current;
    const camera = cameraRef.current;
    const pins = pinsMeshesRef.current;
    if (!ball || !camera || !pins.length) return;

    let progress = 0;
    const startZ = 10;
    const targetZ = -6.5;

    const rollInterval = setInterval(() => {
      progress += 0.04;
      ball.position.z = startZ + (targetZ - startZ) * Math.min(1, progress);
      ball.rotation.x -= 0.3; // ball rolling forward

      // Camera smoothly follows
      camera.position.z = 14 + (6 - 14) * Math.min(1, progress * 0.7);

      // Impact check
      if (progress >= 1) {
        clearInterval(rollInterval);

        // 80ms hit-stop slow-mo freeze
        setCameraShake(true);
        if (playStrike) playStrike();

        setTimeout(() => {
          setCameraShake(false);
          setIsStrikeScored(true);
          setIsRolling(false);

          // Confetti explosion
          try {
            confetti({
              particleCount: 50,
              spread: 80,
              origin: { y: 0.6 },
              colors: ['#E4002B', '#FFFFFF', '#F59E0B'],
              disableForReducedMotion: true,
            });
          } catch {
            // Fallback
          }

          // Animate pins scattering with rotation and velocity
          pins.forEach((pin, i) => {
            const angle = (Math.PI * 2 * i) / pins.length;
            const distance = 1.3 + Math.random() * 1.6;
            const targetX = pin.position.x + Math.cos(angle) * distance;
            const targetZPos = pin.position.z + Math.sin(angle) * distance;

            let scatterProgress = 0;
            const pinInterval = setInterval(() => {
              scatterProgress += 0.08;
              pin.position.x += (targetX - pin.position.x) * 0.15;
              pin.position.z += (targetZPos - pin.position.z) * 0.15;
              pin.rotation.z += 0.25;
              pin.rotation.x += 0.18;

              if (scatterProgress >= 1) clearInterval(pinInterval);
            }, 16);
          });
        }, 80);
      }
    }, 16);
  };

  const resetLane = () => {
    if (playClick) playClick();
    setIsStrikeScored(false);
    setIsRolling(false);

    // Reset ball position
    if (ballRef.current) {
      ballRef.current.position.set(0, 0.45, 10);
      ballRef.current.rotation.set(0, 0, 0);
    }
    // Reset camera position
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 3.2, 14);
    }
    // Reset pins
    const pinPositions = [
      { x: 0, z: -6.5 },
      { x: -0.45, z: -7.3 },
      { x: 0.45, z: -7.3 },
      { x: -0.9, z: -8.1 },
      { x: 0, z: -8.1 },
      { x: 0.9, z: -8.1 },
      { x: -1.35, z: -8.9 },
      { x: -0.45, z: -8.9 },
      { x: 0.45, z: -8.9 },
      { x: 1.35, z: -8.9 },
    ];
    pinsMeshesRef.current.forEach((pin, i) => {
      if (pinPositions[i]) {
        pin.position.set(pinPositions[i].x, 0, pinPositions[i].z);
        pin.rotation.set(0, 0, 0);
      }
    });
  };

  return (
    <div className="relative w-full">
      {/* Action Controller */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs font-semibold text-slate-200">
            SMAAASH Arcade 3D Lane (Direct Physics Mode)
          </span>
        </div>

        <div className="flex items-center gap-2">
          {!isStrikeScored ? (
            <button
              onClick={rollBall}
              disabled={isRolling}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-red-600/30"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isRolling ? 'Strike Ball Rolling...' : 'Roll Bowling Ball'}</span>
            </button>
          ) : (
            <button
              onClick={resetLane}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset &amp; Re-Rack Pins</span>
            </button>
          )}
        </div>
      </div>

      {/* Three.js 3D Canvas Mount Point */}
      <div
        className={`relative rounded-2xl bg-[#0B0B0C] border border-red-500/30 overflow-hidden shadow-2xl ${
          cameraShake ? 'animate-[shake_0.15s_ease-in-out_infinite]' : ''
        }`}
      >
        <div ref={mountRef} className="w-full h-[320px] sm:h-[400px] cursor-pointer" onClick={rollBall} />

        {/* Manga-Panel Strike Stamp Overlay */}
        <AnimatePresence>
          {isStrikeScored && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 14 }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none bg-black/70 p-4"
            >
              <div className="p-6 rounded-2xl bg-[#121214] border-2 border-red-500 text-center max-w-md shadow-2xl shadow-red-600/40">
                <div className="text-xs font-bold text-red-400 mb-1 tracking-wider uppercase">
                  Manga Execution Stamp · 即時成約
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                  PERFECT STRIKE! 10/10 CONVERTED
                </div>
                <div className="text-xs text-slate-300 mt-2 font-medium">
                  Direct revenue unlocked · Lead database segmented · Playbook verified
                </div>

                {/* Dispensed Arcade Ticket Strip */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25, type: 'spring' }}
                  className="mt-4 p-3 rounded-lg bg-amber-500 text-black border-2 border-dashed border-amber-800 text-left flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Ticket className="w-5 h-5 text-black shrink-0" />
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest font-black">
                        TICKET #059000 · SMAAASH
                      </div>
                      <div className="text-xs font-black">
                        ₹59,000 DIRECT LAUNCH REVENUE
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono font-bold uppercase text-right">
                    VALIDATED<br />OUTBOUND
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Overhead Scoreboard: 5 Verified Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6">
        {scoredStats.map((stat) => (
          <div
            key={stat.label}
            className={`p-3.5 rounded-xl border text-center transition-colors ${
              isStrikeScored
                ? 'border-red-500/50 bg-red-500/15 text-white'
                : 'border-white/10 bg-[#0E1015] text-slate-400'
            }`}
          >
            <div className={`text-base sm:text-xl font-black ${isStrikeScored ? 'text-red-400' : 'text-slate-200'}`}>
              {stat.label}
            </div>
            <div className="text-[11px] text-slate-400 leading-tight mt-1 truncate">
              {stat.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
