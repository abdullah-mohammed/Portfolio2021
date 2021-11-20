//components 
import TopToolbar from './components/TopToolbar'; 

//styles related
import original from "react95/dist/themes/original";
import { GlobalStyles } from './App.styles';
import { ThemeProvider } from 'styled-components';


const App = () => {
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme = {original}>
        <TopToolbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
