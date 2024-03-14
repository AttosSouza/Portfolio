import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitImage2,
  css,
  html,
  instagram,
  javascript,
  mongodb,
  php,
  react,
  roadmap1,
  roadmap2,
  roadmap3,
  typescript,
  tailwind,
  linkedin,
  github,
} from '../assets';

export const navigation = [
  {
    id: '0',
    title: 'About',
    url: '#about',
  },
  {
    id: '1',
    title: 'Services',
    url: '#services',
  },
  {
    id: '2',
    title: 'Skills',
    url: '#skills',
  },
  {
    id: '3',
    title: 'Projects',
    url: '#projects',
  },
  {
    id: '4',
    title: 'Contact',
    url: '#contact',
    onlyMobile: true,
  },
];

export const roadmap = [
  {
    id: '0',
    title: 'Dogs',
    text: 'Dog is a web project, simple but with several cool features.',
    date: 'Jan 2024',
    status: 'done',
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: '1',
    title: 'IN PROGRESS',
    text: 'Do not worry, as soon as possible i will be posting here.',
    date: '0000',
    status: 'progress',
    imageUrl: roadmap2,
  },
  {
    id: '2',
    title: 'IN PROGRESS',
    text: 'Do not worry, as soon as possible i will be posting here.',
    date: '0000',
    status: 'progress',
    imageUrl: roadmap3,
  },
];

export const webText = 'HTML | CSS | JavaScript | Node.js | TypeScript | PHP';

export const frontText = 'React.js | Express.js | TailWind CSS';

export const dataText = 'Sql | MongoDB | MySql';

export const collabContent = [
  {
    id: '0',
    title: 'Web development',
    text: webText,
  },
  {
    id: '1',
    title: 'FrameWorks/Library',
    text: frontText,
  },
  {
    id: '2',
    title: 'Database',
    text: dataText,
  },
];

export const collabApps = [
  {
    id: '0',
    title: 'Html',
    icon: html,
    width: 26,
    height: 36,
  },
  {
    id: '1',
    title: 'Css',
    icon: css,
    width: 34,
    height: 36,
  },
  {
    id: '2',
    title: 'Javascript',
    icon: javascript,
    width: 36,
    height: 28,
  },
  {
    id: '3',
    title: 'React',
    icon: react,
    width: 34,
    height: 35,
  },
  {
    id: '4',
    title: 'Typescript',
    icon: typescript,
    width: 34,
    height: 34,
  },
  {
    id: '5',
    title: 'Php',
    icon: php,
    width: 34,
    height: 34,
  },
  {
    id: '6',
    title: 'Mongodb',
    icon: mongodb,
    width: 26,
    height: 34,
  },
  {
    id: '7',
    title: 'Tailwind',
    icon: tailwind,
    width: 38,
    height: 32,
  },
];

export const benefits = [
  {
    id: '0',
    title: 'Ui Design',
    text: 'I solve user-specific problems creating user interface design with modern ideas',
    backgroundUrl: './src/assets/service/card-1.svg',
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: '1',
    title: 'Web Developer',
    text: 'I am an expert in creating dynamic, interactive, and user-friendly websites that help businesses grow.',
    backgroundUrl: './src/assets/service/card-2.svg',
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: '2',
    title: 'Responsive Apps',
    text: 'Websites are designed to look and function beautifully on all devices, from desktops to mobile phones.',
    backgroundUrl: './src/assets/service/card-3.svg',
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: '0',
    title: 'Linkedin',
    iconUrl: linkedin,
    url: 'https://www.linkedin.com/in/atossouza/',
  },
  {
    id: '1',
    title: 'Instagram',
    iconUrl: instagram,
    url: 'https://www.instagram.com/iamsouza/',
  },
  {
    id: '2',
    title: 'Github',
    iconUrl: github,
    url: 'https://github.com/AttosSouza',
  },
];
