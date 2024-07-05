import { ThemeProvider } from 'styled-components'
import { darkTheme } from './utils/Themes';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import { AppTags } from './styledComponents/styleTags';
import Skills from './components/Skills';
import Experience from './components/Experience';

const { Body } = AppTags

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Header />
        <Body>
          <Hero />
          <Skills />
          <Experience />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
