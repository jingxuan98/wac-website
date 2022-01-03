import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'MegaVerse', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Combining E-commerce with Metaverse', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'We are',
  name: 'MegaVerse',
  subtitle: 'We combine E-commerce with Metaverse',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  title: "Our Story",
  img1: 'profile.jpg',
  title1: 'Title 1',
  desc1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  img2: 'profile.jpg',
  title2: 'Title 2',
  desc2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  img3: 'profile.jpg',
  title3: 'Title 3',
  desc3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  // paragraphOne: '',
  // paragraphTwo: '',
  // paragraphThree: '',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS.ROADMAP DATA
export const roadmapDataTitle = {
  title : "Roadmap"
}
export const roadmapData = [
  {
   id: nanoid(),
    title: 'Title 1',
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: nanoid(),
    title: 'Title 2',
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: nanoid(),
    title: 'Title 3',
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
];

export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'Twitter',
      url: 'https://twitter.com',
    },
    {
      id: nanoid(),
      name: 'Discord',
      url: 'https://discord.com/',
    },
    {
      id: nanoid(),
      name: 'Telegram',
      url: 'https://t.me/RyanCryptoSharing',
    }
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
