import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  postgresql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  django,
  fastapi,
  mongodb,
  python,
  UFA,
  WelkinMechanical,
  PSEP,
  VitalityFitness,
  ConferenceGO,
  CarCar,
  Pokedex,
} from '../assets';


export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Front-End Developer',
    icon: frontend,
  },
  {
    title: 'Back-End Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'django',
    icon: django,
  },
  {
    name: 'fastapi',
    icon: fastapi,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'mongodb',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full Stack Software Engineer',
    company_name: 'Personal SWE Projects',
    icon: PSEP,
    iconBg: '#333333',
    date: 'May 2023 - Present',
  },
  {
    title: 'Web Developer (Volunteer)',
    company_name: 'Urban Food Alliance',
    icon: UFA,
    iconBg: '#333333',
    date: 'May 2023 - July 2023',
  },
  {
    title: 'Junior Estimator',
    company_name: 'Welkin Mechanical',
    icon: WelkinMechanical,
    iconBg: '#333333',
    date: 'May 2021 - Nov 2022',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Vitality Fitness',
    description: 'A workout tracker that provides Youtube guides for completed and upcoming workouts.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: VitalityFitness,
    repo: 'https://github.com/tbb257/vitality-fitness',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Pokedex',
    description:
      'Pokedex application allowing users to view and fitler Pokemon from every region as of 2023.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: Pokedex,
    repo: 'https://github.com/tbb257/pokedex',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'ConferenceGO',
    description:
      'Management System allowing organizations to track conferences by locations/centers.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: ConferenceGO,
    repo: 'https://github.com/tbb257/ConferenceGO',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-4',
    name: 'CarCar',
    description: 'Multi-service system tracking both dealership sales and service appointments.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: CarCar,
    repo: 'https://github.com/tbb257/CarCar',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
];

export { services, technologies, experiences, projects };
