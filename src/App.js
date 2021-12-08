import { useRef } from 'react'; 

//components 
import TopToolbar from './components/TopToolbar'; 
import AboutMeSection from './components/AboutMeSection'; 
import ResumeFile from './components/ResumeFile'; 
import ProjectsSection from './components/ProjectsSection'; 
import VoxelDesktop from './components/VoxelDesktop'; 
import CreateParticles from './components/CreateParticles'; 

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
      <CreateParticles />
      <GlobalStyles />
      <ThemeProvider theme = {original}>
        <TopToolbar ref = {refs}/>
        <Wrapper>
          <VoxelDesktop /> 
          <div ref = {refAbout} style = {{marginBottom: 35}}/>
          <AboutMeSection />
          <div ref = {refResume} style = {{marginBottom: 35}}/>
          <ResumeFile />
          <div ref = {refProjects} style = {{marginBottom: 35}}/>
          <ProjectsSection />
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
