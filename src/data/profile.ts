export const profile = {
  name: "Rheza Satria",
  role: "Principal Software Engineer",
  email: "rheza.satria.ta@gmail.com",
  github: "https://github.com/rhzs",
  medium: "https://medium.com/@rhezas8",
};

export const categories = [
  {
    id: "life",
    name: "Life",
    description: "Notes on everyday life and the things that stay with me.",
    detail: "Personal stories, observations, and reflections on everyday life.",
    color: "life",
  },
  {
    id: "technical",
    name: "Technical",
    description: "Software, systems, and lessons from building them.",
    detail:
      "Engineering notes on software, architecture, and building reliable systems.",
    color: "technical",
  },
  {
    id: "religious",
    name: "Religious",
    description: "A space for reflections on faith and meaning.",
    detail: "Reflections on faith, religious learning, and meaning.",
    color: "religious",
  },
] as const;

export const experience = [
  {
    company: "Grab",
    logo: "/logos/companies/grab.svg",
    url: "https://www.grab.com",
    period: "Nov 2021 — Present",
    role: "Principal Software Engineer",
    team: "Payments Tech Family",
    description:
      "Payment acceptance, platform architecture, and engineering operations across the Grab and OVO ecosystem.",
    highlights: [
      "Consolidated enterprise payment gateways across 12+ business verticals, unlocking US$150M in annual GMV and reducing infrastructure costs by 68%.",
      "Migrated 42+ critical financial services to Google Kubernetes Engine and established GitOps delivery controls, reducing release cycles by 95%.",
      "Led a tier-1 payment gateway migration handling approximately 15 million daily transactions at 99.9% availability, with approximately 30% lower costs.",
      "Established engineering AI adoption standards and built incident-triage agents that reduced response time from 2–3 hours to 10–15 minutes.",
    ],
    tags: ["Go", "Payments", "GKE", "GitOps", "AI-assisted engineering"],
  },
  {
    company: "PRIXA.AI",
    logo: "/logos/companies/prixa.png",
    url: "https://prixa.ai",
    period: "Jan 2020 — Nov 2021",
    role: "VP of Engineering",
    team: "Remote engineering team",
    description:
      "Led a 15-person team building an integrated healthcare platform serving more than one million users.",
    highlights: [
      "Delivered seven connected products covering diagnostics, telemedicine, pharmacy, appointments, insurance, payments, and shipping.",
      "Defined service boundaries, the architecture roadmap, engineering standards, and OKRs across clinical and financial workflows.",
      "Reduced deployment time from approximately two hours to 10–20 minutes through CI/CD and production-delivery standards.",
    ],
    tags: ["Go", "Rust", "Vue.js", "Healthcare", "Engineering leadership"],
  },
  {
    company: "Bank Rakyat Indonesia",
    logo: "/logos/companies/bri.svg",
    url: "https://bri.co.id",
    period: "Jan 2018 — Jan 2020",
    role: "Group Head, Future Banking Platform & Digital Experience",
    team: "Digital Center of Excellence",
    description:
      "Core banking, cloud infrastructure, and the Pinang and Ceria digital lending products.",
    highlights: [
      "Co-led core banking procurement and implementation with Accenture, Finagle, PrivyID, Wavecell, and Telkom.",
      "Co-led a virtual private cloud implementation integrating OpenStack, RHEL, OpenShift, and Cisco SDN.",
      "Led Java-based digital lending development while meeting OJK and Bank Indonesia requirements.",
    ],
    tags: ["Java", "Digital banking", "OpenShift", "OpenStack"],
  },
  {
    company: "SMBC Bank · Jenius",
    logo: "/logos/companies/jenius.svg",
    url: "https://jenius.com",
    period: "Dec 2016 — Jan 2018",
    role: "Senior Software Engineer",
    team: "Jenius",
    description:
      "Core banking architecture and API design for Jenius 2.0, alongside McKinsey Digital.",
    highlights: [
      "Helped deliver a Kubernetes and TypeScript platform that reduced customer complaints by 30% and increased user engagement by 220%.",
      "Led an internal code audit with Software Improvement Group, identifying 800 potential bugs and more than 50 CVE vulnerabilities.",
    ],
    tags: ["TypeScript", "Kubernetes", "API design", "Security"],
  },
  {
    company: "HappyFresh",
    logo: "/logos/companies/happyfresh.svg",
    url: "https://happyfresh.id",
    period: "Sep 2015 — Dec 2016",
    role: "Software Engineer",
    team: "Headquarter IT Division",
    description: "Web and mobile engineering for HappyFresh and Happy Recipe.",
    highlights: [
      "Built GoCD delivery pipelines and automated acceptance testing across web, iOS, and Android using Appium, Cucumber, and Ruby.",
      "Integrated analytics and experimentation across platforms using Segment, Optimizely, Mixpanel, and other analytics tools.",
    ],
    tags: ["JavaScript", "GoCD", "Mobile", "Test automation"],
  },
  {
    company: "Savant Degrees",
    logo: "/logos/companies/savant-degrees.png",
    url: "https://savantdegrees.com",
    period: "Oct 2013 — Sep 2015",
    role: "Full Stack Software Developer",
    team: "Application Delivery Team, Singapore",
    description:
      "Delivered regional projects for P&G Olay, P&G Braun, and Telin (Telkom International).",
    highlights: [],
    tags: ["Full stack", "Enterprise systems"],
  },
  {
    company: "Fachhochschule Erfurt",
    logo: null,
    url: "https://www.fh-erfurt.de/",
    period: "Mar 2011 — Jun 2011",
    role: "Research Assistant",
    team: "Faculty of Information Technology, Germany",
    description:
      "Research experience in information technology, alongside academic work on wireless network localization.",
    highlights: [],
    tags: ["Research", "Wireless networks"],
  },
  {
    company: "PT. Vikasa Infinity Anugrah",
    logo: null,
    url: null,
    period: "Aug 2009 — Dec 2009",
    role: "Software Developer & ERP Business Consultant",
    team: "BSD City, Indonesia",
    description: "Software development and ERP business consulting.",
    highlights: [],
    tags: ["ERP", "Software development"],
  },
];

export const skills = [
  {
    name: "Languages",
    items: "Go, Rust, Java, TypeScript, JavaScript, Python, Lua",
  },
  {
    name: "Systems & services",
    items: "Temporal, gRPC, Kafka, RabbitMQ, Spring, Tokio, Axum, Envoy, Nginx",
  },
  {
    name: "Cloud & delivery",
    items:
      "Google Cloud, GKE, k3s, MicroVMs, OpenShift, GitOps, Terraform, Docker, Packer",
  },
  {
    name: "Data & observability",
    items:
      "MySQL, PostgreSQL, Redis, ArangoDB, Chroma, Datadog, Grafana, Prometheus, OpenSearch",
  },
  {
    name: "AI-assisted engineering",
    items: "LangChain, LangFuse, LlamaIndex, Claude, Pi Agent",
  },
  { name: "Frontend", items: "React, Vue.js, Alpine.js" },
];

export const education = [
  {
    school: "HULT International Business School",
    qualification: "Master of International Business",
    location: "Shanghai, China",
    year: "2013",
  },
  {
    school: "Swiss German University",
    qualification: "Information Technology",
    location: "BSD City, Indonesia",
    year: "2012",
  },
  {
    school: "Fachhochschule Südwestfalen",
    qualification: "Bachelor of Engineering, double degree program",
    location: "Soest, Germany",
    year: "2011",
  },
];
