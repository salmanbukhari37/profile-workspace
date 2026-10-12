import { profile, featuredWork, experience, skills, projects, education } from './data';

/**
 * Shared content builders for llms.txt / llms-full.txt (https://llmstxt.org),
 * sourced from `data.ts` so both stay in sync with the on-page content.
 * llms.txt = short index with links; llms-full.txt = full expanded detail.
 */

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://salmanbukhari.com').replace(/\/$/, '');

function bulletList(items: readonly string[]): string {
  return items.map((item) => `- ${item}`).join('\n');
}

export function buildLlmsIndex(): string {
  return `# ${profile.name}

> ${profile.summary}

- Title: ${profile.title}
- Location: ${profile.location}
- Email: ${profile.email}
- GitHub: ${profile.github}
- LinkedIn: ${profile.linkedin}

## Docs

- [Full profile (experience, projects, skills, education)](${siteUrl}/llms-full.txt): complete expanded detail behind this index
- [Live portfolio site](${siteUrl}/): interactive version with the same content

## Optional

- [Featured public work](${siteUrl}/llms-full.txt#featured-work): PayPal and Verizon developer portals
`;
}

export function buildLlmsFull(): string {
  return `# ${profile.name} — Full Profile

> ${profile.summary}

- Title: ${profile.title}
- Location: ${profile.location}
- Email: ${profile.email}
- GitHub: ${profile.github}
- LinkedIn: ${profile.linkedin}

## Experience

${experience
  .map(
    (job) =>
      `### ${job.role} — ${job.company} (${job.period})\n${[job.type, job.location].filter(Boolean).join(' · ')}\n${bulletList(job.highlights)}`,
  )
  .join('\n\n')}

## Featured Work

${featuredWork
  .map((item) => `- [${item.title}](${item.link}): ${item.description} (${item.org}; ${item.tags.join(', ')})`)
  .join('\n')}

## Projects & Achievements

${projects
  .map((project) => `- ${project.title}${project.link ? ` (${project.link})` : ''}: ${project.description} [${project.tags.join(', ')}]`)
  .join('\n')}

## Skills

${Object.entries(skills)
  .map(([category, items]) => `- ${category}: ${items.join(', ')}`)
  .join('\n')}

## Education

- ${education.degree}, ${education.school} (${education.location}, ${education.period})
`;
}
