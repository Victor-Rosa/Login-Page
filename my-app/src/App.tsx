import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';



function App() {

  return (
    <>
    <ThemeProvider theme={theme.default}>
      <GlobalStyles />
      <SignIn/>
    </ThemeProvider>
    </>
   
  );
}

export default App;
