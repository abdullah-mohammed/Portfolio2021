import {
    createGlobalStyle, 
    ThemeProvider
 }from 'styled-components';
 import styled from 'styled-components';
 import { styleReset, List, ListItem, Divider } from 'react95';
 //font imports 
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

export const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    background-color: teal;
  }
  
  ${styleReset}
`; 

export const Wrapper = styled.div`
  display: flex; 
  flex-direction: column; 
  padding-top: 70px;
  align-items: center;
`;