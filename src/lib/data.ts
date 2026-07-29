export const profile = {
  name: "Yadeesh Kumbalathil Ramesh",
  role: "Program Manager",
  location: "Boston, MA",
  email: "kumbalathilramesh.y@northeastern.edu",
  linkedin: "https://www.linkedin.com/in/yadeeshkr/",
  tagline: "Turning ambiguity into delivered programs",
  summary:
    "Something's messy, there's a deadline - that's what excites me. I've drafted policy, run events, built teams, and fixed problems before they escalated. The training behind it - an Executive MBA, a PGDM in IT Management, a CSM credential, and an MS in Project Management from Northeastern - matters less than the habit itself: find what's broken, fix it. Perfect conditions aren't the job. Working with what's there is.",
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Raah2Rashtra India Foundation",
    role: "Founder & Program Manager",
    period: "Jul 2025 - Present",
    points: [
      "Built a full project management framework from scratch across 3 workstreams and a 21-member team; delivered 10+ concurrent programs across 5 sites on schedule with no budget overrun.",
      "Translated ambiguous, conflicting stakeholder objectives into structured plans with clear milestones; secured institutional approvals across all 5 government sites.",
      "Designed ownership routines and progress checkpoints for a volunteer workforce, scaling impact to 1,500+ students in under 12 months.",
      "Deployed the foundation's website end-to-end and defined the roadmap for an AI-powered scholarship-matching platform.",
    ],
  },
  {
    company: "Simplotel Technologies Pvt. Ltd.",
    role: "Customer Success Manager",
    period: "Sep 2023 - Sep 2024",
    points: [
      "Diagnosed pricing inefficiencies across 15 enterprise accounts (15% of company revenue) by analyzing 500,000+ traffic and room-night records; recommendations were adopted portfolio-wide, improving gross margin by 12%.",
      "Owned end-to-end account strategy for 60 enterprise clients, driving 22% revenue growth across 2 consecutive quarters.",
      "Reduced onboarding setup time by 20% and sustained 0% churn by owning scope, timelines, and cross-team coordination through go-live.",
      "Reframed upsell conversations around demonstrated ROI, contributing to 8% growth in upsell and cross-sell revenue.",
    ],
  },
];

export type Leadership = {
  org: string;
  role: string;
  period: string;
  points: string[];
};

export const leadership: Leadership[] = [
  {
    org: "PMI Washington DC Chapter (PMIWDC)",
    role: "Policy Specialist - Strategy & Governance",
    period: "Jun 2026 - Present",
    points: [
      "Conducting a comprehensive inventory and gap analysis of existing chapter policies.",
      "Collaborating with project leadership to draft, revise, and standardize policies across functional areas, and developing training materials for organization-wide adoption.",
    ],
  },
  {
    org: "Asia Australia Youth Association, India Chapter",
    role: "Vice President, Careers",
    period: "Apr 2026 - Present",
    points: [
      "Drive end-to-end planning and execution of careers programming across 20+ countries in Asia, reporting directly to the National Director.",
      "Manage the careers vertical across India, overseeing scheduling, resource allocation, and stakeholder alignment with chapter leads.",
    ],
  },
];

export type GlobalEngagement = {
  org: string;
  role: string;
  period: string;
  description: string;
};

export const globalEngagement: GlobalEngagement[] = [
  {
    org: "UN80 Initiative",
    role: "Youth Delegate",
    period: "Dec 2025",
    description:
      "Delivered a formal intervention at the UN80 briefing and engaged in direct policy dialogue with Guy Ryder, Under-Secretary-General of the United Nations, advocating for reform that centers grassroots impact and youth inclusion.",
  },
  {
    org: "United Nations - ECOSOC Youth Forum",
    role: "Youth Representative, Major Group of Children and Youth",
    period: "Apr 2025",
    description:
      "Represented MGCY at UN Headquarters in New York, contributing youth perspectives on the 2030 Agenda for Sustainable Development to the High-Level Political Forum.",
  },
  {
    org: "UN Convention to Combat Desertification",
    role: "Member, UNCCD Youth Caucus",
    period: "Jan 2026 - Present",
    description:
      "Contribute to youth-led policy advocacy on land degradation and climate resilience, translating global sustainability frameworks into community-driven action informed by grassroots work in India.",
  },
  {
    org: "Harvard Project for Asian and International Relations (HPAIR)",
    role: "Delegate",
    period: "Aug 2025 - Present",
    description:
      "Selected delegate at the HPAIR Asia Conference, engaging in policy roundtables on governance, sustainability, and social entrepreneurship with peers from 70+ countries.",
  },
];

export const approach = [
  {
    number: "01",
    title: "I build structure from ambiguity.",
    description:
      "When no process exists, I design one. I translate conflicting stakeholder objectives into clear scope, milestones, and ownership before work begins.",
  },
  {
    number: "02",
    title: "I let data drive the decision.",
    description:
      "Pricing, adoption, risk - I dig into the numbers before recommending a direction, and I track whether the recommendation actually moved the metric.",
  },
  {
    number: "03",
    title: "I coordinate across the whole team.",
    description:
      "Delivery rarely lives in one function. I work across engineering, design, marketing, and finance to keep a program moving through every handoff.",
  },
  {
    number: "04",
    title: "I build for adoption, not just delivery.",
    description:
      "A plan only matters if people follow it. I design ownership routines and checkpoints so momentum survives past the kickoff meeting.",
  },
];

export type Project = {
  title: string;
  context: string;
  period: string;
  points: string[];
};

export const projects: Project[] = [
  {
    title: "Bombardier Inc. Aerospace Process Optimization",
    context: "Project Lead, Northeastern University",
    period: "Jan 2026 - Mar 2026",
    points: [
      "Scoped the operating plan and built a RAID log tracking 3 critical-path dependencies and schedule risk drivers using Microsoft Project.",
      "Built a Primavera P6 risk model across 12+ variables, prioritizing mitigations by impact scoring and cutting schedule risk by 18%.",
      "Led Agile sprints for a cross-functional team, improving delivery predictability by 20%.",
    ],
  },
  {
    title: "SkillBridge - DevOps, Agile Governance & Cloud Strategy",
    context: "Project Lead, Northeastern University",
    period: "Apr 2026 - Jun 2026",
    points: [
      "Applied Gene Kim's Three Ways (Flow, Feedback, Continual Learning) to define measurable DevOps practices, including a sub-5-day feature lead-time target.",
      "Evaluated AWS, Azure, and GCP cloud strategies, recommending AWS S3 for ecosystem depth and startup credits.",
      "Designed the agile governance model - a monthly Governance Review Board and inquiry-first escalation - balancing accountability with psychological safety.",
    ],
  },
];

export const education = [
  {
    school: "Northeastern University, Boston, MA",
    degree: "Master of Science in Project Management - GPA: 4.0/4.0",
    period: "Aug 2026",
  },
  {
    school: "Bangalore University, India",
    degree: "Bachelors in Business Administration - Business Analytics & Information Technology Management",
    period: "Aug 2023",
  },
];

export const skills = {
  technical: [
    "SQL",
    "Advanced Excel",
    "Tableau",
    "Power BI",
    "Primavera P6",
    "Microsoft Project",
    "Google Analytics",
    "Python",
    "JIRA",
    "Confluence",
  ],
  certifications: [
    "Certified ScrumMaster",
    "McKinsey Forward Learning Program",
    "BCG Introduction to Strategy Consulting",
    "Mastercard Advisors & Consulting Services",
    "Google Project Management Certificate",
    "PMI Seven AI Project Patterns",
  ],
};
