export const profile = {
  name: 'Rashid Ilyas',
  role: 'Full Stack Developer',
  location: 'Lahore, Punjab, Pakistan',
  email: 'rashidilyas.dev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rashid-ilyas-7b288920/',
  github: 'https://github.com/',
  intro:
    'I build robust, scalable, and user-friendly web applications using PHP, Laravel, CodeIgniter, MySQL, JavaScript, and modern front-end technologies.',
}
export const skills = [
  'PHP',
  'Laravel',
  'CodeIgniter',
  'MySQL',
  'JavaScript',
  'jQuery',
  'Bootstrap',
  'CSS',
  'HTML',
  'SQL',
  'Git',
  'REST APIs',
  'Database Design',
  'Responsive Design',
  'Backend Development',
  'Front-end Integration',
]
export const skillGroups = [
  {
    title: 'Backend',
    icon: '⌘',
    items: [
      ['PHP', 'Advanced'],
      ['Laravel', 'Advanced'],
      ['CodeIgniter', 'Experienced'],
      ['REST APIs', 'Experienced'],
      ['Backend Architecture', 'Experienced'],
    ],
  },
  {
    title: 'Frontend',
    icon: '◈',
    items: [
      ['JavaScript', 'Experienced'],
      ['jQuery', 'Experienced'],
      ['HTML5', 'Advanced'],
      ['CSS3', 'Advanced'],
      ['Bootstrap', 'Advanced'],
      ['Responsive Web Design', 'Advanced'],
    ],
  },
  {
    title: 'Data & tools',
    icon: '▦',
    items: [
      ['MySQL', 'Advanced'],
      ['SQL', 'Advanced'],
      ['Database Design', 'Experienced'],
      ['Git', 'Experienced'],
      ['Version Control', 'Experienced'],
    ],
  },
]
export const experience = [
  {
    role: 'Software Developer',
    company: 'Cutting Edge Projects, UK',
    period: 'October 2021 — Present',
    text: 'Develop and maintain scalable web applications, build backend functionality with PHP and Laravel, optimize MySQL databases, and collaborate on UK-based software projects.',
  },
  {
    role: 'Laravel Developer',
    company: 'TriCosmic',
    period: 'February 2021 — August 2021',
    text: 'Delivered digital products including Digital Card System, Sorted Master, and Dry Clean Management System.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Git', 'SQL'],
  },
  {
    role: 'Junior Laravel Developer',
    company: 'Solstice',
    period: 'September 2019 — December 2020',
    text: 'Contributed to a Bug Ticketing System and Education Analogy Platform while building a strong foundation in Laravel application development.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Git', 'SQL'],
  },
  {
    role: 'Internship Trainee',
    company: 'Technologists Solution',
    period: 'February 2019 — July 2019',
    text: 'Built practical experience through Hospital Management System and E-commerce Store projects.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
  },
]
export const projects = [
  [
    'Digital Card System',
    'A digital platform for creating, managing, and sharing professional cards.',
    ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
  ],
  [
    'Dry Clean Management System',
    'A business management application for customers, orders, services, and operational workflows.',
    ['Laravel', 'PHP', 'MySQL', 'jQuery', 'Bootstrap'],
  ],
  [
    'Bug Ticketing System',
    'A centralized system for reporting, assigning, tracking, and resolving software issues.',
    ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
  ],
  [
    'Education Analogy Platform',
    'A web platform supporting digital education workflows and academic information management.',
    ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS'],
  ],
  [
    'Hospital Management System',
    'A web application for managing hospital records, patients, appointments, and operations.',
    ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
  ],
  [
    'E-commerce Store',
    'A responsive online store with product listings, shopping functionality, and order management.',
    ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
  ],
  [
    'Sorted Master',
    'A business-focused web application developed during Rashid’s role at TriCosmic.',
    ['Laravel', 'PHP', 'MySQL', 'Git'],
  ],
].map(([name, description, tags]) => ({
  name: name as string,
  description: description as string,
  tags: tags as string[],
}))
export const process = [
  ['01', 'Understand requirements', 'Message'],
  ['02', 'Plan the architecture', 'Compass'],
  ['03', 'Design the database', 'Database'],
  ['04', 'Develop clean solutions', 'Code'],
  ['05', 'Test and optimize', 'ShieldCheck'],
  ['06', 'Deploy and maintain', 'Rocket'],
]
