import type { Project } from "@/lib/projects";

export type Feature = {
  title: string;
  problem: string;
  solution: string;
  image: string;
  details?: string[];
  screenshot?: string;
  secondaryScreenshot?: string;
  layout?: "split" | "centered";
  presentation?: "laptop" | "floating-card" | "multi-screen" | "editorial" | "devices" | "desktop" | "research" | "persona" | "architecture" | "style-guide" | "allam-journey" | "capability";
  variant: "wide" | "portrait" | "split";
};

export type CaseStudyNarrative = {
  introduction: string;
  overview: string[];
  challenge: string[];
  roleCards: string[];
  processSteps: string[];
  processIntro?: string;
  features: Feature[];
  designSystem: string;
  designSystemItems: string[];
  outcomes: string[];
  overviewCards?: { title: string; text: string }[];
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
  processIntro: "Each phase gave the team a shared way to turn enterprise complexity into decisions that could be tested, implemented, and scaled.",
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
  processIntro: "Each phase gave the team a shared way to turn enterprise complexity into decisions that could be tested, implemented, and scaled.",
  processArtifacts: {
    research: "/assets/projects/kode-os/research.jpg",
    persona: "/assets/projects/kode-os/user-persona.jpg",
    sitemap: "/assets/projects/kode-os/sitemap.jpg"
  },
  features: [
    { title: "Research", problem: "The team needed a shared picture of the experience gaps before deciding what the platform should simplify.", solution: "The research framed the work around onboarding complexity, data overload, and accessibility—giving later decisions a clear, user-centred foundation.", image: "research-insights.png", screenshot: "/assets/projects/kode-os/research-insights.png", variant: "wide", presentation: "research" },
    { title: "User persona", problem: "A platform for facilities operations must serve people who balance building systems, maintenance priorities, and time-sensitive decisions.", solution: "The persona grounded the work in a facilities manager’s real responsibilities: maintaining multiple buildings, monitoring systems, and turning operational data into action.", image: "persona-card.jpg", screenshot: "/assets/projects/kode-os/persona-card.jpg", variant: "split", presentation: "persona" },
    { title: "Site map", problem: "The product’s many areas—buildings, dashboards, events, settings, and profiles—needed a hierarchy that users could learn and trust.", solution: "A detailed site map clarified the platform’s navigation model and made the relationship between operational modules explicit before screens were designed.", image: "site-map-architecture.png", screenshot: "/assets/projects/kode-os/site-map-architecture.png", variant: "wide", presentation: "architecture", layout: "centered" },
    { title: "Mobile experience", problem: "Facilities teams need important building context while moving between locations—not only at a desktop workstation.", solution: "The mobile direction brings systems, maps, dashboards, events, and account controls into concise, high-contrast phone flows.", image: "mobile-experience.png", screenshot: "/assets/projects/kode-os/mobile-experience.png", variant: "wide", presentation: "devices" },
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

export const allamNarrative: CaseStudyNarrative = {
  introduction: "Allam makes advanced AI capabilities feel approachable through a familiar Android experience—bringing conversation, voice, discovery, and trusted service flows into one connected product.",
  overview: [
    "Allam is an Android AI assistant designed to help people interact with AI through chat, voice, prompt templates, image generation, guided prompts, and personalised settings.",
    "The product brings together everyday assistance and guided service experiences in one mobile environment. Users can start with an open question, choose a useful template, continue a saved conversation, or move into a more focused interaction when the task calls for it."
  ],
  overviewCards: [
    { title: "What it is", text: "A mobile AI assistant that combines chat, voice, discovery, and guided experiences in a single Android product." },
    { title: "Who it’s for", text: "People who want a clear, approachable way to use AI for everyday questions, exploration, and service-related tasks." },
    { title: "Why it matters", text: "It turns a broad set of AI capabilities into understandable starting points instead of asking users to know what to prompt first." }
  ],
  challenge: [
    "AI products can feel powerful but unpredictable. The experience needed to create clear entry points without reducing the flexibility of open conversation—and make voice, chat, templates, and generated content feel like parts of the same product rather than separate tools.",
    "Conversation history also needed to remain useful as it grew. Templates had to reveal what the assistant could do, while government-service experiences required trust, clarity, and focus. Across every surface, the Android experience needed a consistent interaction language."
  ],
  roleCards: ["Product Design", "Android UX", "Interaction Design", "Voice Experience", "Conversation Design", "Design System", "Prototyping", "Developer Handoff"],
  processSteps: ["Research", "Problem Definition", "User Flows", "Wireframes", "Prototypes", "Developer Handoff"],
  processIntro: "The process turned a broad set of AI capabilities into clear entry points, connected journeys, and interaction patterns that could carry across Android surfaces.",
  features: [
    { title: "Product experience overview", problem: "Users need to move naturally between starting a conversation, exploring capabilities, navigating saved work, and managing their account.", solution: "The product ecosystem establishes a coherent mobile foundation across the start page, navigation, discovery, and personal settings—so each surface feels connected to the next.", image: "allam-product-journey.png", screenshot: "/assets/projects/allam/allam-product-journey.png", variant: "wide", presentation: "allam-journey", layout: "centered" },
    { title: "AI chat experience", problem: "A blank chat canvas can leave users uncertain about where to begin, while richer responses and image generation can interrupt the flow if they feel bolted on.", solution: "Guided prompts, category-led starts, response actions, and in-conversation media create a flexible journey between open-ended questions and structured assistance.", image: "allam-chat-experience.png", screenshot: "/assets/projects/allam/allam-chat-experience.png", variant: "split", presentation: "editorial" },
    { title: "Voice experience", problem: "Voice interaction needs to communicate exactly what the assistant is doing—listening, processing, paused, or speaking—without distracting from the conversation.", solution: "Clear state feedback and large, recoverable controls make spoken interaction easier to start, understand, interrupt, and resume.", image: "allam-voice-experience.png", screenshot: "/assets/projects/allam/allam-voice-experience.png", variant: "split", presentation: "editorial" },
    
  ],
  designSystem: "The Allam design system uses Material Design 3 as a consistent Android foundation across chat, voice, discovery, settings, and authentication. A shared set of dark surfaces, app bars, navigation patterns, cards, controls, chips, and states lets varied AI interactions still feel recognisably part of one product.",
  designSystemItems: ["Dark surfaces", "Top app bars", "Navigation drawer", "Cards", "Chat bubbles", "Buttons", "Text fields", "Chips", "Status states", "Spacing tokens", "Typography", "Icons"],
  outcomes: ["Unified chat, voice, discovery, and account experiences into a connected mobile product.", "Created consistent interaction patterns across multiple AI capabilities.", "Improved discoverability through templates and guided prompts.", "Established reusable Android patterns for future product growth.", "Made complex AI features feel more approachable through clear, focused flows."],
  headings: {
    overview: ["An approachable way", "into AI."],
    challenge: ["Many ways to interact.", "One clear experience."],
    role: ["Designing the mobile", "AI experience."],
    process: ["From broad capability", "to focused moments."],
    designSystem: ["One language for", "many AI moments."],
    results: ["A more approachable", "AI companion."]
  }
};

export const jamorderNarrative: CaseStudyNarrative = {
  introduction: "JamOrder brings ordering and payment into a single hospitality experience—designed to work across self-service, service teams, pickup, delivery, and hotel room service.",
  overview: [
    "JamOrder is Jamatu’s digital ordering and payment platform for hospitality. The public product information describes a modular system for restaurants, hotels, food trucks, and cafés, with options spanning in-house ordering, pickup and delivery, POS-supported service, and hotel room service.",
    "The experience sits between guests and operations: guests need a quick, understandable way to order and pay, while teams need orders to arrive in the right place with enough context to keep service moving."
  ],
  overviewCards: [
    { title: "What it is", text: "A digital ordering and payment platform for hospitality, designed around multiple service models." },
    { title: "Who it serves", text: "Guests ordering on their own terms and hospitality teams coordinating service, orders, and payment." },
    { title: "Why it matters", text: "It connects the guest journey to operational workflows instead of treating ordering as an isolated checkout moment." }
  ],
  challenge: [
    "Hospitality journeys change by context. A guest at a table, a customer collecting an order, a hotel visitor, and a service colleague all need different information and actions—yet the system still has to feel coherent.",
    "The product design challenge was to reduce friction without losing useful context: make self-service feel immediate, give staff dependable order visibility, and make payment feel like a natural end to each service flow."
  ],
  roleCards: ["Product Design", "Service Design", "Ordering Flows", "Payment Experience", "Hospitality Workflows", "Interaction Design", "Design System", "Developer Collaboration"],
  processSteps: ["Service Research", "Journey Mapping", "Flow Design", "Prototypes", "Usability Review", "Developer Handoff"],
  processIntro: "The work centred on connecting guest and operational journeys: mapping service contexts, reducing decision points, and shaping reusable patterns across ordering and payment.",
  features: [
    { title: "In-house ordering", problem: "At-table ordering must be fast enough for a live service environment while remaining easy to understand for guests.", solution: "The product scope supports ordering and payment at the table, bringing the guest’s selection and checkout journey closer together.", details: ["QR self-ordering", "At-table journey", "Digital payment"], image: "in-house", variant: "split", presentation: "capability" },
    { title: "Service and POS", problem: "Staff need a dependable way to take orders and handle payment without breaking the rhythm of service.", solution: "JamWaiter extends JamOrder with POS capabilities for order handling and payment, supporting a connected front-of-house workflow.", details: ["Order capture", "Table service", "Payment handling"], image: "service-pos", variant: "wide", presentation: "capability" },
    { title: "Pickup and delivery", problem: "Pre-order and collection flows need to make the next step obvious for both guests and the team preparing the order.", solution: "Pickup and delivery are treated as service modes within the wider ordering system, rather than separate experiences with their own rules.", details: ["Pre-order", "Collection", "Delivery"], image: "pickup-delivery", variant: "split", presentation: "capability" },
    { title: "Hotel room service", problem: "Room service needs the same ease of ordering while accounting for the context of a guest staying on property.", solution: "The public JamOrder offering includes room-service ordering and payment as a dedicated hospitality module.", details: ["Room-service context", "Order status", "Payment flow"], image: "room-service", variant: "wide", presentation: "capability" }
  ],
  designSystem: "A hospitality platform benefits from a system that can adapt to self-ordering, staff-assisted service, pickup, delivery, and room service without making people relearn the product. The case-study presentation focuses on reusable ordering states, clear actions, status cues, and payment moments—not invented interface screens.",
  designSystemItems: ["Order states", "Menu hierarchy", "Primary actions", "Payment cues", "Service modes", "Status chips", "Guest context", "Operational patterns"],
  outcomes: ["Connected the guest ordering journey with service and payment contexts.", "Created a clear product story across in-house, pickup, delivery, and room-service modes.", "Framed reusable interaction patterns for hospitality ordering workflows.", "Kept the case study grounded in JamOrder’s publicly described product offering without using unverified metrics."],
  headings: { overview: ["Ordering that meets", "hospitality in motion."], challenge: ["One product.", "Many service moments."], role: ["Designing the journey", "around service."], process: ["From service context", "to clear next steps."], designSystem: ["Patterns for every", "service mode."], results: ["A connected foundation", "for hospitality." ] }
};

export const locumTenensNarrative: CaseStudyNarrative = {
  introduction: "A healthcare staffing platform concept focused on helping nurses and medics find opportunities through a clearer, more approachable digital journey.",
  overview: [
    "The portfolio record identifies Locum Tenens as a healthcare staffing platform connecting nurses and medics with job opportunities. The case study is intentionally framed around that verified scope rather than unverified product functionality.",
    "Healthcare staffing journeys often bring together opportunity discovery, availability, professional information, scheduling, and communication. The design opportunity is to make those high-consideration decisions easier to understand without reducing the trust the context requires."
  ],
  overviewCards: [
    { title: "What it is", text: "A healthcare staffing platform focused on connecting nurses and medics with job opportunities." },
    { title: "Who it’s for", text: "Healthcare professionals looking for work opportunities, alongside the organisations coordinating staffing needs." },
    { title: "Why it matters", text: "Staffing choices are time-sensitive and trust-dependent, so the experience needs to make information easier to evaluate." }
  ],
  challenge: [
    "Healthcare staffing is not a simple browse-and-apply journey. Professionals and organisations need to understand opportunities, availability, requirements, and timing while managing a high level of professional responsibility.",
    "The design challenge was to create a calm, legible digital experience for a complex coordination problem—using clear hierarchy and progressive disclosure without overstating what the platform automates."
  ],
  roleCards: ["Product Design", "UX Strategy", "Information Architecture", "Interaction Design", "Responsive Design", "Design System", "Prototyping", "Developer Collaboration"],
  processSteps: ["Context Research", "Opportunity Mapping", "Information Architecture", "Flow Design", "Prototypes", "Developer Handoff"],
  processIntro: "The approach started with the decisions people need to make when evaluating a role, then organised information into focused journeys that can support confidence and clarity.",
  features: [
    { title: "Opportunity discovery", problem: "Healthcare work opportunities can be time-sensitive and information-heavy, making it difficult to compare what matters at a glance.", solution: "The design direction prioritised a clear information hierarchy so people can orient themselves before committing to a next step.", details: ["Role context", "Clear hierarchy", "Focused next steps"], image: "opportunity-discovery", variant: "split", presentation: "capability" },
    { title: "Professional profile", problem: "A professional’s information needs to feel considered and trustworthy without asking them to navigate an overwhelming form experience.", solution: "The product framing treated profile information as a structured, progressive experience—helping people understand what is needed and why.", details: ["Professional context", "Progressive disclosure", "Clear status"], image: "professional-profile", variant: "wide", presentation: "capability" },
    { title: "Staffing coordination", problem: "Staffing involves multiple people, changing availability, and decisions that need to be easy to revisit.", solution: "The experience was shaped around visible context and clear follow-up actions, so coordination can remain understandable as a journey evolves.", details: ["Availability context", "Follow-up actions", "Shared visibility"], image: "staffing-coordination", variant: "split", presentation: "capability" }
  ],
  designSystem: "The visual direction focuses on trust, readability, and consistency: clear hierarchy for information-rich decisions, predictable states, and reusable patterns that can support a responsive healthcare staffing experience. It deliberately avoids claiming specific compliance or credentialing functionality that is not documented for this project.",
  designSystemItems: ["Information hierarchy", "Profile patterns", "Opportunity cards", "Status states", "Action hierarchy", "Responsive layout", "Accessible contrast", "Spacing tokens"],
  outcomes: ["Created a clear portfolio narrative for a healthcare staffing platform focused on opportunity discovery.", "Established a user-centred framing for high-consideration healthcare work journeys.", "Defined reusable experience principles around clarity, context, and next actions.", "Kept the case study limited to verified project scope and avoided unsupported operational claims or metrics."],
  headings: { overview: ["Making opportunity", "easier to navigate."], challenge: ["High-consideration work", "needs clear context."], role: ["Designing for confidence", "and clarity."], process: ["From complex context", "to focused journeys."], designSystem: ["A dependable language", "for important decisions."], results: ["A clearer direction", "for staffing journeys." ] }
};

export function getNarrative(project: Project) {
  if (project.slug === "silent-ai") return silentAiNarrative;
  if (project.slug === "allam") return allamNarrative;
  if (project.slug === "kode-os") return kodeOsNarrative;
  if (project.slug === "jamorder") return jamorderNarrative;
  if (project.slug === "locum-tenens") return locumTenensNarrative;
  return null;
}
