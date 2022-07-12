import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CyclesContextProvider } from './contexts/CyclesContext';
import Router from './Router';
import GlobalStyles from './styles/global';
import defaultTheme from './styles/themes/default';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
