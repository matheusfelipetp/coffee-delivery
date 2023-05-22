import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Router from './routes';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { CoffeesProvider } from './context/CoffeesContext';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesProvider>
          <Router />
        </CoffeesProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
