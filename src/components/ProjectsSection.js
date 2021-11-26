//style imports
import {
    Window, 
    WindowHeader,
    WindowContent,
    Cutout
} from 'react95';
import { HeaderWrapper, CardWrappers } from './ProjectsSection.styles'; 
//images 
import fitnessTracker from '../images/fitnessTracker.png'; 
import housingPrediction from '../images/housingPrediction.png'; 
import masjidZakat from '../images/masjidZakat.jpeg'; 
import ProjectCard from './ProjectCard';


const ProjectsSection = () => {
    const projectInfo = [
        {
            name: "Masjid Donation App", 
            description: "Developed an online portal for my local mosque where users can donate"
            + " and view past donations.",
            stack: "JavaScript, SQlite, Node.js, Express, Stripe API, Google Auth API",
            link: "https://github.com/abdullah-mohammed/Masjid-Zakat-App",
            image: masjidZakat
        },
        {
            name: "Fitness Tracker App",
            description: "Developed an fitness tracker web app where users can log past fitness activities, "
            + "schedule future activities, and view trends in past activities through various graphs.",
            stack: "JavaScript, SQlite, Node.js, Express, Google Auth API",
            link: "https://github.com/abdullah-mohammed/Fitness-Tracker",
            image: fitnessTracker
        }, 
        {
            name: "ML Housing Price Predictor",
            description: "Lead a team of 8 students in a quarter long project where we developed an optimal "
            + "machine learning model that predicts the price of a house in the current market given some attributes.",
            stack : "Python and various machine learning libraries", 
            link: "https://github.com/abdullah-mohammed/Housing-Prices-Prediction-ML",
            image: housingPrediction
        }
    ];

    return (
        <div>
            <HeaderWrapper>
                <Window>
                    <WindowContent>
                        <Cutout style = {{background: '#FFF'}}>
                            <p style = {{fontWeight: 'bold'}}>Projects</p>
                        </Cutout>
                    </WindowContent>
                </Window>
            </HeaderWrapper>
            <CardWrappers>
                {projectInfo.map((projectItem) =>
                    <ProjectCard projectItem = {projectItem}/>
                )}
            </CardWrappers>
        </div>
    );
};

export default ProjectsSection; 