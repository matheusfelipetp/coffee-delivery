import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { CoffeesProvider } from './context/CoffeesContext';
import Router from './routes';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesProvider>
          <Router />
        </CoffeesProvider>
      </BrowserRouter>
      <GlobalStyle />

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="colored"
      />
    </ThemeProvider>
  );
}
