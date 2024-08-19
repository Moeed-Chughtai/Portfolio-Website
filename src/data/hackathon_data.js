import spendwise1 from "../assets/img/spendwise1.png";
import spendwise2 from "../assets/img/spendwise2.png";
import spendwise3 from "../assets/img/spendwise3.png";
import spendwise4 from "../assets/img/spendwise4.png";
import signalise1 from "../assets/img/signalise1.png";
import signalise2 from "../assets/img/signalise2.png";
import signalise3 from "../assets/img/signalise3.jpeg";
import signalise4 from "../assets/img/signalise4.jpeg";
import peak1 from "../assets/img/peak1.png";
import peak2 from "../assets/img/peak2.png";
import peak3 from "../assets/img/peak3.png";
import peak4 from "../assets/img/peak4.png";
import peak5 from "../assets/img/peak5.png";
import peak6 from "../assets/img/peak6.png";


export default [
    {
        id: 1,
        title: "Inform UK",
        description: `
        At the BarCamp London Hackathon, our team secured 1st place with a web app that improves voter access to unbiased election information. 
        he app integrates APIs from Parliament, Democracy Club, and the ONS to provide location-specific data on candidates and manifestos for over 5,000 regions. 
        It also features an OpenAI-powered chatbot that helps users query and compare policies, ensuring they can make well-informed voting decisions.
        `,
        images: [
            
        ],
        link: "https://github.com/jwoleabu/BCLHack2024",
        technologies: ["JavaScript", "React", "TailwindCSS", "Python", "Flask", "MongoDB", "OpenAI API"] 
    },
    {
        id: 2,
        title: "Forecast Peak AI",
        description: `
            At the Peak AI Hackathon, my team and I analysed supermarket data to develop a forecasting model using the ARIMAX method. 
            We explored product trends, profitability, and customer behavior, identifying top-performing items and opportunities to reward loyal customers. 
            By addressing data gaps and aggregating information at the sub-category level, we generated reliable predictions to support informed decision-making.
        `,
        images: [
            peak1,
            peak2,
            peak3,
            peak4,
            peak5,
            peak6
        ],
        link: "https://github.com/abzzer/Forecast-Peak-Ai",
        technologies: ["Python", "Pandas", "Numpy", "MatPlotLib", "TensorFlow", "Scikit-learn"] 
    },
    {
        id: 3,
        title: "Signalise",
        description: `
            At the Co-op Hack, I joined the Signalise Co-op team to help develop a platform for Deaf individuals, interpreters, and health staff. 
            I researched Matrix and Rocket.Chat, two communication technologies, to assist in creating their minimum viable product (MVP), providing insights to guide the platform's development.
        `,
        images: [
            signalise1,
            signalise2,
            signalise3,
            signalise4
        ],
        link: "https://github.com/aleifericsson/spendwiseFAMS",
        technologies: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "Rocket.Chat", "Matrix"] 
    },
    {
        id: 4,
        title: "SpendWise",
        description: `
            During GreatUniHack, my team utilized Capitol One API for a finance management web app, beneficial for students. 
            Features included spending trend visualization, maps, and a data analysis algorithm offering personalised money management advice. 
            The hackathon provided valuable collaborative problem-solving experience under time constraints, culminating in a presentation to judges.
        `,
        images: [
            spendwise1,
            spendwise2,
            spendwise3,
            spendwise4
        ],
        link: "https://github.com/aleifericsson/spendwiseFAMS",
        technologies: ["Python", "JavaScript", "HTML", "CSS", "Capitol One API"] 
    },
];
