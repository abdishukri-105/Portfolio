import portfolioImg01 from "../images/Beautybliss.png";
import portfolioImg02 from "../images/HAHA-HUB.png";
import portfolioImg03 from "../images/hanan.png";
import portfolioImg04 from "../images/article254.png";
import portfolioImg08 from "../images/osam.png";
import portfolioImg05 from "../images/loops.jpg";
import portfolioImg06 from "../images/desktop-preview.jpg";

import portfolioImg07 from "../images/intelli.jpg";
import portfolioImg09 from "../images/misky.png";
import portfolioImg10 from "../images/albaqarah.png";


const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg03,
    category: "Web Design",
    title: "Hanan collections",
    description:
    `Created a comprehensive online platform for Hanan Collections.
      With a mobile-first design and seamless UX, the site empowers her to 
      reach a broader audience. Integrated Paystack ensures smooth payments 
      via cards and M-Pesa, while live Instagram and WhatsApp sections enhance
       customer engagement and interaction.`,
    technologies: ["React", "Tailwind css", "Rails", "Postgresql"],
    siteUrl: "https://hanancollections.com",
  },
  {
    id: "02",
    imgUrl: portfolioImg09,
    category: "Web Design",
    title: "Misky Nur ",
    description:
    `Designed a comprehensive online platform for Misky Nur Abdullahi,
     a celebrated author, poet, and advocate. This seamless integration 
     of her personal brand, literary works, foundation activities,
     and podcast centralizes her diverse endeavors, empowering her
      to connect with a wider audience.`,
    technologies: ["React", "Tailwind css", "Rails", "Postgresql"],
    siteUrl: "https://miskynur.me",
  },
  {
    id: "03",
    imgUrl: portfolioImg10,
    category: "Web Design",
    title: "Al Baqarah Farm ",
    description:
    "I was entrusted with developing a website for AlBaqarah Farm Limited, a leading supplier of premium fruits renowned for their commitment to quality and sustainable agricultural practices. The website serves as a cornerstone for their digital presence, catering to a global audience and fostering brand recognition in international markets.",
    technologies: ["React", "Tailwind css", "Rails", "Postgresql"],
    siteUrl: "https://albaqarahfarm.com/",
  },
  {
    id: "04",
    imgUrl: portfolioImg08,
    category: "Web Design",
    title: "OSAM Cabinet and Hardware",
    description:
    " I took the initiative to design and develop a website for OSAM Cabinet and Hardware. This project aimed to create a strong online presence that effectively communicates their expertise in crafting and installing high-quality kitchen cabinets and doors.",
    technologies: ["React", "Tailwind css", "Rails", "Postgresql"],
    siteUrl: "https://osam-cabinet.vercel.app/",
  },
  {
    id: "05",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "Beauty Bliss",
    description:
    " Beauty Bliss is an e-commerce beauty shop powered by Rails API and React. It offers a wide range of products, including skincare, makeup, and haircare. With an admin section for inventory management and order tracking, it ensures efficient operations.",
    technologies: ["React", "Tailwind css", "Rails", "Postgresql"],
    siteUrl: "https://beauty-bliss-ul2a.vercel.app/",
  },
  {
    id: "06",
    imgUrl: portfolioImg02,
    category: "web design",
    title: "Meme Generator",
    description:
      "Haha Hub is a web application that brings laughter to users by allowing them to create and view memes. It serves as a platform where people can go to have a good laugh. This Rails and React-based meme generator app was developed as a project during Moringa School.",
    technologies: ["React", "Tailwind css", "Rails", "SQLite"],
    siteUrl: "https://haha-hub.vercel.app/",
  },
  // {
  //   id: "06",
  //   imgUrl: portfolioImg03,
  //   category: "web design",
  //   title: "Library app",
  //   description:
  //     "The Library App is a React-based web application that utilizes the Google Books API. It offers a user-friendly interface for browsing and exploring a wide collection of books. With features like search, book details, ratings, and a reading list, it enhances the book browsing experience. ",
  //   technologies: ["React", "Tailwind css", "api"],
  //   siteUrl: "https://read-riot.vercel.app/",
  // },
  // {
  //   id: "06",
  //   imgUrl: portfolioImg04,
  //   category: "Web Design",
  //   title: "blog page",
  //   description:
  //     "The Blog Page is a web application that combines Ruby and React. It offers a user-friendly interface for sharing and reading articles. With features like categories, tags, comments, and analytics, it enhances the reading and writing experience.",
  //   technologies: ["React", "Tailwind css", "Ruby", "SQLITE", "Sinatra"],
  //   siteUrl: "https://article254.vercel.app/",
  // },
  // {
  //   id: "05",
  //   imgUrl: portfolioImg07,
  //   category: "Mobile Design",
  //   title: "Intellidrop: Transforming ASAL Agriculture",
  //   description: `At ALX, I spearheaded Intellidrop, a groundbreaking mobile design venture aimed at transforming agriculture in Kenya's Arid and Semi-Arid Lands (ASAL). `,
  //   technologies: ["UI/UX Design", "Figma"],
  //   siteUrl: "https://intellidrop-demo.example.com",
  //  slideDeckUrl: "https://docs.google.com/presentation/d/1Ym9ZKqf49XNl3fusW3_dVBvAXr4VWDPH/edit#slide=id.g25956dbe3e0_0_5",
  //   videoPresentationUrl: "https://www.youtube.com/watch?v=0SJyrpwlViU" 
  // },    

  // {
  //   id: "06",
  //   imgUrl: portfolioImg06,
  //   category: "Ux",
  //   title: "Credit card information",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["HTML", "CSS", "javascript"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "07",
  //   imgUrl: portfolioImg07,
  //   category: "Web Design",
  //   title: "Appointment Booking Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "08",
  //   imgUrl: portfolioImg01,
  //   category: "Web Design",
  //   title: "Finance Technology Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "09",
  //   imgUrl: portfolioImg02,
  //   category: "Ux",
  //   title: "Video Conference Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "10",
  //   imgUrl: portfolioImg03,
  //   category: "Ux",
  //   title: "File Sharing Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "11",
  //   imgUrl: portfolioImg04,
  //   category: "Web Design",
  //   title: "Landing Page",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "12",
  //   imgUrl: portfolioImg05,
  //   category: "Web Design",
  //   title: "Landing Page",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "13",
  //   imgUrl: portfolioImg06,
  //   category: "Web Design",
  //   title: "Online Therapy Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "14",
  //   imgUrl: portfolioImg07,
  //   category: "ux",
  //   title: "Appointment Booking Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
];


// const projects = [
//   {
//     image: beautybliss,
//     title: 'Beauty Bliss',
//     description: 'An E-commerce application built with Rails API and React',
//     websiteLink: 'https://beauty-bliss-ul2a.vercel.app/',
//   },
//   {
//     image: Hahahub,
//     title: 'Meme Generator',
//     description: 'Rails and react meme generator app for moringa school project ',
//     websiteLink: 'https://haha-hub.vercel.app/',
//   },
//   {
//     image: READRIOT,
//     title: 'Library app',
//     description: 'React application that utilizes google books api',
//     websiteLink: 'https://read-riot.vercel.app/',
//   },
//   {
//     image: article254,
//     title: 'blog page',
//     description: 'article web application Built with RUBY and React ',
//     websiteLink: 'https://article254.vercel.app/',
//   },
//   {
//     image: loops,
//     title: 'Loopstudios Landing Page',
//     description: 'This is a small project that I did from Frontend Mentor',
//     websiteLink: 'https://example.com/loopstudios-demo',
//   }
// ];


export default portfolios;
