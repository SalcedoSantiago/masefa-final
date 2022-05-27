import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles'
import Masefa from './demos/Masefa';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles'

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<Masefa />}></Route> 
          </Routes>
        </Router>
      </ThemeProvider>

    </>
  );
}

