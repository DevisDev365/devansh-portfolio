import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Play, RotateCcw, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ThreeBowlingLaneProps {
  playStrike?: () => void;
  playClick?: () => void;
  onStrikeTriggered?: () => void;
}

export const ThreeBowlingLane: React.FC<ThreeBowlingLaneProps> = ({
  playStrike,
  playClick,
  onStrikeTriggered,
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState<boolean>(false);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [isStrikeScored, setIsStrikeScored] = useState<boolean>(false);

  // Three.js instances ref
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const ballRef = useRef<THREE.Mesh | null>(null);
  const pinsGroupRef = useRef<THREE.Group | null>(null);
  const pinsMeshesRef = useRef<THREE.Mesh[]>([]);
  const animFrameId = useRef<number | null>(null);
  const rollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isRollingRef = useRef<boolean>(false);

  // Default pin positions
  const pinPositions = [
    { x: 0, z: -6.5 },
    { x: -0.55, z: -7.5 },
    { x: 0.55, z: -7.5 },
    { x: -1.1, z: -8.5 },
    { x: 0, z: -8.5 },
    { x: 1.1, z: -8.5 },
    { x: -1.65, z: -9.5 },
    { x: -0.55, z: -9.5 },
    { x: 0.55, z: -9.5 },
    { x: 1.65, z: -9.5 },
  ];

  // Lazy-mount heavy 3D canvas with IntersectionObserver
  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { rootMargin: '150px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Initialize Three.js scene when in view
  useEffect(() => {
    if (!isInView || !mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 900;
    const height = Math.min(520, Math.max(360, width * 0.48));

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x11110f);

    // 2. Camera: Wide arcade perspective looking down the lane
    const camera = new THREE.PerspectiveCamera(46, width / height, 0.1, 100);
    camera.position.set(0, 3.2, 13.5);
    camera.lookAt(0, 0.6, -6);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Lighting: Crisp arcade lighting
    const ambientLight = new THREE.AmbientLight(0xfff8f0, 0.85);
    scene.add(ambientLight);

    const laneKeyLight = new THREE.DirectionalLight(0xfff8f0, 1.3);
    laneKeyLight.position.set(0, 12, 6);
    laneKeyLight.castShadow = true;
    scene.add(laneKeyLight);

    const pinSpotlight = new THREE.PointLight(0xffffff, 2.0, 18);
    pinSpotlight.position.set(0, 4.5, -7.5);
    scene.add(pinSpotlight);

    // 5. Glossy Solid Black Bowling Lane Surface
    const laneGeo = new THREE.PlaneGeometry(5.2, 30);
    const laneMat = new THREE.MeshStandardMaterial({
      color: 0x11110f,
      roughness: 0.16,
      metalness: 0.3,
    });
    const lane = new THREE.Mesh(laneGeo, laneMat);
    lane.rotation.x = -Math.PI / 2;
    lane.position.set(0, 0, 0);
    lane.receiveShadow = true;
    scene.add(lane);

    // Red Gutter Rails
    const gutterGeo = new THREE.BoxGeometry(0.55, 0.22, 30);
    const gutterMat = new THREE.MeshStandardMaterial({
      color: 0xe5222b,
      roughness: 0.25,
      metalness: 0.2,
    });
    const gutterLeft = new THREE.Mesh(gutterGeo, gutterMat);
    gutterLeft.position.set(-2.8, 0.08, 0);
    scene.add(gutterLeft);

    const gutterRight = new THREE.Mesh(gutterGeo, gutterMat);
    gutterRight.position.set(2.8, 0.08, 0);
    scene.add(gutterRight);

    // 6. Solid High-Gloss Bowling Ball
    const ballGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const ballMat = new THREE.MeshStandardMaterial({
      color: 0x050505,
      roughness: 0.08,
      metalness: 0.6,
    });
    const ball = new THREE.Mesh(ballGeo, ballMat);
    ball.position.set(0, 0.55, 10);
    ball.castShadow = true;
    scene.add(ball);
    ballRef.current = ball;

    // 7. 10 Scaled Bowling Pins
    const pinPoints: THREE.Vector2[] = [];
    pinPoints.push(new THREE.Vector2(0, 0));
    pinPoints.push(new THREE.Vector2(0.24, 0));
    pinPoints.push(new THREE.Vector2(0.28, 0.18));
    pinPoints.push(new THREE.Vector2(0.38, 0.5));
    pinPoints.push(new THREE.Vector2(0.36, 0.85));
    pinPoints.push(new THREE.Vector2(0.22, 1.3));
    pinPoints.push(new THREE.Vector2(0.15, 1.65));
    pinPoints.push(new THREE.Vector2(0.18, 2.0));
    pinPoints.push(new THREE.Vector2(0.14, 2.25));
    pinPoints.push(new THREE.Vector2(0, 2.3));

    const pinGeo = new THREE.LatheGeometry(pinPoints, 24);
    const pinMat = new THREE.MeshStandardMaterial({
      color: 0xfff8f0,
      roughness: 0.2,
      metalness: 0.1,
    });

    const pinsGroup = new THREE.Group();
    pinsGroupRef.current = pinsGroup;
    const pinMeshes: THREE.Mesh[] = [];

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

    // Render loop
    const animate = () => {
      renderer.render(scene, camera);
      animFrameId.current = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const w = container.clientWidth || 900;
      const h = Math.min(520, Math.max(360, w * 0.48));
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      if (rollIntervalRef.current) clearInterval(rollIntervalRef.current);
      renderer.dispose();
    };
  }, [isInView]);

  // Scatter pins when ball impacts
  const triggerPinScatter = useCallback(() => {
    setIsStrikeScored(true);
    setIsRolling(false);
    isRollingRef.current = false;
    if (playStrike) playStrike();
    if (onStrikeTriggered) onStrikeTriggered();

    try {
      confetti({
        particleCount: 70,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#E5222B', '#FFF8F0', '#FFD60A'],
        disableForReducedMotion: true,
      });
    } catch {}

    const pins = pinsMeshesRef.current;
    pins.forEach((pin, i) => {
      const angle = (Math.PI * 2 * i) / pins.length;
      const distance = 1.6 + Math.random() * 1.8;
      const targetX = pin.position.x + Math.cos(angle) * distance;
      const targetZPos = pin.position.z + Math.sin(angle) * distance;

      let scatterProgress = 0;
      const pinInterval = setInterval(() => {
        scatterProgress += 0.08;
        pin.position.x += (targetX - pin.position.x) * 0.18;
        pin.position.z += (targetZPos - pin.position.z) * 0.18;
        pin.rotation.z += 0.32;
        pin.rotation.x += 0.22;

        if (scatterProgress >= 1) clearInterval(pinInterval);
      }, 16);
    });
  }, [playStrike, onStrikeTriggered]);

  // Execute ball roll animation smoothly
  const triggerRoll = useCallback(() => {
    if (isRollingRef.current) return;
    if (playClick) playClick();

    // If already struck, reset first
    if (isStrikeScored) {
      resetLane();
    }

    isRollingRef.current = true;
    setIsRolling(true);

    const ball = ballRef.current;
    const camera = cameraRef.current;
    if (!ball || !camera) return;

    ball.position.set(0, 0.55, 10);
    ball.rotation.set(0, 0, 0);

    let progress = 0;
    const startZ = 10;
    const targetZ = -6.5;

    if (rollIntervalRef.current) clearInterval(rollIntervalRef.current);

    rollIntervalRef.current = setInterval(() => {
      // Smooth acceleration
      progress += 0.024;
      const easeProgress = Math.min(1, progress * progress * 1.6 + progress * 0.4);

      if (ball) {
        ball.position.z = startZ + (targetZ - startZ) * easeProgress;
        ball.rotation.x -= 0.38;
      }

      if (camera) {
        camera.position.z = 13.5 + (8.5 - 13.5) * easeProgress * 0.65;
      }

      if (easeProgress >= 0.98) {
        if (rollIntervalRef.current) clearInterval(rollIntervalRef.current);
        triggerPinScatter();
      }
    }, 16);
  }, [isStrikeScored, playClick, triggerPinScatter]);

  // Reset lane to initial rack position
  const resetLane = () => {
    if (rollIntervalRef.current) clearInterval(rollIntervalRef.current);
    isRollingRef.current = false;
    setIsRolling(false);
    setIsStrikeScored(false);

    const ball = ballRef.current;
    const camera = cameraRef.current;
    const pins = pinsMeshesRef.current;

    if (ball) {
      ball.position.set(0, 0.55, 10);
      ball.rotation.set(0, 0, 0);
    }

    if (camera) {
      camera.position.set(0, 3.2, 13.5);
    }

    pins.forEach((pin, i) => {
      const pos = pinPositions[i] || { x: 0, z: -7 };
      pin.position.set(pos.x, 0, pos.z);
      pin.rotation.set(0, 0, 0);
    });
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-[#11110F] border border-[#FFF8F0]/25 shadow-2xl">
      {/* Visual Canvas Mount (Click anywhere on lane to bowl) */}
      <div
        ref={mountRef}
        onClick={triggerRoll}
        className="w-full min-h-[360px] sm:min-h-[440px] relative cursor-pointer"
      />

      {/* Prominent "CLICK / TAP TO BOWL" Sign */}
      {!isStrikeScored && !isRolling && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              triggerRoll();
            }}
            className="pointer-events-auto px-6 py-3.5 rounded-full bg-[#E5222B] hover:bg-[#c91820] text-white font-heading font-black text-sm sm:text-base tracking-wide flex items-center gap-2.5 shadow-2xl border-2 border-white/80 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#E5222B] font-black text-xs shrink-0">
              ●
            </div>
            <span>CLICK TO BOWL &amp; STRIKE</span>
          </button>
        </div>
      )}

      {/* Top Action Bar */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (isStrikeScored) {
              resetLane();
            } else {
              triggerRoll();
            }
          }}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF8F0] hover:bg-white text-[#11110F] text-xs font-bold transition-transform active:scale-95 cursor-pointer shadow-lg"
        >
          {isStrikeScored ? (
            <>
              <RotateCcw className="w-3.5 h-3.5 text-[#E5222B]" />
              <span>Reset &amp; Roll Again</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-[#E5222B]" />
              <span>Roll Ball</span>
            </>
          )}
        </button>
      </div>

      {/* Status banner */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#FFF8F0]/90 bg-[#11110F]/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#FFF8F0]/15">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#E5222B]" />
          <span>LANE: 3D SMAAASH BOWLING ARENA</span>
        </span>
        <span className="font-bold text-[#FFF8F0]">
          {isStrikeScored
            ? 'STRIKE RECORDED · ₹59,000 REVENUE'
            : isRolling
            ? 'ROLLING IN PROGRESS...'
            : 'TAP LANE OR BUTTON TO BOWL'}
        </span>
      </div>
    </div>
  );
};
