import { useRef } from 'react'; 

//components 
import TopToolbar from './components/TopToolbar'; 
import AboutMeSection from './components/AboutMeSection'; 
import ResumeFile from './components/ResumeFile'; 
import ProjectsSection from './components/ProjectsSection'; 
// import AnimatedModel from './components/AnimatedModel'; 
import VoxelDesktop from './components/VoxelDesktop'; 

//styles related
import original from "react95/dist/themes/original";
import { GlobalStyles, Wrapper } from './App.styles';
import { ThemeProvider } from 'styled-components';


const App = () => {
  const refResume = useRef(); 
  const refAbout = useRef(); 
  const refProjects = useRef(); 

  const refs = {refRes: refResume, refAbt: refAbout, refProj: refProjects}; 

  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme = {original}>
        <TopToolbar ref = {refs}/>
        <Wrapper>
          <VoxelDesktop /> 
          <div ref = {refAbout}/>
          <AboutMeSection />
          <div ref = {refResume}/>
          <ResumeFile />
          <div ref = {refProjects}/>
          <ProjectsSection />
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
