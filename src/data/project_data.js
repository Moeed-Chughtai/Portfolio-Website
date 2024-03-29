import convo1 from "../assets/img/convo1.png";
import convo2 from "../assets/img/convo2.png";
import convo3 from "../assets/img/convo3.png";
import convo4 from "../assets/img/convo4.png";
import webCrawler1 from "../assets/img/web-crawler1.png";
import webCrawler2 from "../assets/img/web-crawler2.png";
import webCrawler3 from "../assets/img/web-crawler3.png";
import games1 from "../assets/img/games1.png";
import games2 from "../assets/img/games2.png";
import games3 from "../assets/img/games3.png";
import games4 from "../assets/img/games4.png";

export default [
    {
        id: 1,
        title: "ConvoConnect",
        description: `
        Developed a chat solution in Android Studio, prioritising speed and functionality. 
        Seamlessly handles text, image, and video messaging with editing and deletion features. 
        Integrated Firebase for security and scalability, utilising NoSQL databases. 
        Implemented RSA encryption for secure data transmission, promoting trust and reliability.
        `,
        images: [
            convo1,
            convo2,
            convo3,
            convo4
        ],
        link: "https://github.com/Moeed-Chughtai/ConvoConnect",
        technologies: ["Android Studio", "Java", "XML", "Firebase", "RSA Encryption"] 
    },
    {
        id: 2,
        title: "Web Scraper",
        description: `
        This project stemmed from my interest in the Wikipedia API, leading to a Python script parsing over 10,000 articles into HTML pages. 
        I integrated the PageRank algorithm to optimise article linking. 
        Developed a search engine where users can search and explore articles.
        `,
        images: [
            webCrawler1,
            webCrawler2,
            webCrawler3
        ],
        link: "https://github.com/Moeed-Chughtai/Web-Scraper",
        technologies: ["Python", "JavaScript", "HTML", "CSS", "Flask", "Wikipedia API"]
    },
    {
        id: 3,
        title: "GamesHive",
        description: `
        I honed my object-oriented JavaScript skills by coding classic games like Flappy Bird and Pac-Man, then transitioned them into a professional web application. 
        I crafted sleek designs, delved into CSS effects, implemented responsive design, and integrated an authentication system for secure score storage.
        `,
        images: [
            games1,
            games2,
            games3,
            games4
        ],
        link: "https://github.com/Moeed-Chughtai/GamesHive",
        technologies: ["JavaScript", "HTML", "CSS", "Python"]
    }
];
