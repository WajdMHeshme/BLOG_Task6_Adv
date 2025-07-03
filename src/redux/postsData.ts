import type { Post } from "./postsTypes";
import post1 from "../assets/Image (45).png";
import post2 from "../assets/Image (46).png";
import post3 from "../assets/Image (47).png";
import post4 from "../assets/Image (48).png";
import post5 from "../assets/Image (51).png";
import post6 from "../assets/Image (50).png";
import post7 from "../assets/Image (52).png";
import post8 from "../assets/Image (53).png";
import post9 from "../assets/Image (54).png";
import post10 from "../assets/Image (55).png";

import leftPost1 from "../assets/Image (56).png";
import leftPost2 from "../assets/Image (57).png";
import leftPost3 from "../assets/Image (58).png";
import leftPost4 from "../assets/Image (59).png";
import leftPost5 from "../assets/Image (60).png";
import leftPost6 from "../assets/Image (61).png";
import leftPost7 from "../assets/Image (62).png";
import leftPost8 from "../assets/Image (63).png";
import leftPost9 from "../assets/Image (64).png";



const sharedSections: Post["sections"] = [
  {
    image: leftPost1,
    text1:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    text2:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system...",
    text3:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
  },
  {
    image: leftPost2,
    text1:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    text2:
      "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
    text3: "Column grid involves dividing a page into vertical columns...",
    text4:
      "Modular grid extends the column grid further by adding rows to it...",
    text5: "Hierarchical grid: Content is organized by importance...",
    text6: "Breaking Down the Grid",
    text7:
      "Regardless of the type of grid you are using, the grid is made up of three elements...",
    text8: "Columns: Columns take up most of the real estate in a grid...",
    text9:
      "Gutters: The gutter is the space between columns that separates elements...",
  },
  {
    image: leftPost3,
    text1:
      "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
    text2: "Examples of Grids in Use",
    text3: "Example 1: Hierarchical Grid",
    text4:
      "Our first example is from The New York Times. This screen utilizes a hierarchical grid...",
  },
  {
    image: leftPost4,
    text1:
      "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience...",
    text2: "Example 2: Column Grid",
    text3:
      "Our second example is from Ritual.com, a vitamin company. This design uses a column grid...",
  },
  {
    image: leftPost5,
    text1: "Ritual’s four-column grid makes scanning products easy...",
    text2: "Example 3: Modular Grid",
    text3:
      "Our third example is from Behance, a design library. The site’s design uses a modular grid...",
  },
  {
    image: leftPost6,
    text1:
      "Behance’s design uses a modular grid, which allows users to easily browse...",
    text2: "Example 4: Breaking the Grid",
    text3:
      "Our last example is Shrine from Google’s Material Studies. This design uses a column grid...",
  },
  {
    image: leftPost7,
    text1:
      "Breaking the grid produces a chaotic browsing experience for users...",
    text2: "Benefits of the Grid",
    text3: "Using a grid benefits both end users and the designers alike:",
    text4: `Designers can quickly put together well-aligned interfaces.
Users can easily scan predictable grid-based interfaces.
A good grid is easy to adapt to various screen sizes and orientations...`,
  },
  {
    image: leftPost8,
    text1:
      "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
    text2: "Even more importantly, the grid is not a throw-away concept...",
    text3: "Choosing and Setting Up Your Grid",
    text4:
      "How you use and set up a grid is fundamental to creating well thought out layouts...",
    text5: "Choose the right grid for your needs...",
    text6: "Spend time setting up your grid...",
  },
  {
    image: leftPost9,
    text1:
      "Content or elements should be placed within and across columns, not gutters.",
    text2: "Consider using an 8px grid system...",
    text3: "Conclusion",
    text4:
      "Grids not only provide designers a structure on which to base layouts...",
  },
];

export const postsData: Post[] = [
  {
    id: 1,
    author: "Olivia Rhye • 1 Jan 2023",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    mainImage: post1,
    categories: ["Design", "Research", "Presentation"],
    sections: sharedSections,
  },
  {
    id: 2,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainImage: post2,
    categories: ["Design", "Research"],
    sections: sharedSections,
  },
  {
    id: 3,
    author: "Lana Steiner • 1 Jan 2023",
    title: "Building your API Stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    mainImage: post3,
    categories: ["Design", "Research"],
    sections: sharedSections,
  },
  {
    id: 4,
    author: "Olivia Rhye • 1 Jan 2023",
    title: "Grid system for better Design User Interface",
    description:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    mainImage: post4,
    categories: ["Design", "Interface"],
    sections: sharedSections,
  },

  {
    id: 5,
    author: "Alec Whitten • 1 Jan 2023",
    title: "Bill Walsh leadership lessons",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    mainImage: post5,
    categories: ["Leadership", "Management"],
    sections: sharedSections,
  },

  {
    id: 6,
    author: "Demi WIlkinson • 1 Jan 2023",
    title: "PM mental models",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    mainImage: post6,
    categories: ["Product", "Research", "Frameworks"],
    sections: sharedSections,
  },

  {
    id: 7,
    author: "Candice Wu • 1 Jan 2023",
    title: "What is Wireframing?",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    mainImage: post7,
    categories: ["Design", "Research"],
    sections: sharedSections,
  },
  {
    id: 8,
    author: "Natali Craig • 1 Jan 2023",
    title: "How collaboration makes us better designers",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    mainImage: post8,
    categories: ["Design", "Research"],
    sections: sharedSections,
  },
  {
    id: 9,
    author: "Drew Cano • 1 Jan 2023",
    title: "Our top 10 Javascript frameworks to use",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    mainImage: post9,
    categories: ["Software Development", "Tools", "SaaS"],
    sections: sharedSections,
  },
  {
    id: 10,
    author: "Orlando Diggs • 1 Jan 2023",
    title: "Podcast: Creating a better CX Community",
    description:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    mainImage: post10,
    categories: ["Podcasts", "Customer Success"],
    sections: sharedSections,
  },
  {
    id: 11,
    author: "Alec Whitten • 1 Jan 2023",
    title: "Bill Walsh leadership lessons",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    mainImage: post5,
    categories: ["Leadership", "Management"],
    sections: sharedSections,
  },

  {
    id: 12,
    author: "Demi WIlkinson • 1 Jan 2023",
    title: "PM mental models",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    mainImage: post6,
    categories: ["Product", "Research", "Frameworks"],
    sections: sharedSections,
  },

  {
    id: 13,
    author: "Candice Wu • 1 Jan 2023",
    title: "What is Wireframing?",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    mainImage: post7,
    categories: ["Design", "Research"],
    sections: sharedSections,
  },
  {
    id: 14,
    author: "Natali Craig • 1 Jan 2023",
    title: "How collaboration makes us better designers",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    mainImage: post4,
    categories: ["Design", "Research"],
    sections: sharedSections,
  },
  {
    id: 15,
    author: "Drew Cano • 1 Jan 2023",
    title: "Our top 10 Javascript frameworks to use",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    mainImage: post6,
    categories: ["Software Development", "Tools", "SaaS"],
    sections: sharedSections,
  },
  {
    id: 16,
    author: "Orlando Diggs • 1 Jan 2023",
    title: "Podcast: Creating a better CX Community",
    description:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    mainImage: post1,
    categories: ["Podcasts", "Customer Success"],
    sections: sharedSections,
  },
  {
    id: 17,
    author: "Candice Wu • 1 Jan 2023",
    title: "What is Wireframing?",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    mainImage: post7,
    categories: ["Design", "Research"],
    sections: sharedSections,
  },
  {
    id: 18,
    author: "Natali Craig • 1 Jan 2023",
    title: "How collaboration makes us better designers",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    mainImage: post4,
    categories: ["Design", "Research"],
    sections: sharedSections,
  },
  {
    id: 19,
    author: "Drew Cano • 1 Jan 2023",
    title: "Our top 10 Javascript frameworks to use",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    mainImage: post6,
    categories: ["Software Development", "Tools", "SaaS"],
    sections: sharedSections,
  },
];
