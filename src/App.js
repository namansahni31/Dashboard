import './App.css';
import HeaderComponent from './Components/Headers/HeaderComponent';
import Sidenav from './Components/Sidenav/Sidenav';
import { Switch, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@mui/material/styles';
import Template from './Components/MainComponent/Template';
import Addteam from './Components/Addteam';
import { BrowserRouter } from "react-router-dom";
import NewProject from './Components/NewProject';

const theme = createTheme({
  typography: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
  },
});
function App() {
  return (
    <>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
            <HeaderComponent/>
             <Sidenav/>
            </Route>
            <Route path="/newproject">
              <NewProject />
            </Route>
            <Route path="/template">
              <Template />
            </Route>
            <Route path="/addteam">
              <Addteam/>
            </Route>
            
            {/* <Route path="/login">
              <Login />
            </Route>

            <Route path="/welcome">
              <WelcomeMsg />
            </Route>

            <Route path="/terms">
              <TermsLogin />
            </Route>  */}
          </Switch>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </StylesProvider>
    </>
  );
}

export default App;
