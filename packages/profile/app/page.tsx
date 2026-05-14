'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { profile, featuredWork, experience, skills, projects, education } from './data';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://salmanbukhari.com').replace(/\/$/, '');

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
] as const;

function GithubIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function GradCapIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}

function SectionHeading({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 flex items-start gap-4 sm:gap-8">
      <span
        className="font-heading shrink-0 text-4xl font-bold tabular-nums leading-none text-amber-700/40 sm:text-5xl lg:text-6xl"
        aria-hidden
      >
        {number}
      </span>
      <div className="min-w-0 flex-1 border-l border-zinc-900/[0.1] pl-4 sm:pl-6">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">{children}</h2>
        <div className="mt-3 h-px max-w-[4rem] bg-gradient-to-r from-amber-500/80 to-transparent" />
      </div>
    </div>
  );
}

const navLinkClass =
  'rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-900/[0.04] hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500/60';
const activeNavLinkClass = 'bg-amber-500/15 text-amber-700';

const socialBtnClass =
  'flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-900/[0.08] bg-surface-elevated/80 text-zinc-600 transition-all hover:border-amber-500/40 hover:text-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500/60';

const cardClass =
  'rounded-2xl border border-zinc-900/[0.08] bg-surface/85 p-5 shadow-[0_0_0_1px_rgba(15,23,42,0.04)_inset] backdrop-blur-sm transition-all duration-300 hover:border-amber-500/25 hover:bg-surface-elevated/95';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.title,
  description: profile.summary,
  image: `${siteUrl}/profile-photo.png`,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Islamabad',
    addressCountry: 'PK',
  },
  sameAs: [profile.github, profile.linkedin],
};

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState<(typeof NAV)[number]['id']>(NAV[0].id);

  useEffect(() => {
    const sectionIds = NAV.map(({ id }) => id);

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      // Line below viewport top: last section whose start is above this line is "active".
      // (Avoids IntersectionObserver + high thresholds on very tall sections — e.g. Experience —
      // where intersectionRatio stays below threshold and the nav never switches.)
      const triggerLine = scrollY + window.innerHeight * 0.22;

      let activeId: (typeof NAV)[number]['id'] = NAV[0].id;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const sectionTop = el.getBoundingClientRect().top + scrollY;
        if (triggerLine >= sectionTop) {
          activeId = id;
        }
      }

      setActiveSection(activeId);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const getNavItemClass = (id: (typeof NAV)[number]['id']) =>
    `${navLinkClass} ${activeSection === id ? activeNavLinkClass : ''}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div className="profile-noise fixed inset-0 -z-10 pointer-events-none" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col lg:flex-row">
        {/* ─── Sidebar (Arter-style fixed column) ─── */}
        <aside className="relative flex shrink-0 flex-col border-b border-zinc-900/[0.08] bg-white/80 px-6 py-8 backdrop-blur-md lg:sticky lg:top-0 lg:h-screen lg:w-[min(100%,320px)] lg:overflow-y-auto lg:border-b-0 lg:border-r lg:border-zinc-900/[0.08] lg:px-8 lg:py-10">
          <div className="mx-auto flex w-full max-w-xs flex-col items-center text-center lg:mx-0 lg:max-w-none lg:items-stretch lg:text-left">
            <div className="mb-5 overflow-hidden rounded-2xl border border-zinc-900/[0.08] bg-surface-elevated shadow-xl ring-1 ring-zinc-900/[0.04]">
              <Image
                src={profile.photoSrc}
                alt={`${profile.name} — professional headshot`}
                width={280}
                height={280}
                className="aspect-square w-full max-w-[200px] object-cover object-top sm:max-w-[220px] lg:max-w-none"
                priority
              />
            </div>

            <p className="mb-1 font-heading text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-zinc-600">Portfolios</p>
            <h1 className="font-heading text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">{profile.name}</h1>
            <p className="mt-1 text-sm font-medium text-amber-600/90">{profile.title}</p>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-zinc-500 lg:justify-start">
              <MapPinIcon /> {profile.location}
            </p>

            <div className="mt-6 flex justify-center gap-2 lg:justify-start" aria-label="Social links">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className={socialBtnClass} aria-label="GitHub">
                <GithubIcon />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={socialBtnClass} aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href={`mailto:${profile.email}`} className={socialBtnClass} aria-label="Email">
                <MailIcon />
              </a>
            </div>

            {/* Desktop nav */}
            <nav className="mt-10 hidden w-full flex-col gap-0.5 border-t border-zinc-900/[0.08] pt-8 lg:flex" aria-label="Page sections">
              {NAV.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={getNavItemClass(item.id)}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile nav */}
          <details className="mt-8 w-full max-w-xs mx-auto border-t border-zinc-900/[0.08] pt-6 lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-center gap-2 rounded-xl border border-zinc-900/[0.08] bg-surface py-3 text-sm font-medium text-zinc-700 [&::-webkit-details-marker]:hidden">
              <MenuIcon />
              Section menu
            </summary>
            <nav className="mt-3 flex flex-col gap-0.5 rounded-xl border border-zinc-900/[0.08] bg-surface/90 p-2" aria-label="Page sections">
              {NAV.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={getNavItemClass(item.id)}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </aside>

        {/* ─── Main content ─── */}
        <main className="min-w-0 flex-1 px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16 xl:px-16">
          {/* Hero / About */}
          <section id="about" className="animate-fade-in mb-20 scroll-mt-8 lg:scroll-mt-10">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-amber-600/80">Hello</p>
            <h2 className="font-heading mt-3 text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-zinc-900">
              I&apos;m{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                {profile.name.split(' ')[0]}
              </span>
              <span className="text-zinc-500"> — {profile.title}</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">{profile.summary}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/15 px-6 py-3 text-sm font-semibold text-amber-700 transition hover:bg-amber-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
              >
                Get in touch
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-zinc-900/[0.12] bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-900/20 hover:bg-zinc-900/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500/60"
              >
                View GitHub
              </a>
            </div>
          </section>

          <section id="experience" className="animate-slide-up delay-100 mb-20 scroll-mt-8 lg:scroll-mt-10">
            <SectionHeading number="01">Experience</SectionHeading>
            <div className="space-y-5">
              {experience.map((job, i) => (
                <article key={i} className={`${cardClass} group`}>
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <h3 className="font-heading text-lg font-semibold text-zinc-900">{job.role}</h3>
                        <span className="rounded-md border border-zinc-900/[0.08] bg-zinc-900/[0.03] px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-zinc-600">
                          {job.type}
                        </span>
                      </div>
                      <p className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-amber-700/85">
                        <BriefcaseIcon /> {job.company}
                        {job.location ? <span className="font-normal text-zinc-600">· {job.location}</span> : null}
                      </p>
                    </div>
                    <p className="shrink-0 rounded-md border border-zinc-900/[0.08] px-2.5 py-1 font-mono text-xs text-zinc-600">{job.period}</p>
                  </div>
                  <ul className="space-y-2 border-t border-zinc-900/[0.08] pt-4">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-zinc-600">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-500/50" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="work" className="animate-slide-up delay-150 mb-20 scroll-mt-8 lg:scroll-mt-10">
            <SectionHeading number="02">Work</SectionHeading>
            <p className="-mt-4 mb-8 max-w-2xl text-sm leading-relaxed text-zinc-600">
              Public-facing documentation, developer portals, and API references for global platforms.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {featuredWork.map((item, i) => (
                <article key={i} className={`${cardClass} group flex flex-col`}>
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="font-heading text-base font-semibold text-zinc-900 transition-colors group-hover:text-amber-600/95">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-wider text-zinc-500">{item.org}</p>
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-lg p-2 text-zinc-600 transition hover:bg-zinc-900/[0.05] hover:text-amber-600"
                      aria-label={`Open ${item.title} (new tab)`}
                    >
                      <ExternalLinkIcon />
                    </a>
                  </div>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-600">{item.description}</p>
                  <div className="mt-auto flex flex-wrap items-end justify-between gap-3 border-t border-zinc-900/[0.08] pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-amber-500/20 bg-amber-500/[0.1] px-2 py-0.5 text-[0.65rem] font-medium text-amber-700/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-amber-700/90 underline-offset-2 hover:underline"
                    >
                      View online
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="animate-slide-up delay-200 mb-20 scroll-mt-8 lg:scroll-mt-10">
            <SectionHeading number="03">Projects</SectionHeading>
            <div className="grid gap-5 sm:grid-cols-2">
              {projects.map((project, i) => (
                <article key={i} className={`${cardClass} group`}>
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <h3 className="font-heading text-base font-semibold text-zinc-900 transition-colors group-hover:text-amber-600/95">
                      {project.title}
                    </h3>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 rounded-lg p-2 text-zinc-600 transition hover:bg-zinc-900/[0.05] hover:text-amber-600"
                        aria-label={`Open ${project.title}`}
                      >
                        <ExternalLinkIcon />
                      </a>
                    ) : null}
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-zinc-600">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-amber-500/20 bg-amber-500/[0.1] px-2 py-0.5 text-[0.65rem] font-medium text-amber-700/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="animate-slide-up delay-300 mb-20 scroll-mt-8 lg:scroll-mt-10">
            <SectionHeading number="04">Skills</SectionHeading>
            <div className="grid gap-5 sm:grid-cols-2">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className={cardClass}>
                  <h3 className="font-heading mb-4 border-b border-zinc-900/[0.08] pb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-700/80">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-zinc-900/[0.08] bg-zinc-900/[0.02] px-3 py-1.5 text-sm text-zinc-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="education" className="animate-slide-up delay-400 mb-20 scroll-mt-8 lg:scroll-mt-10">
            <SectionHeading number="05">Education</SectionHeading>
            <div className={`${cardClass} flex gap-5`}>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/15 text-amber-700">
                <GradCapIcon />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-zinc-900">{education.degree}</h3>
                <p className="mt-1 text-sm text-zinc-600">{education.school}</p>
                <p className="mt-2 font-mono text-xs text-zinc-600">
                  {education.location} · {education.period}
                </p>
              </div>
            </div>
          </section>

          <footer className="animate-fade-in delay-500 border-t border-zinc-900/[0.08] pt-10 text-center text-sm text-zinc-500">
            <p>© {new Date().getFullYear()} {profile.name}</p>
          </footer>
        </main>
      </div>
    </>
  );
}
