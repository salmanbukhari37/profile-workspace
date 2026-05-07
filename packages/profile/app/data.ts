export const profile = {
  name: 'Salman Bukhari',
  title: 'Senior Software Engineer',
  location: 'Islamabad, Pakistan',
  email: 'salmanbukhari37@gmail.com',
  phone: '+92-334-9081615',
  github: 'https://github.com/salmanbukhari37',
  linkedin: 'https://linkedin.com/in/salman-bukhari-a7b84072',
  /** Served from `public/profile-photo.png` */
  photoSrc: '/profile-photo.png',
  summary:
    '10+ years of experience collaborating with leading technology enterprises and startups across Pakistan, the US, the UK, and the UAE. Deep expertise in developer documentation, software design, security, CI/CD pipelines, and modern stacks — React, Next.js, TypeScript, Node.js, NestJS, and more.',
};

/** Highlighted public work: developer portals, API references, and integration guides. */
export const featuredWork = [
  {
    title: 'PayPal Server SDK for Java',
    org: 'PayPal Developer',
    description:
      'Getting-started and integration documentation for PayPal’s Java Server SDK — server-side payments, SDK setup, and API usage patterns.',
    link: 'https://developer.paypal.com/serversdk/java/getting-started/how-to-get-started',
    tags: ['Java', 'REST', 'SDK', 'Payments'],
  },
  {
    title: 'Juniper Mist — REST API',
    org: 'Juniper Networks',
    description:
      'Mist cloud networking platform HTTP API reference, including account and self-service endpoints used by operators and integrators.',
    link: 'https://www.juniper.net/documentation/us/en/software/mist/api/http/api/self/account/get-self',
    tags: ['OpenAPI', 'Networking', 'Cloud Wi-Fi'],
  },
  {
    title: 'Verizon ThingSpace — IoT APIs',
    org: 'Verizon',
    description:
      'ThingSpace IoT connectivity documentation and guided walkthroughs for device activation, SIM lifecycle, and platform integrations.',
    link: 'https://thingspace.verizon.com/documentation/api-documentation.html#/http/guided-walkthroughs/iot-how-to-s/guided-walkthroughs/how-to-activate-a-device',
    tags: ['IoT', 'Connectivity', 'API docs'],
  },
] as const;

export const experience = [
  {
    role: 'Sr. Software Engineer',
    company: 'APIMatic',
    type: 'Hybrid',
    location: 'Islamabad, Pakistan',
    period: 'Feb 2025 — Present',
    highlights: [
      'Migrated documentation from Markdown to MDX, enabling dynamic rendering with custom React components.',
      'Reduced unnecessary re-renders, significantly improving application responsiveness.',
      'Integrated Chromatic into CI/CD for visual CSS/UI change tracking before deployment.',
      'Collaborated with product & design teams for consistent component styling across platforms.',
    ],
  },
  {
    role: 'Sr. Software Engineer',
    company: 'JiBe ERP',
    type: 'Remote',
    location: '',
    period: 'Apr 2023 — Mar 2025',
    highlights: [
      'Spearheaded full-stack projects integrating front-end and back-end systems for better performance.',
      'Delivered projects within budget and compliance requirements while optimizing performance.',
      'Architected scalable systems that reduced technical debt and improved operational efficiency.',
    ],
  },
  {
    role: 'Sr. Full Stack Developer',
    company: 'Renegade Group of Furniture',
    type: 'Remote',
    location: '',
    period: 'Oct 2019 — Apr 2023',
    highlights: [
      'Led feature development end-to-end across the full technology stack.',
      'Applied critical thinking to break down complex problems and deliver solutions on tight deadlines.',
      'Improved efficiency and productivity through rapid skill acquisition and application.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'MicroAgility',
    type: 'On-site',
    location: 'Islamabad, Pakistan',
    period: 'Aug 2018 — Sep 2019',
    highlights: [
      'Planned and created scalable systems for growing companies.',
      'Gathered and translated client requirements into product stories and actionable tasks.',
    ],
  },
  {
    role: 'Asst. Web Administrator',
    company: 'Population Welfare Dept.',
    type: 'On-site',
    location: 'Peshawar, Pakistan',
    period: 'Oct 2016 — Jan 2018',
    highlights: [
      'Designed and maintained websites and online applications.',
      'Reviewed site content regularly for accuracy and functionality.',
    ],
  },
  {
    role: 'PHP Developer',
    company: 'Tech Wizards',
    type: 'On-site',
    location: 'Peshawar, Pakistan',
    period: 'Mar 2015 — Oct 2016',
    highlights: [
      'Redesigned sites to enhance navigation and improve visual appeal.',
      'Introduced cost and benefits analysis to identify and correct problems with existing network architecture.',
    ],
  },
];

export const skills = {
  'Front-end': [
    'React.js',
    'Next.js',
    'Vue.js',
    'TypeScript',
    'Babel',
    'Tailwind CSS',
  ],
  'Back-end': ['Node.js', 'NestJS', 'Express', 'PHP', 'RabbitMQ'],
  Database: ['MongoDB', 'SQL Server', 'Redis', 'Firebase'],
  DevOps: ['Docker', 'CI/CD Pipelines', 'Chromatic', 'Git'],
};

export const projects = [
  {
    title: 'APIMatic Developer Portal',
    description:
      'Modern developer documentation platform migrated from Markdown to MDX with custom React components, Chromatic-powered visual testing, and optimized rendering performance.',
    tags: ['React', 'MDX', 'TypeScript', 'Chromatic', 'CI/CD'],
    link: '',
  },
  {
    title: 'JiBe ERP Platform',
    description:
      'Enterprise resource planning system with full-stack architecture, budget-compliant delivery, and scalable design that reduced technical debt for growing organizations.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'TypeScript'],
    link: '',
  },
  {
    title: 'Renegade Furniture E-commerce',
    description:
      'End-to-end e-commerce platform for a furniture group, featuring product catalog management, order processing, and a responsive storefront.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: '',
  },
  {
    title: 'MicroAgility Client Solutions',
    description:
      'Scalable, extensible client systems built from requirements gathering to deployment, turning product stories into actionable software.',
    tags: ['Full Stack', 'Node.js', 'React', 'SQL Server'],
    link: '',
  },
];

export const education = {
  degree: 'Bachelor of Science — Computer Science',
  school: 'University of Peshawar',
  location: 'Peshawar, Khyber Pakhtunkhwa',
  period: '2010 — 2014',
};
