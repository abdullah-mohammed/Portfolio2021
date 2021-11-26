//components 
import TopToolbar from './components/TopToolbar'; 
import AboutMeSection from './components/AboutMeSection'; 
import ResumeFile from './components/ResumeFile'; 
import ProjectsSection from './components/ProjectsSection'; 

//styles related
import original from "react95/dist/themes/original";
import { GlobalStyles, Wrapper } from './App.styles';
import { ThemeProvider } from 'styled-components';


const App = () => {
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme = {original}>
        <TopToolbar />
        <Wrapper>
          {/* animated component */}
          <AboutMeSection />
          <ResumeFile />
          <ProjectsSection />
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
