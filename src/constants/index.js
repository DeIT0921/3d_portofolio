import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    fitra,
    almira,
    indra,
    web3,
    jupyter,
    figma_design,
    github,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "First Impression when i start to open this portofolio, impressive and mesmerising. One word to say Awesome!",
        name: "Almira Firdaus T.",
        designation: "Student",
        company: "PENS",
        image: almira,
    },
    {
        testimonial:
            "An advancement to self-development through a website platform",
        name: "Fitratama alfarezi",
        designation: "Student",
        company: "PENS",
        image: fitra,
    },
    {
        testimonial:
            "After visited this website, I'm sure this developer who create this website is really talented.",
        name: "Indra Adi Nagara",
        designation: "Student",
        company: "Universitas Jember",
        image: indra,
    },
];

const projects = [
    {
        name: "Data Science Application",
        description:
            "My Jupyter Notebook project explores the application of machine learning algorithms to analyze and predict stock market trends based on historical data.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "jupyternotebook",
                color: "green-text-gradient",
            },
            {
                name: "anaconda",
                color: "pink-text-gradient",
            },
        ],
        image: jupyter,
        source_code_link: "https://github.com/DeIT0921",
        icon: github,
    },
    {
        name: "Bloxbuildings website",
        description:
            "My Web 3 project focuses on developing decentralized applications (DApps) using blockchain technology to enable secure and transparent peer-to-peer interactions without the need for intermediaries.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "solidity",
                color: "pink-text-gradient",
            },
            {
                name: "metamask",
                color: "yellow-text-gradient",
            },
        ],
        image: web3,
        source_code_link: "https://github.com/DeIT0921",
        icon: github,
    },
    {
        name: "Re-design Website",
        description:
            "My Figma project involves creating a user interface (UI) design for a mobile application, focusing on intuitive navigation, visually appealing components, and seamless user interactions.",
        tags: [
            {
                name: "Figma",
                color: "pink-text-gradient",
            },
        ],
        image: figma_design,
        source_code_link: "https://www.figma.com/file/DK5Z4yUULOEYI2Sqo5jOa4/WebsiteTRM?type=design&node-id=0%3A1&mode=design&t=46lmtGOKuMj16oHW-1",
        icon: figma,
    },
];

export { services, technologies, experiences, testimonials, projects };