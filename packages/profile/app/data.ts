export const profile = {
  name: 'Salman Bukhari',
  title: 'Senior Full-Stack Software Engineer',
  location: 'Islamabad, Pakistan',
  email: 'salmanbukhari37@gmail.com',
  phone: '+92 323 9699754',
  github: 'https://github.com/salmanbukhari37',
  linkedin: 'https://linkedin.com/in/salman-bukhari-a7b84072',
  /** Served from `public/profile_picture.png` */
  photoSrc: '/profile_picture.png',
  summary:
    'Senior Full-Stack Software Engineer with 11+ years of experience building enterprise web applications and developer platforms. Strong in React, Next.js, TypeScript, Node.js, NestJS, PHP, REST APIs, application architecture, security, and CI/CD. Experienced in AI-assisted developer tooling, technical documentation platforms, and scalable backend services.',
};

/** Highlighted public work: developer portals, API references, and integration guides. */
export const featuredWork = [
  {
    title: 'PayPal Developer Portal',
    org: 'PayPal',
    description:
      'Delivered developer portal work tailored to PayPal’s enterprise functionality and brand requirements.',
    link: 'https://developer.paypal.com/serversdk/java/getting-started/how-to-get-started',
    tags: ['Developer portals', 'Enterprise delivery'],
  },
  {
    title: 'Verizon Developer Portal',
    org: 'Verizon',
    description:
      'Delivered developer portal work tailored to Verizon’s enterprise functionality and brand requirements.',
    link: 'https://thingspace.verizon.com/documentation/api-documentation.html#/http/guided-walkthroughs/iot-how-to-s/guided-walkthroughs/how-to-activate-a-device',
    tags: ['Developer portals', 'Enterprise delivery'],
  },
] as const;

export const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'APIMatic',
    type: 'Hybrid',
    location: 'Islamabad, Pakistan',
    period: 'Feb 2025 — Present',
    highlights: [
      'Developed enterprise developer-platform features with React, Next.js, TypeScript, Node.js, and NestJS, including secure REST APIs, authentication, and reusable services.',
      'Improved portal interfaces, SDK overview pages, and interactive API playground functionality.',
      'Integrated Mixpanel analytics to track page views and navigation interactions across developer portals.',
      'Built configurable frontend components for enterprise branding and documentation needs.',
      'Resolved static-site-generation blockers and collaborated with engineering, design, and QA teams to ship portal features.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'JiBe ERP',
    type: 'Remote',
    location: 'Islamabad, Pakistan',
    period: 'Apr 2023 — Feb 2025',
    highlights: [
      'Led full-stack feature delivery, connecting frontend interfaces with backend systems to support ERP workflows and user experience.',
      'Designed scalable, extensible application architecture to reduce technical debt and improve maintainability as business needs evolved.',
      'Delivered application improvements while balancing performance, budget, and compliance requirements.',
    ],
  },
  {
    role: 'Senior Full-Stack Developer',
    company: 'Renegade Group of Furniture',
    type: '',
    location: '',
    period: 'Oct 2019 — Apr 2023',
    highlights: [
      'Delivered full-stack development work under tight deadlines, using structured problem-solving to evaluate implementation options and resolve issues.',
      'Adapted to changing technical requirements and adopted new skills and tools to support delivery.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'MicroAgility',
    type: '',
    location: '',
    period: 'Aug 2018 — Oct 2019',
    highlights: [
      'Planned and developed scalable, extensible systems to support growing businesses.',
      'Gathered client requirements and translated them into product stories and actionable engineering tasks.',
    ],
  },
  {
    role: 'Assistant Web Administrator',
    company: 'Population Welfare Department',
    type: '',
    location: 'Peshawar, Pakistan',
    period: 'Oct 2016 — Jan 2018',
    highlights: [
      'Reviewed websites and content for accuracy, functionality, and consistency.',
      'Designed websites and web applications to support organizations’ online presence.',
    ],
  },
  {
    role: 'PHP Developer',
    company: 'Tech Wizards',
    type: '',
    location: '',
    period: 'Mar 2015 — Oct 2016',
    highlights: [
      'Redesigned websites to improve navigation and visual presentation.',
      'Evaluated existing technical issues and proposed cost-conscious improvements.',
    ],
  },
];

export const skills = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Babel'],
  'Backend & APIs': [
    'Node.js',
    'NestJS',
    'Express.js',
    'PHP',
    'REST APIs',
    'Authentication',
    'Application security',
  ],
  'Databases & Messaging': [
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'SQL Server',
    'Redis',
    'Firebase',
    'RabbitMQ',
  ],
  'Architecture & Delivery': [
    'Software architecture',
    'Scalable systems',
    'AWS',
    'Docker',
    'CI/CD',
    'GitHub Actions',
    'JSON Schema',
    'MDX',
    'CLI tooling',
  ],
  'AI & Developer Tools': [
    'Claude',
    'Cursor',
    'Model Context Protocol (MCP)',
    'AI-assisted development workflows',
  ],
};

export const projects = [
  {
    title: 'Enterprise Developer Portals',
    description:
      'Delivered developer portals for PayPal, Verizon, Worldpay, and Shell, tailored to enterprise functionality and brand requirements.',
    tags: ['Developer platforms', 'Enterprise delivery'],
    link: '',
  },
  {
    title: 'JSON Schema-Driven React Form Engine',
    description:
      'Designed a reusable React form engine driven by JSON Schema for dynamic form generation, validation, and configurable enterprise workflows.',
    tags: ['React', 'JSON Schema', 'Form validation'],
    link: '',
  },
  {
    title: 'AI-Assisted Development & CLI Tooling',
    description:
      'Developed AI-assisted workflows using Claude, Cursor, and MCP servers, alongside CLI tooling to automate repetitive development tasks.',
    tags: ['Claude', 'Cursor', 'MCP', 'CLI tooling'],
    link: '',
  },
  {
    title: 'Interactive Documentation with MDX',
    description:
      'Led the migration from Markdown to MDX, enabling interactive React components in technical documentation.',
    tags: ['Markdown', 'MDX', 'React'],
    link: '',
  },
];

export const education = {
  degree: 'Bachelor of Science — Computer Science',
  school: 'University of Peshawar',
  location: 'Peshawar, Pakistan',
  period: 'Sep 2014',
};
