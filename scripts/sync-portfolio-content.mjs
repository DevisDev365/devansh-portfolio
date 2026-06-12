import fs from 'node:fs/promises';
import path from 'node:path';
import {
  portfolioIdentity,
  bio,
  education,
  experience,
  projects,
  achievements,
} from '../content/portfolio-content.mjs';

const root = process.cwd();
const escapePipes = (value) => value.replaceAll('|', '\\|');

const heading = `# ${portfolioIdentity.name} — Full Portfolio`;
const quoteBlock = [
  `> **${portfolioIdentity.title}** | MBA in Data Analytics & Operations (Delhi School of Business)`,
  '>',
  `> *"${portfolioIdentity.subtitle}"*`,
].join('\n');

const projectMarkdown = projects
  .map((project, index) => {
    const solutionList = Array.isArray(project.solutionPrototype)
      ? project.solutionPrototype.map((item) => `- ${item}`).join('\n')
      : project.solutionPrototype;
    const impactLine = project.impact.length ? `\n**Impact:** ${project.impact.join('; ')}\n` : '\n';
    const disclaimer = project.disclaimer ? `\n**Note:** ${project.disclaimer}\n` : '\n';

    return [
      `### ${index + 1}. ${project.title} — ${project.category}`,
      `> **Role:** ${project.role} | [Live Demo](${project.link})`,
      '',
      `**Problem:** ${project.businessProblem}`,
      '',
      '**Solution:**',
      solutionList,
      impactLine.trimEnd(),
      '',
      `**Tech:** ${project.techStack.join(' · ')}`,
      disclaimer.trimEnd(),
    ].join('\n');
  })
  .join('\n\n---\n\n');

const portfolioMarkdown = [
  heading,
  '',
  quoteBlock,
  '',
  '---',
  '',
  '## Contact & Links',
  '',
  '| Channel | Link |',
  '|---------|------|',
  `| Portfolio | [${portfolioIdentity.portfolioUrl.replace('https://', '')}](${portfolioIdentity.portfolioUrl}) |`,
  `| LinkedIn | [linkedin.com/in/devansh-khanna-618606178](${portfolioIdentity.linkedinUrl}) |`,
  `| GitHub | [github.com/devisdev365](${portfolioIdentity.githubUrl}) |`,
  `| Phone | ${portfolioIdentity.phone} |`,
  '',
  '---',
  '',
  '## Summary',
  '',
  bio.introduction.join('\n\n'),
  '',
  '**Ideal for:**',
  ...bio.idealCollaborators.map((item) => `- ${item}`),
  '',
  '---',
  '',
  '## Education',
  '',
  ...education.flatMap((item) => [
    `### ${item.degree} — ${item.institution} (${item.year})`,
    ...(item.gpa ? [`- ${item.gpa}`] : []),
    ...item.details.map((detail) => `- ${detail}`),
    '',
  ]),
  '---',
  '',
  '## Work Experience',
  '',
  ...experience.flatMap((item) => [
    `### ${item.company} — ${item.role}`,
    `**${item.period}** | [${item.companyUrl.replace('https://', '')}](${item.companyUrl})`,
    '',
    `**Business Challenge:** ${item.businessChallenge}`,
    '',
    '**Solutions Delivered:**',
    ...item.solutions.map((solution) => `- ${solution}`),
    '',
    '**Impact:**',
    ...item.impact.map((impactItem) => `- ${impactItem}`),
    '',
    `**Key Skills:** ${item.skills.join(' · ')}`,
    '',
    '---',
    '',
  ]),
  '## Projects',
  '',
  projectMarkdown,
  '',
  '---',
  '',
  '## Achievements',
  '',
  '| Achievement | Organization | Details |',
  '|---|---|---|',
  ...achievements.map(
    (item) =>
      `| ${escapePipes(item.title)} | ${escapePipes(item.organization)} | ${escapePipes(item.description)} |`,
  ),
  '',
].join('\n');

const llmsText = [
  `# ${portfolioIdentity.name}`,
  `> ${portfolioIdentity.title} | MBA in Data Analytics & Operations`,
  `> "${portfolioIdentity.subtitle}"`,
  `> Website: ${portfolioIdentity.portfolioUrl}`,
  `> LinkedIn: ${portfolioIdentity.linkedinUrl}`,
  `> GitHub: ${portfolioIdentity.githubUrl}`,
  `> Phone: ${portfolioIdentity.phone}`,
  '',
  '## About Me',
  bio.introduction.join('\n\n'),
  '',
  '### Ideal Collaborators',
  ...bio.idealCollaborators.map((item) => `- ${item}`),
  '',
  '## Education',
  ...education.flatMap((item) => [
    `### ${item.degree} — ${item.institution} (${item.year})`,
    ...(item.gpa ? [`- ${item.gpa}`] : []),
    ...item.details.map((detail) => `- ${detail}`),
    '',
  ]),
  '## Work Experience',
  '',
  ...experience.flatMap((item) => [
    `### ${item.company} — ${item.role} (${item.period})`,
    `- Company Website: ${item.companyUrl}`,
    `- **Business Challenge:** ${item.businessChallenge}`,
    '- **Solutions:**',
    ...item.solutions.map((solution) => `  - ${solution}`),
    '- **Impact:**',
    ...item.impact.map((impactItem) => `  - ${impactItem}`),
    `- **Skills:** ${item.skills.join(', ')}`,
    '',
  ]),
  '## Projects',
  '',
  ...projects.flatMap((project) => [
    `### ${project.title} — ${project.category}`,
    `- Role: ${project.role}`,
    `- Live: ${project.link}`,
    `- **Problem:** ${project.businessProblem}`,
    '- **Solution:**',
    ...(Array.isArray(project.solutionPrototype)
      ? project.solutionPrototype.map((item) => `  - ${item}`)
      : [`  - ${project.solutionPrototype}`]),
    `- **Impact:** ${project.impact.join('; ')}`,
    `- **Tech Stack:** ${project.techStack.join(', ')}`,
    ...(project.disclaimer ? [`- **Note:** ${project.disclaimer}`] : []),
    '',
  ]),
  '## Achievements',
  ...achievements.map(
    (item) => `- **${item.title}** — ${item.organization}: ${item.description}`,
  ),
  '',
].join('\n');

const workflowDoc = [
  '# Content Update Workflow',
  '',
  'Update `/content/portfolio-content.mjs` when you want to change portfolio text, links, projects, experience, achievements, or contact details.',
  '',
  'Then run:',
  '',
  '```bash',
  'npm run sync:content',
  '```',
  '',
  'That will regenerate:',
  '',
  '- `public/portfolio.md`',
  '- `public/llms.txt`',
  '',
  'The React site also reads from the same content file, so one update keeps the UI and AI-readable docs aligned.',
].join('\n');

await fs.writeFile(path.join(root, 'public', 'portfolio.md'), `${portfolioMarkdown}\n`);
await fs.writeFile(path.join(root, 'public', 'llms.txt'), `${llmsText}\n`);
await fs.writeFile(path.join(root, 'CONTENT_WORKFLOW.md'), `${workflowDoc}\n`);
