import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex(({ slug: projectSlug }) => projectSlug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  return <CaseStudyPage project={project} nextProject={nextProject} />;
}
