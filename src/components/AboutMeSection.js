import AboutMePicture from './AboutMePicture';
import AboutMeWindow from './AboutMeWindow';
//styles
import { Wrapper } from './AboutMeSection.styles'; 

const AboutMeSection = () => {
    return (
        <Wrapper>
            <AboutMeWindow />
            <AboutMePicture />
        </Wrapper>
    );
}

export default AboutMeSection; 