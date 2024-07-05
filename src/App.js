import { ThemeProvider } from 'styled-components'
import { darkTheme } from './utils/Themes';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import { AppTags } from './styledComponents/styleTags';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import StarsCanvas from './components/canvas/Stars'
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Projects from './components/Projects';

const { Body, Wrapper } = AppTags

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Header />
        <Body>
          <StarsCanvas />
          <div>
            <Hero />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects />
            <Wrapper>
              <Education />
              <Contacts />
            </Wrapper>
            <Footer />
          </div>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
