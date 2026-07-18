export type Project = {
  slug: "silent-ai" | "allam" | "kode-os" | "jamorder" | "locum-tenens";
  number: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  role: string;
  timeline: string;
  platform: string;
  technologies: string[];
  accent: string;
};

export const projects: Project[] = [
  { slug: "silent-ai", number: "01", title: "Silent AI", subtitle: "Enterprise AI Platform for Trusted Knowledge Retrieval", description: "Knowledge management, AI chat, connectors, and data orchestration.", category: "Enterprise AI platform", role: "Senior Product Designer", timeline: "2024 — Present", platform: "Enterprise SaaS", technologies: ["Material Design 3"], accent: "#8d5cff" },
  { slug: "allam", number: "02", title: "Allam", subtitle: "A mobile experience designed to support everyday productivity.", description: "A mobile application designed to enhance productivity and user engagement.", category: "Android app", role: "Product Designer", timeline: "Placeholder timeline", platform: "Android", technologies: ["Mobile UX", "Product strategy", "Prototyping"], accent: "#3b9b65" },
  { slug: "kode-os", number: "03", title: "KODE OS", subtitle: "Facility management designed for clarity across complex operations.", description: "Facility management with smart dashboards and a mobile app.", category: "Enterprise platform", role: "Senior Product Designer", timeline: "Placeholder timeline", platform: "Web & mobile", technologies: ["Dashboards", "Design system", "Mobile app"], accent: "#53a772" },
  { slug: "jamorder", number: "04", title: "JamOrder", subtitle: "A restaurant ordering and POS experience built for momentum.", description: "Restaurant ordering and POS with a seamless user experience.", category: "Restaurant platform", role: "Senior Product Designer", timeline: "Placeholder timeline", platform: "Web & mobile", technologies: ["Ordering", "POS", "Service design"], accent: "#e15d42" },
  { slug: "locum-tenens", number: "05", title: "Locum Tenens", subtitle: "Healthcare staffing that connects people with opportunity.", description: "Healthcare staffing connecting nurses and medics with job opportunities.", category: "Healthcare platform", role: "Product Designer", timeline: "Placeholder timeline", platform: "Web platform", technologies: ["Healthcare", "Marketplace", "Workflows"], accent: "#387ee8" },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
