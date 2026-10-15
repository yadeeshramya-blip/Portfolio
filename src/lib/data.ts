export const profile = {
  name: "Yadeesh Kumbalathil Ramesh",
  role: "Project & Program Manager",
  location: "Boston, MA",
  email: "kumbalathilramesh.y@northeastern.edu",
  linkedin: "https://www.linkedin.com/in/yadeeshkr/",
  tagline: "Building structure where none exists.",
  summary:
    "I'm Yadeesh, a project and program manager in Boston. I've onboarded enterprise clients, audited an admissions backlog, and built a nonprofit's operating system from scratch. Most of it ran in parallel, across U.S. and India time zones, usually without a formal handover.",
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Northeastern University, Boston, MA",
    role: "Application Processor, Foreign Credential Evaluation",
    period: "Sep 2025 - Aug 2026",
    points: [
      "When held applications had gone unchecked, was selected by the Associate Director as 1 of 2 from a team of 20-25 to run a backlog audit; managed its timeline, priorities, and assignments in Slate and notified applicants directly.",
      "Managed workload in Slate so no application stayed in the backlog for long, adapting fast to changing credential regulations worldwide.",
      "Spotted workflow friction and drafted a process-improvement proposal recommending Slate filter and workflow changes to raise quality, speed, and throughput.",
      "Evaluated international academic records against U.S. standards to determine bachelor's-degree equivalency across education systems worldwide.",
      "Trained and mentored new joiners on the evaluation process.",
    ],
  },
  {
    company: "Simplotel Technologies Pvt. Ltd., Bangalore, India",
    role: "Customer Success Manager",
    period: "Sep 2023 - Sep 2024",
    points: [
      "Facing onboarding as the top client drop-off risk, owned delivery end to end (scope, timelines, milestones, launch readiness) across Tech, Design, Marketing, Content, and Finance, cutting setup time 20% with 0% churn.",
      "To diagnose pricing inefficiencies across 15 enterprise accounts (15% of company revenue), analyzed 500,000+ website traffic and room-night records in SQL and Excel; recommendations were adopted portfolio-wide and lifted average client gross margin 12%.",
      "Owned account strategy for 60 enterprise clients; structured account reviews surfaced expansion and retention levers, driving 22% revenue growth across 2 consecutive quarters.",
      "Reframed upsell conversations around the demonstrated ROI of clients' existing services; the approach became the standard account playbook and contributed to 8% growth in upsell and cross-sell revenue.",
      "Served as the primary channel between clients and Engineering, turning competitive research and recurring client feedback into product input that shaped feature and service improvements.",
      "Ran Google Hotel Ads and digital marketing for an assigned portfolio of hotel accounts over a full year.",
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
    org: "Raah2Rashtra India Foundation, a registered Section 8 nonprofit in India",
    role: "Co-founder & Program Manager",
    period: "Jul 2025 - Present",
    points: [
      "Built governance and risk frameworks from scratch, letting a 21-member organization scale to 10+ programs across 5 government partnerships in under 12 months with 100% on-schedule delivery and zero budget variance.",
      "With a fully volunteer workforce and no formal reporting lines, built accountability systems that scaled program reach to 1,500+ government school students.",
      "Led customer discovery and the business case for a CSR-funded scholarship program, then secured funding and launched disbursement.",
      "Own the roadmap for an AI scholarship-matching platform that replaced hand-run matching, with logic built on 1,500+ manual matches; deployed the foundation's website end to end and am now sourcing the mentor network.",
      "Building a 22-policy governance framework, including child protection and safeguarding, volunteer and mentor conduct, and POSH policies, tracked in SharePoint and a custom HTML compliance calendar.",
    ],
  },
  {
    org: "Asia Australia Youth Association (AAYA)",
    role: "Vice President of Careers",
    period: "Apr 2026 - Present",
    points: [
      "Built career initiatives and engagement plans for university students and hired the right talent to deliver them.",
      "Planning an Australia-India partnered career event at an Indian university to boost students' job prospects and awareness.",
      "Check in with staff and volunteers to understand their concerns and work through fixes, keeping the team engaged.",
    ],
  },
  {
    org: "PMI Mass Bay Chapter",
    role: "Project Manager (Volunteer)",
    period: "May 2026 - Present",
    points: [
      "Engage attendees face to face at events and manage vendor and venue-owner relationships, negotiating to block dates at better prices; partner with universities to widen the chapter's reach.",
      "Lead strategic planning and event operations, including registrant communications on Zoho Events and Zoho Backstage, aligning chapter leadership on priorities and budgets.",
      "Audit existing SOPs to codify them into a formal governing policy that strengthens consistency and accountability across chapter operations.",
    ],
  },
  {
    org: "PMI Washington DC Chapter (PMIWDC)",
    role: "Policy Specialist, Strategy & Governance (Volunteer)",
    period: "Jun 2026 - Present",
    points: [
      "Led a policy audit and gap analysis across functional areas, turning findings into a prioritized standardization roadmap and coordinating stakeholder feedback cycles and training materials for adoption.",
      "Drafted the Policy Lifecycle Management Policy in the chapter's 2026 policy template, built to hold up through annual VP and volunteer turnover.",
    ],
  },
];

export type GlobalEngagement = {
  org?: string;
  role: string;
  period: string;
  description?: string;
};

export const globalEngagement: GlobalEngagement[] = [
  {
    role: "Delegate, SDG Youth Connect UNGA 81 Delegation",
    period: "2026",
    description: "Selected as 1 of 30 delegates from 2,650+ applicants.",
  },
  {
    org: "United Nations",
    role: "Youth Delegate, 64th Session of the Commission for Social Development",
    period: "Feb 2026",
  },
  {
    org: "UN Convention to Combat Desertification",
    role: "Member, UNCCD Youth Caucus",
    period: "Jan 2026 - Present",
    description:
      "Contribute to youth-led policy advocacy on land degradation and climate resilience, translating global sustainability frameworks into community-driven action informed by grassroots work in India.",
  },
  {
    role: "Youth Delegate, UN80 Initiative",
    period: "Dec 2025",
    description:
      "Delivered a formal intervention at the UN80 briefing and engaged in direct policy dialogue with Guy Ryder, Under-Secretary-General of the United Nations, advocating for reform that centers grassroots impact and youth inclusion.",
  },
  {
    role: "Delegate, Harvard Project for Asian and International Relations (HPAIR)",
    period: "Aug 2025",
    description:
      "Selected delegate at the HPAIR Asia Conference in Tokyo, joining policy roundtables on governance, sustainability, and social entrepreneurship with peers from 70+ countries.",
  },
  {
    org: "United Nations Headquarters, New York",
    role: "Youth Representative, ECOSOC Youth Forum",
    period: "2025, 2026",
    description:
      "Represented the Major Group of Children and Youth in April 2025, contributing youth perspectives on the 2030 Agenda to the High-Level Political Forum, and returned for the 2026 forum. Also attended the UNGA Youth Event in 2025.",
  },
];

export const approach = [
  {
    number: "01",
    title: "I build structure from ambiguity.",
    description:
      "When no process exists, I design one. I turn conflicting stakeholder goals into clear scope, milestones, and ownership before work begins.",
  },
  {
    number: "02",
    title: "I ramp up without a handover.",
    description:
      "Most of my roles came with no formal knowledge transfer. I learn the system on the job, find what's slowing it down, and start fixing it.",
  },
  {
    number: "03",
    title: "I let data drive the decision.",
    description:
      "Pricing, adoption, risk: I dig into the numbers before recommending a direction, then track whether the recommendation moved the metric.",
  },
  {
    number: "04",
    title: "I take everyone along.",
    description:
      "Delivery rarely lives in one function or one time zone. I keep teams, partners, volunteers, and stakeholders aligned from kickoff to delivery, so the work sticks after launch.",
  },
];

export type Project = {
  title: string;
  context: string;
  period?: string;
  points?: string[];
  description?: string;
};

export const projects: Project[] = [
  {
    title: "Microsoft 365 Copilot Pilot, Graduate Capstone",
    context:
      "Workstream Lead, Security, Privacy & Compliance, Northeastern University",
    period: "May 2026 - Aug 2026",
    points: [
      "Planned the workstream for a $250K, 200-user rollout: team charter, scope definition package, dependency plan, and integrated project plan; served as rotating team lead.",
      "Dispositioned 18 cross-department AI use cases (IT, HR, Finance) against regulatory and privacy requirements with zero unresolved items; delivered acceptable use guidelines and NIST AI RMF-aligned governance recommendations, including Microsoft Purview.",
      "Maintained a 15-item EMV-scored risk register and caught a mismatched risk value before final submission.",
      "When the PMO only partially funded contingency, wrote a reserve allocation memo and change request (WS3-CR-001) that resolved an $11.2K gap; presented risk and cost findings to the steering committee for sign-off.",
    ],
  },
  {
    title: "SkillBridge: DevOps, Agile Governance & Cloud Strategy",
    context: "Project Lead, Northeastern University",
    period: "Jan 2026 - Apr 2026",
    points: [
      "Applied Gene Kim's Three Ways (flow, feedback, continual learning) to define measurable DevOps practices, including a sub-5-day feature lead-time target.",
      "Evaluated AWS, Azure, and GCP cloud strategies, recommending AWS S3 for ecosystem depth and startup credits.",
      "Designed the agile governance model, a monthly Governance Review Board and inquiry-first escalation, balancing accountability with psychological safety.",
    ],
  },
  {
    title: "Bombardier Inc. Aerospace Process Optimization",
    context: "Project Lead, Northeastern University",
    period: "Jan 2026 - Mar 2026",
    points: [
      "Scoped the operating plan and built a RAID log tracking 3 critical-path dependencies and schedule risk drivers in Microsoft Project.",
      "Built a Primavera P6 risk model across 12+ variables, prioritizing mitigations by impact score and cutting schedule risk 18%.",
      "Led Agile sprints for a cross-functional team, improving delivery predictability 20%.",
    ],
  },
  {
    title: "Closing the AI Value Gap, Graduate Research Presentation",
    context: "Northeastern University",
    description:
      "Built a recorded poster presentation on closing the gap between AI investment and business value, using JPMorganChase as the case anchor and structured around the M.A.P.S. model.",
  },
];

export type Education = {
  school: string;
  degree: string;
  period?: string;
  description?: string;
};

export const education: Education[] = [
  {
    school: "Northeastern University",
    degree: "Master of Science, Project Management. GPA 3.92/4.0.",
  },
  {
    school: "MIT University of Meghalaya",
    degree: "Executive MBA, Marketing Management. Grade 9.84.",
  },
  {
    school: "MIT School of Distance Education",
    degree:
      "Postgraduate Diploma, Information Technology Management. Grade 9.89.",
  },
  {
    school: "International Institute of Information Technology, Bangalore",
    degree:
      "Advanced Certificate Program in Data Science and Business Intelligence.",
  },
  {
    school: "Rishihood University, Rashtram School of Public Leadership",
    degree: "Public Policy Bootcamp",
    description:
      "Policy formulation, analysis, and implementation, with a focus on data-driven, sustainable solutions to governance challenges.",
  },
  {
    school: "GIBS Business School, Bangalore University",
    degree:
      "Bachelor of Business Administration, Business Analytics and Information Technology Management.",
  },
  {
    school: "Jawahar Navodaya Vidyalaya (JNV)",
    degree: "10th and 12th grade, PCMC.",
  },
];

export const skills = {
  methods: [
    "Project charters and scope",
    "Integrated project plans",
    "Risk registers (EMV)",
    "RAID logs",
    "Change control",
    "Root-cause and gap analysis",
    "Requirements analysis",
    "Agile and Scrum",
    "Account reviews and onboarding",
    "SOPs and governance",
  ],
  tools: [
    "SQL",
    "Advanced Excel",
    "Tableau",
    "Power BI",
    "Python",
    "Microsoft Project",
    "Primavera P6",
    "JIRA",
    "Confluence",
    "Slate (CRM)",
    "Zoho Events and Backstage",
    "Microsoft 365 Copilot",
    "SharePoint",
    "Google Analytics",
    "Google Ads",
    "AWS, Azure, GCP",
  ],
  certifications: [
    "AWS Certified AI Business Strategist",
    "Certified ScrumMaster",
    "Google Ads Certification",
    "Google Project Management Certificate",
    "PMI Seven AI Project Patterns",
    "McKinsey Forward Learning Program",
    "BCG Introduction to Strategy Consulting (job simulation)",
    "Mastercard Advisors & Consulting Services (job simulation)",
  ],
};
