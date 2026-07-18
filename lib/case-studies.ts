import type { Project } from "@/lib/projects";

export type Feature = {
  title: string;
  problem: string;
  solution: string;
  image: string;
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
    { title: "Dashboard overview", problem: "Teams needed a quick way to understand the health of knowledge operations without opening each module.", solution: "I designed a focused overview that surfaces system activity, assistant readiness, and attention-worthy states before users dive into detail.", image: "dashboard-overview.webp", variant: "wide" },
    { title: "Dataset management", problem: "Knowledge sources needed to be grouped, governed, and made useful to assistants without turning setup into a technical maze.", solution: "Dataset workflows make source relationships, processing state, and next actions explicit—helping teams curate trusted retrieval foundations.", image: "dataset-management.webp", variant: "split" },
    { title: "Queue visibility", problem: "When ingestion takes time, a silent interface makes users question whether work is progressing at all.", solution: "Clear queue states, progress cues, and status language make long-running operations visible and give users a reliable sense of what happens next.", image: "queue-visibility.webp", variant: "portrait" },
    { title: "Scheduler", problem: "Keeping knowledge current requires recurring operations, but scheduling should not feel like configuring infrastructure.", solution: "The scheduler translates recurring work into an approachable flow with clear timing, scope, and confirmation states.", image: "scheduler.webp", variant: "wide" },
    { title: "Connectors", problem: "Connecting internal systems requires both trust and clarity around permissions, status, and data boundaries.", solution: "Connector setup was shaped as a guided, status-aware workflow that makes security context and connection health easy to scan.", image: "connectors.webp", variant: "split" },
    { title: "File upload", problem: "Uploading knowledge is simple in concept, but enterprise users need assurance about what is accepted and what happens after submission.", solution: "The upload experience pairs explicit requirements with transparent processing feedback, reducing ambiguity at every step.", image: "file-upload.webp", variant: "portrait" },
    { title: "AI assistant", problem: "People need to understand what an assistant knows, where its answers come from, and how it should behave.", solution: "Assistant configuration makes the relationship between instructions, datasets, and behaviour visible—without overloading the setup experience.", image: "ai-assistant.webp", variant: "wide" },
    { title: "Design system", problem: "A fast-growing platform can quickly become inconsistent when new modules and states are added independently.", solution: "I established reusable patterns for navigation, data-heavy views, forms, states, and feedback so the platform could grow with a coherent product language.", image: "design-system.webp", variant: "split" }
  ],
  designSystem: "Silent AI uses Material Design 3 as a foundation, then extends it with reusable enterprise patterns and semantic tokens. This creates a dependable baseline for dense workflows while leaving room for the platform’s own product character.",
  designSystemItems: ["Typography", "Colors", "Buttons", "Inputs", "Tables", "Navigation", "Status chips", "Dialogs", "Icons"],
  outcomes: ["Simplified enterprise workflows across interconnected AI modules.", "Created reusable patterns for data-heavy states and long-running operations.", "Improved transparency around processing, queues, and system status.", "Established a consistent foundation across multiple platform modules."]
};

export function getNarrative(project: Project) {
  return project.slug === "silent-ai" ? silentAiNarrative : null;
}
