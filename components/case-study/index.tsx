"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/projects";

const placeholderCopy = {
  overview: "Replace this with a concise overview of the project, its context, and the opportunity it addressed.",
  challenge: "Replace this with the core user, business, and technical constraints that shaped the work.",
  role: "Replace this with your responsibilities, collaborators, and the parts of the work you led.",
  process: "Replace this with the key decisions, research, explorations, and iterations that informed the final direction.",
  results: "Replace this with verified outcomes, learnings, and the impact of the work.",
};

export function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  return <motion.section className={className} initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.section>;
}

export function LaptopMockup({ project }: { project: Project }) {
  return <div className="laptop" style={{ "--project-accent": project.accent } as React.CSSProperties}><div className="laptop-screen"><span className="screen-dot" /><span className="screen-line long" /><span className="screen-line" /><div className="screen-panel"><span>Screenshot placeholder</span><strong>{project.title}</strong></div><div className="screen-grid"><i /><i /><i /></div></div><div className="laptop-base" /></div>;
}

export function ImageSection({ project, label, variant = "wide" }: { project: Project; label: string; variant?: "wide" | "portrait" | "split" }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={`image-placeholder ${variant}`} style={{ "--project-accent": project.accent } as React.CSSProperties} initial={reduceMotion ? false : { clipPath: "inset(8% 5% 8% 5%)", scale: 0.96 }} whileInView={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}><span>{label}</span><small>Replace with /public/assets/projects/{project.slug}/...</small><div className="image-ui"><i /><i /><i /></div></motion.div>;
}

export function ProjectHero({ project }: { project: Project }) {
  return <section className="case-hero"><div className="case-hero-head"><p className="eyebrow">{project.number} / {project.category}</p><h1>{project.title}</h1><p className="case-subtitle">{project.subtitle}</p></div><div className="project-meta"><div><span>Role</span><strong>{project.role}</strong></div><div><span>Timeline</span><strong>{project.timeline}</strong></div><div><span>Platform</span><strong>{project.platform}</strong></div><div><span>Technologies</span><strong>{project.technologies.join(" · ")}</strong></div></div><LaptopMockup project={project} /><a className="scroll-indicator" href="#overview">Scroll to explore <b>↓</b></a></section>;
}

function ContentSection({ number, title, children }: { number: string; title: React.ReactNode; children: React.ReactNode }) {
  return <AnimatedSection className="case-section"><p className="section-number">{number}</p><div><h2>{title}</h2><div className="case-copy">{children}</div></div></AnimatedSection>;
}

export function ProjectOverview() { return <ContentSection number="01 / Overview" title="The project, at a glance."><p>{placeholderCopy.overview}</p></ContentSection>; }
export function ProjectChallenge() { return <ContentSection number="02 / Challenge" title={<>Making complexity feel <em>legible.</em></>}><p>{placeholderCopy.challenge}</p></ContentSection>; }
export function ProjectRole() { return <ContentSection number="03 / Role" title="A focused role in a shared effort."><p>{placeholderCopy.role}</p><ul><li>Placeholder responsibility</li><li>Placeholder collaboration</li><li>Placeholder deliverable</li></ul></ContentSection>; }
export function ProjectProcess({ project }: { project: Project }) { return <ContentSection number="04 / Process" title="From signals to a clearer system."><p>{placeholderCopy.process}</p><ImageSection project={project} label="Research & early explorations" /></ContentSection>; }
export function ProjectFeature({ project, index }: { project: Project; index: number }) { return <AnimatedSection className="feature-section"><div className="feature-copy"><p className="section-number">0{index} / Feature</p><h2>Feature story<br /><em>placeholder.</em></h2><p>Replace this with the problem, interaction, and design decision behind a specific feature.</p></div><ImageSection project={project} label={`Feature ${index} screenshot`} variant={index % 2 === 0 ? "portrait" : "split"} /></AnimatedSection>; }
export function ProjectGallery({ project }: { project: Project }) { return <AnimatedSection className="gallery-section"><div><p className="section-number">07 / Gallery</p><h2>Moments from<br />the <em>interface.</em></h2></div><div className="gallery-grid"><ImageSection project={project} label="Gallery image 01" variant="portrait" /><ImageSection project={project} label="Gallery image 02" variant="portrait" /><ImageSection project={project} label="Gallery image 03" /></div></AnimatedSection>; }
export function ProjectDesignSystem({ project }: { project: Project }) { return <AnimatedSection className="design-system"><div><p className="section-number">08 / Design system</p><h2>Built for<br /><em>consistency.</em></h2></div><div><p>Replace this with the principles, components, tokens, and governance behind the project’s design system.</p><ImageSection project={project} label="Design system overview" /></div></AnimatedSection>; }
export function ProjectResults() { return <ContentSection number="09 / Results" title="What moved forward."><p>{placeholderCopy.results}</p><div className="results-grid"><div><strong>—</strong><span>Metric placeholder</span></div><div><strong>—</strong><span>Metric placeholder</span></div><div><strong>—</strong><span>Outcome placeholder</span></div></div></ContentSection>; }
export function ProjectNextProject({ project, nextProject }: { project: Project; nextProject: Project }) { return <section className="next-project"><p className="eyebrow">Next project</p><Link href={`/projects/${nextProject.slug}`}><span>{nextProject.number}</span><h2>{nextProject.title}<br /><em>{nextProject.category}</em></h2><b>↗</b></Link><Link className="back-work" href="/#work">Back to selected work</Link></section>; }

export function CaseStudyPage({ project, nextProject }: { project: Project; nextProject: Project }) {
  return <main className="case-study"><header className="site-header case-header"><Link href="/" className="wordmark" aria-label="Back to homepage">NM<span>•</span></Link><nav aria-label="Case study navigation"><Link href="/#work">All work</Link><Link href="/#contact">Contact</Link></nav></header><ProjectHero project={project} /><div id="overview"><ProjectOverview /><ProjectChallenge /><ProjectRole /><ProjectProcess project={project} /><ProjectFeature project={project} index={5} /><ProjectFeature project={project} index={6} /><ProjectGallery project={project} /><ProjectDesignSystem project={project} /><ProjectResults /></div><ProjectNextProject project={project} nextProject={nextProject} /></main>;
}
