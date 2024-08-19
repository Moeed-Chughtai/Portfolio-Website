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
import medassist1 from "../assets/img/medassist1.jpg";
import medassist2 from "../assets/img/medassist2.jpg";
import medassist3 from "../assets/img/medassist3.jpg";
import medassist4 from "../assets/img/medassist4.jpg";
import medassist5 from "../assets/img/medassist5.jpg";
import medassist6 from "../assets/img/medassist6.jpg";
import medassist7 from "../assets/img/medassist7.jpg";
import medassist8 from "../assets/img/medassist8.jpg";
import medassist9 from "../assets/img/medassist9.jpg";
import deepproof1 from "../assets/img/deepproof1.png";
import deepproof2 from "../assets/img/deepproof2.png";
import deepproof3 from "../assets/img/deepproof3.png";


export default [
    {
        id: 1,
        title: "MedAssist",
        description: `
        I built a machine learning diagnostic app with 90% accuracy, utilizing regression, decision trees, and neural networks. 
        I also developed a treatment recommender system with collaborative and content-based filtering, trained on 100,000 profiles. 
        Additionally, I used CNNs and computer vision to detect anomalies in brain scans and X-rays, achieving 80% accuracy.
        `,
        images: [
            medassist1,
            medassist2,
            medassist3,
            medassist4,
            medassist5,
            medassist6,
            medassist7,
            medassist8,
            medassist9
        ],
        link: "https://github.com/Moeed-Chughtai/MedAssist",
        technologies: ["React Native", "Python", "Flask", "TensorFlow", "Scikit-Learn", "OpenCV", "MySQL"]
    },
    {
        id: 2,
        title: "DeepProof",
        description: `
        I created a system to process up to 10,000 videos by converting frames into images and detecting faces with MTCNN, enhancing image quality for better clarity. 
        I developed a neural network model using EfficientNetB0 that achieved 92% accuracy in detecting deepfake content. 
        Additionally, I built a web application for deepfake detection, which provides users with a visual confidence score for each prediction.
        `,
        images: [
            deepproof1,
            deepproof2,
            deepproof3
        ],
        link: "https://github.com/Moeed-Chughtai/DeepProof",
        technologies: ["TypeScript", "React", "TailwindCSS", "Python", "Flask", "TensorFlow", "OpenCV"]
    },
    {
        id: 3,
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
        id: 4,
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
        technologies: ["JavaScript", "HTML", "CSS", "Python", "Flask", "Wikipedia API"]
    },
    {
        id: 5,
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
