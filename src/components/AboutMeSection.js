import AboutMePicture from './AboutMePicture';
import AboutMeWindow from './AboutMeWindow';
import AboutMeText from './AboutMeText'; 
//styles
import { Wrapper, ParentWrapper } from './AboutMeSection.styles'; 

const AboutMeSection = () => {
    return (
        <ParentWrapper>
            <AboutMeText />
            <Wrapper>
                <AboutMeWindow />
                <AboutMePicture />
            </Wrapper>
        </ParentWrapper>
    );
}

export default AboutMeSection; 