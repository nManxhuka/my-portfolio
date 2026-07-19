import type { Project } from "@/lib/projects";

export type Feature = {
  title: string;
  problem: string;
  solution: string;
  image: string;
  screenshot?: string;
  secondaryScreenshot?: string;
  layout?: "split" | "centered";
  presentation?: "laptop" | "floating-card" | "multi-screen" | "editorial" | "devices" | "desktop" | "research" | "persona" | "architecture" | "style-guide";
  variant: "wide" | "portrait" | "split";
};

export type CaseStudyNarrative = {
  introduction: string;
  overview: string[];
  challenge: string[];
  roleCards: string[];
  processSteps: string[];
  features: Feature[];
  designSystem: string;
  designSystemItems: string[];
  outcomes: string[];
  headings?: Partial<Record<"overview" | "challenge" | "role" | "process" | "designSystem" | "results", [string, string]>>;
  processArtifacts?: { research: string; persona: string; sitemap: string };
};

export const silentAiNarrative: CaseStudyNarrative = {
  introduction: "Silent AI brings company knowledge into a secure, governed workspace—so teams can ask better questions and get answers they can trust.",
  overview: [
    "Silent AI is an enterprise AI platform for securely connecting internal knowledge sources, building datasets, and creating AI assistants grounded in company information.",
    "It exists for organisations that need the speed of AI without losing control of their data. Administrators configure access, sources, tokens, and schedules; knowledge teams curate datasets; and end users interact with assistants that can answer questions in the context of their work.",
    "The product needed to make a deeply technical system feel dependable and understandable for people with very different levels of AI expertise."
  ],
  challenge: [
    "The UX challenge was not simply adding AI to an interface. It was designing confidence around an ecosystem of interdependent workflows: a connector affects a dataset, a dataset informs an assistant, and each operation has security, timing, and ownership implications.",
    "Long-running ingestion and indexing operations created uncertainty. Technical concepts—tokens, queues, schedules, and source permissions—needed to be visible without asking every user to think like an infrastructure engineer.",
    "My goal was to turn this complexity into a system of clear states, progressive disclosure, and predictable next actions."
  ],
  roleCards: ["UX Strategy", "Interaction Design", "Design System", "Developer Collaboration", "Enterprise Workflows", "Material Design 3"],
  processSteps: ["Research", "Problem Definition", "User Flows", "Wireframes", "Prototypes", "Developer Handoff"],
  features: [
    { title: "Dataset management", problem: "Knowledge sources needed to be grouped, governed, and made useful to assistants without turning setup into a technical maze.", solution: "Dataset workflows make source relationships, processing state, and next actions explicit—helping teams curate trusted retrieval foundations.", image: "dataset-management.webp", screenshot: "/assets/projects/silent-ai/dataset-management-queue.png", variant: "split", presentation: "floating-card" },
    { title: "Scheduler", problem: "Keeping knowledge current requires recurring operations, but scheduling should not feel like configuring infrastructure.", solution: "The scheduler translates recurring work into an approachable flow with clear timing, scope, and confirmation states.", image: "scheduler.webp", screenshot: "/assets/projects/silent-ai/scheduler-week-view.png", variant: "wide", layout: "centered" },
    { title: "Connectors", problem: "Connecting internal systems requires both trust and clarity around permissions, status, and data boundaries.", solution: "Connector setup was shaped as a guided, status-aware workflow that makes security context and connection health easy to scan.", image: "connectors.webp", screenshot: "/assets/projects/silent-ai/connectors.png", variant: "split", presentation: "floating-card" },
    { title: "AI assistant", problem: "People need to understand what an assistant knows, where its answers come from, and how it should behave.", solution: "Assistant configuration makes the relationship between instructions, datasets, and behaviour visible—without overloading the setup experience.", image: "ai-assistant.webp", screenshot: "/assets/projects/silent-ai/sales-bot.png", variant: "wide", presentation: "laptop", layout: "centered" },
  ],
  designSystem: "Silent AI uses Material Design 3 as a foundation, then extends it with reusable enterprise patterns and semantic tokens. This creates a dependable baseline for dense workflows while leaving room for the platform’s own product character.",
  designSystemItems: ["Typography", "Colors", "Buttons", "Inputs", "Tables", "Navigation", "Status chips", "Dialogs", "Icons"],
  outcomes: ["Simplified enterprise workflows across interconnected AI modules.", "Created reusable patterns for data-heavy states and long-running operations.", "Improved transparency around processing, queues, and system status.", "Established a consistent foundation across multiple platform modules."]
};

export const kodeOsNarrative: CaseStudyNarrative = {
  introduction: "KODE OS is a facilities operations platform that brings buildings, equipment, events, and performance data into one clearer operational view.",
  overview: [
    "KODE OS was designed for facilities teams responsible for complex commercial environments. It brings information from building systems, operational events, dashboards, and locations into a single product across desktop and mobile.",
    "The business opportunity was to make a dense operational environment easier to navigate: help teams see what needs attention, understand the state of a building, and make decisions without moving between disconnected tools.",
    "My work focused on shaping the end-to-end product experience—from research, information architecture, and visual language through the responsive interface direction."
  ],
  challenge: [
    "Facilities work is inherently interconnected. A single decision can involve a building, a system, a device, an event, and the people who need to respond. The experience needed to make these relationships understandable without hiding important operational detail.",
    "Research in the supplied presentation identified three recurring friction points: complex onboarding, information overload, and accessibility concerns. The design challenge was to turn that evidence into a product structure that felt calm, legible, and actionable."
  ],
  roleCards: ["UX Research", "Information Architecture", "User Flows", "Interaction Design", "Visual Design", "Responsive Product Design"],
  processSteps: ["Research", "Problem Definition", "User Persona", "Site Map", "Wireframes", "Prototype", "Developer Handoff"],
  processArtifacts: {
    research: "/assets/projects/kode-os/research.jpg",
    persona: "/assets/projects/kode-os/user-persona.jpg",
    sitemap: "/assets/projects/kode-os/sitemap.jpg"
  },
  features: [
    { title: "Research", problem: "The team needed a shared picture of the experience gaps before deciding what the platform should simplify.", solution: "The research framed the work around onboarding complexity, data overload, and accessibility—giving later decisions a clear, user-centred foundation.", image: "research-insights.png", screenshot: "/assets/projects/kode-os/research-insights.png", variant: "wide", presentation: "research", layout: "centered" },
    { title: "User persona", problem: "A platform for facilities operations must serve people who balance building systems, maintenance priorities, and time-sensitive decisions.", solution: "The persona grounded the work in a facilities manager’s real responsibilities: maintaining multiple buildings, monitoring systems, and turning operational data into action.", image: "persona-card.jpg", screenshot: "/assets/projects/kode-os/persona-card.jpg", variant: "split", presentation: "persona" },
    { title: "Site map", problem: "The product’s many areas—buildings, dashboards, events, settings, and profiles—needed a hierarchy that users could learn and trust.", solution: "A detailed site map clarified the platform’s navigation model and made the relationship between operational modules explicit before screens were designed.", image: "site-map-architecture.png", screenshot: "/assets/projects/kode-os/site-map-architecture.png", variant: "wide", presentation: "architecture", layout: "centered" },
    { title: "Style guide", problem: "A data-rich product needs visual rules that support scanning, hierarchy, and state recognition across every surface.", solution: "A deep blue foundation with accessible blue, green, red, and yellow states created a recognisable operational language for interfaces, data, and feedback.", image: "style-guide.jpg", screenshot: "/assets/projects/kode-os/style-guide.jpg", variant: "wide", presentation: "style-guide" },
    { title: "Mobile experience", problem: "Facilities teams need important building context while moving between locations—not only at a desktop workstation.", solution: "The mobile direction brings systems, maps, dashboards, events, and account controls into concise, high-contrast phone flows.", image: "mobile-experience.png", screenshot: "/assets/projects/kode-os/mobile-experience.png", variant: "wide", presentation: "devices", layout: "centered" },
    { title: "Desktop experience", problem: "Dense information needs enough space for teams to compare assets, events, maps, schedules, and performance without losing context.", solution: "Desktop concepts use a broad operational canvas for layered dashboards and detailed management views, while retaining a coherent visual system.", image: "desktop-dashboard-composition.png", screenshot: "/assets/projects/kode-os/desktop-dashboard-composition.png", variant: "wide", presentation: "desktop", layout: "centered" }
  ],
  designSystem: "The supplied style guide established a dark operational canvas, a blue-led core palette, semantic status colours, and a recognisable logo system. On the case study, those foundations are treated as a coherent product language rather than a collection of isolated brand pages.",
  designSystemItems: ["Oxford Blue", "Sapphire Blue", "Capri Blue", "Status colours", "Gradient tokens", "Logo clear space", "Mobile components", "Desktop patterns"],
  outcomes: ["Turned research findings into a clearer product structure for facilities operations.", "Created a documented navigation model across complex operational modules.", "Established a responsive visual language for mobile and desktop product surfaces.", "Defined reusable brand, colour, and component foundations for a more consistent experience."],
  headings: {
    overview: ["Operational clarity for", "complex facilities."],
    challenge: ["From fragmented signals", "to useful action."],
    role: ["Shaping the system", "from the ground up."],
    process: ["Evidence into", "an operational model."],
    designSystem: ["A visual language", "built to perform."],
    results: ["A clearer foundation", "for daily operations."]
  }
};

export function getNarrative(project: Project) {
  if (project.slug === "silent-ai") return silentAiNarrative;
  if (project.slug === "kode-os") return kodeOsNarrative;
  return null;
}
