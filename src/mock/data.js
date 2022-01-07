/* eslint-disable global-require */
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
  title: 'What We Do',
  img1: require('../images/shop.png'),
  title1: '3D E-Commerce',
  desc1: `Megaverse will be the first metaverse focusing on e-commerce. With the introduction of the metaverse, we can use extended reality to create a 3D version of e-commerce platforms in the virtual world. Entrepreneurs will be able to create and design their personal kiosks in the metaverse so that people can visit and shop there.`,
  img2: require('../images/education.jpg'),
  title2: 'Metaverse Education',
  desc2:
    'The development of Megaverse is not just within the scope of e-commerce. With the partnership with Metaverse University, Megaverse will also bring education into the metaverse which specializes in IT, VR and AR teaching',
  img3: require('../images/megaverse.jpg'),
  title3: 'Mega Verse',
  desc3:
    'Megaverse will develop a leading 3D commercial hub with collaboration with relevant institutions. In addition, we will build an international education system focusing on IT and extended reality. We are aiming to realize a practical and leading metaverse with an estimated market value of 50 billion.',
  // paragraphOne: '',
  // paragraphTwo: '',
  // paragraphThree: '',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS.ROADMAP DATA
export const roadmapDataTitle = {
  title: 'Roadmap',
};
export const roadmapData = [
  {
    id: nanoid(),
    title: 'Title 1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: nanoid(),
    title: 'Title 2',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: nanoid(),
    title: 'Title 3',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    },
  ],
};
