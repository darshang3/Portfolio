import { PersonalProfile, Project, ExperienceItem, EducationItem } from '../types/portfolio';
import heroWorkspaceImg from '../assets/images/hero_designer_workspace_1791959475945.jpg';
import projectDesignSystemImg from '../assets/images/project_design_system_1791959477816.jpg';
import projectFintechImg from '../assets/images/project_fintech_wealth_1791959478360.jpg';
import projectAiImg from '../assets/images/project_ai_orchestration_1791959477890.jpg';
import projectHealthImg from '../assets/images/project_health_platform_1791959478372.jpg';

// Bundled authentic visual assets with static fallbacks
export const IMAGES = {
  heroWorkspace: heroWorkspaceImg || '/assets/images/hero_designer_workspace_1791959475945.jpg',
  projectDesignSystem: projectDesignSystemImg || '/assets/images/project_design_system_1791959477816.jpg',
  projectFintech: projectFintechImg || '/assets/images/project_fintech_wealth_1791959478360.jpg',
  projectAi: projectAiImg || '/assets/images/project_ai_orchestration_1791959477890.jpg',
  projectHealth: projectHealthImg || '/assets/images/project_health_platform_1791959478372.jpg',
};

export const defaultProfile: PersonalProfile = {
  name: 'Julian Vance', // [Editable Placeholder: Your Name]
  roleTitle: 'Senior Product Designer',
  yearsExperience: 5,
  location: 'San Francisco, CA / Remote',
  currentRole: 'Lead Product Designer at Acme Labs', // [Editable Placeholder: Current Company]
  availability: 'Open to select senior & lead design opportunities',
  headline: 'Designing digital products that feel intuitive and make a difference.',
  leadCopy: 'Over the past 5 years, I have partnered with cross-functional engineering, product, and executive teams to build scalable design systems, multi-surface fintech platforms, and complex workflow tools that turn intricate systems into effortless human experiences.',
  email: 'designer.portfolio.placeholder@example.com', // [Editable Placeholder: Your Email]
  linkedin: 'https://linkedin.com/in/placeholder-designer', // [Editable Placeholder]
  github: 'https://github.com/placeholder-designer',
  dribbble: 'https://dribbble.com/placeholder-designer',
  twitter: 'https://x.com/placeholder_des',
  resumeDownloadUrl: '#resume',
};

export const defaultProjects: Project[] = [
  {
    id: 'proj-1',
    slug: 'symphony-design-system',
    title: 'Symphony Multi-Platform Design System',
    productName: 'Symphony UI Platform', // [Editable Placeholder: Product/Company Name]
    shortDescription: 'Unified 4 fragmented web and mobile codebases into a single accessible design token architecture and component ecosystem serving 60+ engineers.',
    role: 'Lead Systems Designer & Architecture',
    category: 'Design Systems',
    duration: '8 Months',
    year: '2024 · 2025',
    coverImage: IMAGES.projectDesignSystem,
    metrics: [
      { label: 'Time-to-Production', value: '-42%', context: 'Sprint component assembly time reduced across 6 product squads', isVerified: true },
      { label: 'Accessibility Audit', value: '100% WCAG AA', context: 'Zero critical contrast or focus trap regressions across 45 tokens', isVerified: true },
      { label: 'Engineering Adoption', value: '94%', context: 'Active usage across cross-platform repository builds', isVerified: true },
    ],
    overview: 'As the product portfolio expanded from a single web utility to four distinct multi-surface enterprise applications, UI inconsistencies and duplicate CSS codebases created severe engineering friction. I established the Symphony design system from foundational typography tokens to composable React and React Native primitives.',
    theProblem: 'Four disparate teams were rewriting button states, form validation flows, and modal drawers independently. Sprints were repeatedly delayed by redundant visual QA, and brand coherence across customer touchpoints was fractured.',
    theChallenge: 'Balancing the strictness required for enterprise accessibility (contrast, keyboard trapping, dark mode calibration) with the velocity and flexibility needed by fast-moving product teams without over-engineering component props.',
    researchAndDiscovery: 'Conducted 18 structured interviews across frontend engineers, QA leads, and brand managers. Audited 340 existing UI components, discovering 26 distinct button implementations and 14 variations of neutral gray.',
    designDecisions: [
      'Engineered a three-tier design token model (Global, Semantic, Component-scoped) synchronizing directly with Figma Variables and Tailwind CSS config.',
      'Designed a resilient keyboard-navigation navigation model with visible high-contrast focus rings complying with WCAG 2.2 AA standards.',
      'Built interactive component documentation with live props playgrounds and copy-paste code snippets.',
      'Pioneered an opt-in deprecation path allowing squads to migrate complex screens incrementally without breaking live production deployments.',
    ],
    keyOutcomes: [
      'Accelerated average feature UI delivery velocity from 3.2 weeks to 1.8 weeks per major workflow.',
      'Reduced duplicate visual QA bug tickets filed per sprint by 68%.',
      'Achieved unanimous adoption across 8 product squads within 6 months of v1 launch.',
    ],
    testimonial: {
      quote: 'Julian turned our chaotic frontend sprawl into a joy to build with. The clarity of token architecture and care for developer ergonomics set a new standard for our organization.',
      author: 'VP of Engineering',
      role: 'Core Platform Engineering',
      company: 'Enterprise SaaS Co. [Placeholder]',
    },
    artifacts: [
      {
        title: 'Semantic Token Architecture',
        caption: 'Three-tiered token model linking brand primitives to functional UI semantics.',
        type: 'system',
        previewDetails: ['Surface / Canvas layers', 'Hairline border contrast scale', 'Interactive state feedback matrices'],
      },
      {
        title: 'Component Ergonomics',
        caption: 'Refined prop interfaces minimizing boilerplate while enforcing accessibility defaults.',
        type: 'ui',
        previewDetails: ['Button & Action controls', 'Data display primitives', 'Modal & sheet overlays with focus locks'],
      },
    ],
    nextProjectSlug: 'aura-wealth-management',
  },
  {
    id: 'proj-2',
    slug: 'aura-wealth-management',
    title: 'Aura Next-Gen Wealth & Portfolio Management',
    productName: 'Aura Private Wealth', // [Editable Placeholder: Product/Company Name]
    shortDescription: 'Re-imagined the private wealth management dashboard and mobile investor experience, converting high-density portfolio telemetry into calm, actionable insights.',
    role: 'Principal Product Designer (Web & Mobile)',
    category: 'FinTech & B2B',
    duration: '6 Months',
    year: '2024',
    coverImage: IMAGES.projectFintech,
    metrics: [
      { label: 'Portfolio Rebalance Time', value: '4.2 min', context: 'Down from 18 minutes through intuitive split allocation views', isVerified: true },
      { label: 'Client Onboarding Completion', value: '+34%', context: 'Simplified accredited investor verification process', isVerified: true },
      { label: 'Mobile Engagement', value: '+61% WAU', context: 'Weekly active sessions driven by real-time performance summaries', isVerified: true },
    ],
    overview: 'High-net-worth investors and asset managers previously relied on antiquated terminal-like desktop software with overwhelming tables and buried asset allocations. Aura was conceived as a premium, editorial financial cockpit combining institutional rigor with consumer-grade elegance.',
    theProblem: 'Users reported high cognitive fatigue and anxiety when navigating multi-asset portfolios across equities, private equity, fixed income, and currencies. Key risk indicators were buried three navigation levels deep.',
    theChallenge: 'Financial visualization requires precision: numbers cannot be abstracted into vague eye-candy bars. The challenge was maintaining absolute quantitative clarity and compliance while creating an airy, calm, luxury editorial aesthetic.',
    researchAndDiscovery: 'Shadowed 12 certified financial planners and 8 private investors during market open hours. Observed frequent context switching between multiple spreadsheets and financial news feeds just to answer: "What is my true portfolio risk exposure today?"',
    designDecisions: [
      'Structured a split-elevation dashboard prioritizing high-level asset allocation breakdown alongside immediate liquidity trends.',
      'Designed responsive financial chart interactions with haptic scrubbers on mobile and millisecond hover pins on desktop.',
      'Implemented tabular numerals throughout the interface to prevent numerical jitter during live price feeds.',
      'Created an intuitive "Scenario Modeling" sandbox letting investors simulate tax impact and rebalancing outcomes before committing trades.',
    ],
    keyOutcomes: [
      'Grew client portfolio assets tracked on the platform by $240M+ in the first quarter post-launch.',
      'Received 4.9/5 satisfaction rating from participating pilot wealth managers.',
      'Decreased user-reported onboarding friction and support tickets by 45%.',
    ],
    testimonial: {
      quote: 'The elegance of Aura’s portfolio visualizations made complex multi-currency rebalancing feel as natural as reading a magazine. Exceptional craft.',
      author: 'Head of Product',
      role: 'Wealth Products',
      company: 'Fintech Capital [Placeholder]',
    },
    artifacts: [
      {
        title: 'Portfolio Scrubber & Allocation Arc',
        caption: 'Tactile chart interaction allowing precise historical point-in-time asset inspections.',
        type: 'ui',
        previewDetails: ['Dynamic risk-weighted pie chart', 'Performance vs benchmark toggle', 'Instant dividend projection'],
      },
    ],
    nextProjectSlug: 'kinetic-ai-orchestration',
  },
  {
    id: 'proj-3',
    slug: 'kinetic-ai-orchestration',
    title: 'Kinetic Human-Centric Prompt & Workflow Orchestration',
    productName: 'Kinetic AI Studio', // [Editable Placeholder: Product/Company Name]
    shortDescription: 'Designed an interactive node-and-canvas workflow orchestration tool that enables product teams to construct, evaluate, and deploy multi-model pipelines without coding.',
    role: 'Lead Product Designer',
    category: 'AI & Tools',
    duration: '5 Months',
    year: '2023 · 2024',
    coverImage: IMAGES.projectAi,
    metrics: [
      { label: 'Pipeline Construction', value: '3x Faster', context: 'Time-to-first-working-prompt-flow reduced for non-technical PMs', isVerified: true },
      { label: 'Evaluation Accuracy', value: '+28%', context: 'Identified prompt edge cases through side-by-side run comparisons', isVerified: true },
      { label: 'Active Pipeline Retention', value: '78%', context: '30-day team retention across enterprise beta cohorts', isVerified: true },
    ],
    overview: 'As teams began integrating large language models into enterprise customer workflows, engineering was repeatedly bottle-necked by hardcoded prompt modifications. Kinetic provided a visual, collaborative canvas where product managers, domain experts, and engineers could visually compose prompt chains, run test fixtures, and measure outputs.',
    theProblem: 'Existing visual node tools were either designed for visual effects (like Blender/Unreal) with steep learning curves, or simplistic chat bubbles that could not convey branching logic, fallback models, or structured evaluation criteria.',
    theChallenge: 'Preventing canvas sprawl and cognitive overload when pipelines grew past 15 nodes, while ensuring latency, token cost, and confidence metrics remained transparent at every step.',
    researchAndDiscovery: 'Conducted collaborative mapping sessions with 14 AI engineering teams. Mapped out failure points where prompts would fail silently in production due to lack of visual regression testing.',
    designDecisions: [
      'Developed an auto-layout canvas system with smart snapping that prevents noodle wire spaghetti and maintains readability.',
      'Designed a side-by-side "Run Inspector" comparing outputs across multiple models with highlighted semantic diffs.',
      'Created inline contextual node configuration panels that slide open without losing viewport zoom coordinates.',
      'Integrated live cost and token estimate telemetry directly within the node headers without visual clutter.',
    ],
    keyOutcomes: [
      'Empowered non-engineering product teams to build and deploy 120+ operational workflows in production.',
      'Cut iteration turnaround on prompt edge case debugging from 4 days to under 45 minutes.',
      'Standardized enterprise governance with visual approval checkpoints before deployment.',
    ],
    testimonial: {
      quote: 'Julian has that rare superpower to make intensely complex backend mechanics feel intuitive and approachable. Kinetic became an essential tool for our entire organization.',
      author: 'Founder & CTO',
      role: 'Enterprise AI Lab',
      company: 'Kinetic [Placeholder]',
    },
    artifacts: [
      {
        title: 'Node Canvas & Inspector Architecture',
        caption: 'Visual workflow graph with intelligent connector snapping and inline parameter tuning.',
        type: 'flow',
        previewDetails: ['Branching conditional routing', 'Model latency indicator', 'Side-by-side test fixture matrix'],
      },
    ],
    nextProjectSlug: 'loom-health-care-path',
  },
  {
    id: 'proj-4',
    slug: 'loom-health-care-path',
    title: 'Loom Health Patient Onboarding & Clinical Care Path',
    productName: 'Loom Health Systems', // [Editable Placeholder: Product/Company Name]
    shortDescription: 'Redesigned the digital front door for outpatient care, transforming anxious medical intake forms into an empathetic, step-by-step guided journey across mobile and web.',
    role: 'Senior UX / UI Designer',
    category: 'HealthTech',
    duration: '7 Months',
    year: '2023',
    coverImage: IMAGES.projectHealth,
    metrics: [
      { label: 'Intake Completion Rate', value: '91%', context: 'Up from 62% on legacy web portal forms', isVerified: true },
      { label: 'Waiting Room Check-in', value: '< 90 sec', context: 'Average pre-visit mobile confirmation time', isVerified: true },
      { label: 'Accessibility Score', value: '99/100', context: 'Tested with senior patients and screen reader assistive tools', isVerified: true },
    ],
    overview: 'Medical intake forms are notorious for inducing anxiety and abandonment. Loom Health wanted to transform the patient pre-visit experience from a tedious chore into an empathetic, reassuring digital touchpoint that clinical teams could trust for clean health records.',
    theProblem: 'Patients faced 20+ unstructured screens requesting repetitive medical history, insurance cards, and consent disclosures on small mobile screens. Over 38% arrived at clinics without completed forms, backing up waiting rooms.',
    theChallenge: 'Adhering to strict HIPAA compliance and multi-party insurance card OCR validation while keeping the interface feeling warm, reassuring, and accessible to non-tech-savvy users.',
    researchAndDiscovery: 'Conducted in-clinic usability testing across 25 diverse patients (ages 19 to 78), observing where confusion, cognitive friction, and privacy concerns caused drop-offs.',
    designDecisions: [
      'Chunked intake into 4 thematic chapters with clear time estimates and automatic progress saving.',
      'Designed a smart camera capture guidance frame for insurance cards with instant verification feedback.',
      'Engineered an empathetic typography system with generous font sizes, high contrast, and gentle microcopy.',
      'Created a unified post-visit summary screen synthesizing doctor notes, prescription pick-up status, and scheduled follow-ups.',
    ],
    keyOutcomes: [
      'Elevated pre-visit intake completion rate to 91% across 14 hospital networks.',
      'Reduced front-desk check-in bottlenecks by 65%, freeing staff to focus on vulnerable patients.',
      'Earned high praise from clinical staff for delivering cleanly structured patient history data.',
    ],
    testimonial: {
      quote: 'Julian brought empathy and meticulous craft to an area of healthcare that desperately needed both. Our patients genuinely commented on how painless the process was.',
      author: 'Chief Medical Officer',
      role: 'Clinical Operations',
      company: 'Loom Health [Placeholder]',
    },
    artifacts: [
      {
        title: 'Step-by-Step Patient Flow',
        caption: 'Progressive disclosure patterns breaking complex medical history into digestible moments.',
        type: 'flow',
        previewDetails: ['Smart insurance scanner guide', 'Medication autocomplete search', 'Biometric consent signature'],
      },
    ],
    nextProjectSlug: 'symphony-design-system',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Acme Product Labs', // [Editable Placeholder: Company Name]
    role: 'Senior Product Designer',
    period: '2023 – Present · 2+ Years',
    location: 'San Francisco, CA',
    workArrangement: 'Hybrid',
    summary: 'Lead end-to-end design for core multi-surface SaaS and fintech workflows. Direct the design system evolution, collaborate with product directors and engineering managers on roadmap definition, and mentor junior design teammates.',
    keyContributions: [
      'Spearheaded the redesign of the enterprise analytics platform, lifting active task completion rate by 34%.',
      'Governed the global design token system across web and mobile surfaces, reducing design-to-code drift.',
      'Established quarterly user research cadences, running 40+ moderated customer discovery sessions.',
      'Introduced high-fidelity motion guidelines that improved perceived application responsiveness.',
    ],
    coreSkills: ['Design Systems', 'Design Leadership', 'Interaction Design', 'Product Strategy', 'Figma Variables'],
  },
  {
    id: 'exp-2',
    company: 'LinearLab Studio', // [Editable Placeholder: Company Name]
    role: 'Product Designer II',
    period: '2021 – 2023 · 2 Years',
    location: 'New York, NY',
    workArrangement: 'Remote',
    summary: 'Owned product design for consumer mobile apps and creator economy tools. Partnered closely with iOS and React Native engineers to ship buttery 60fps micro-interactions and onboarding experiences.',
    keyContributions: [
      'Redesigned the mobile onboarding funnel, driving an 18% improvement in D30 user retention.',
      'Built and maintained an accessible component library in Figma synced directly with Storybook.',
      'Facilitated weekly cross-functional critique and design review rituals across 15 designers and engineers.',
      'Conducted iterative usability tests on prototypes, identifying critical navigation bottlenecks early.',
    ],
    coreSkills: ['Mobile App Design', 'Prototyping', 'User Research', 'Design Systems', 'Micro-Interactions'],
  },
  {
    id: 'exp-3',
    company: 'Monolith Interactive', // [Editable Placeholder: Company Name]
    role: 'UX / UI Designer',
    period: '2019 – 2021 · 2 Years',
    location: 'Seattle, WA',
    workArrangement: 'On-site',
    summary: 'Crafted digital brand experiences, responsive e-commerce web applications, and customer research sprints for innovative technology clients and retail startups.',
    keyContributions: [
      'Delivered 12 end-to-end client design engagements from initial discovery through design QA.',
      'Created wireframes, customer journey maps, and high-fidelity prototypes for rapid stakeholder alignment.',
      'Established modular UI kits and digital style guides adhering to WCAG 2.1 AA accessibility guidelines.',
    ],
    coreSkills: ['Wireframing', 'Visual Design', 'Information Architecture', 'Usability Testing', 'HTML/CSS Prototyping'],
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'edu-1',
    institution: 'University of Washington', // [Editable Placeholder: University Name]
    degree: 'Bachelor of Science (B.S.)',
    field: 'Human-Computer Interaction (HCI) & Informatics',
    period: '2015 – 2019',
    location: 'Seattle, WA',
    highlights: [
      'Summa Cum Laude · Dean’s Honor List',
      'Senior Capstone: Universal Accessibility & Assistive Touch Interfaces',
      'President, Student Design & Creative Tech Association',
    ],
  },
  {
    id: 'edu-2',
    institution: 'Nielsen Norman Group (NN/g)',
    degree: 'UX Master Certified (UXMC)',
    field: 'Design System Governance & Interaction Architecture',
    period: '2022',
    highlights: [
      'Specialized in Quantitative Usability Testing & Enterprise IA',
      'Credential Verification ID: NN-94821',
    ],
  },
];

export const designPrinciples = [
  {
    number: '01',
    title: 'Systems Before Pixels',
    description: 'Great interfaces are not decorated; they are structurally sound. I construct design systems with disciplined tokens, scalable hierarchy, and developer empathy from day one.',
  },
  {
    number: '02',
    title: 'Intentional Friction vs. Velocity',
    description: 'Not every click should be frictionless. For critical actions like financial trades or medical data consent, thoughtful friction builds trust, clarity, and deliberate user intention.',
  },
  {
    number: '03',
    title: 'Observable Craft in Details',
    description: 'The difference between software that feels utilitarian and software that feels magical is in the micro-interactions: responsive feedback, graceful empty states, and legible typography.',
  },
];
