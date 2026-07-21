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
  heroImage?: string;
  metadata?: { label: string; value: string }[];
};

export const projects: Project[] = [
  { slug: "silent-ai", number: "01", title: "Silent AI", subtitle: "Enterprise AI Platform for Trusted Knowledge Retrieval", description: "Knowledge management, AI chat, connectors, and data orchestration.", category: "Enterprise AI platform", role: "Senior Product Designer", timeline: "2024 — Present", platform: "Enterprise SaaS", technologies: ["Material Design 3"], accent: "#8d5cff", heroImage: "/assets/projects/silent-ai/active-datasets.png" },
  { slug: "allam", number: "02", title: "Allam", subtitle: "Android AI assistant for everyday guidance, trusted services, and intelligent conversations.", description: "An Android AI assistant for chat, voice, templates, image generation, and guided service experiences.", category: "Android AI assistant", role: "Senior Product Designer", timeline: "Not disclosed", platform: "Android", technologies: ["Material Design 3"], accent: "#2396f3", heroImage: "/assets/projects/allam/allam-hero.png", metadata: [{ label: "Role", value: "Senior Product Designer" }, { label: "Platform", value: "Android" }, { label: "Product type", value: "AI Assistant" }, { label: "Design system", value: "Material Design 3" }] },
  { slug: "kode-os", number: "03", title: "KODE OS", subtitle: "Facility operations designed for clarity across complex environments.", description: "Facility management with smart dashboards and a mobile app.", category: "Facility operations platform", role: "Senior Product Designer", timeline: "2021 — 2023", platform: "Web & mobile", technologies: ["Dashboards", "Design system", "Mobile app"], accent: "#2176e8", heroImage: "/assets/projects/kode-os/kode-os-hero.png" },
  { slug: "jamorder", number: "04", title: "JamOrder", subtitle: "A restaurant ordering and POS experience built for momentum.", description: "Restaurant ordering and POS with a seamless user experience.", category: "Restaurant platform", role: "Senior Product Designer", timeline: "Placeholder timeline", platform: "Web & mobile", technologies: ["Ordering", "POS", "Service design"], accent: "#e15d42" },
  { slug: "locum-tenens", number: "05", title: "Locum Tenens", subtitle: "Healthcare staffing that connects people with opportunity.", description: "Healthcare staffing connecting nurses and medics with job opportunities.", category: "Healthcare platform", role: "Product Designer", timeline: "Placeholder timeline", platform: "Web platform", technologies: ["Healthcare", "Marketplace", "Workflows"], accent: "#387ee8" },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
