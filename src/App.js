import UserLogin from "./systemAdmin/components/UserLogin.jsx";
import UsersGrid from "./systemAdmin/components/UsersGrid.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import PrivateRoute from "./PrivateRoute.js";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#005792",
        dark: "#00204A",
        light: "#D9FAFF",
      },
    },
  
    typography: {
      fontFamily: "Poppins",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
    shape: {
      borderRadius: "15px",
    },
  });
  
  return (
    <div >
    <ThemeProvider theme={theme}>
      <Router>
        {/* <Suspense fallback={<CircularProgress style={{position:"absolute",left:"50%",top:"50%"}}/>}> */}
          <Switch>
            <PrivateRoute path="/login" component={<UserLogin />} />
            <PrivateRoute path="/staff/">
              <Route
                  path={[
                    "/staff/inventorymanager",
                    "/staff/receptionist",
                    "/staff/doctor",
                    "/staff/sysadmin",
                    "/staff/labassistant",
                    "/staff/paymentadmin",
                    "/staff/pharmasist",
                  ]}
              >
                <Switch>
                  <Route path="/staff/sysAdmin" component={UsersGrid} />
                
              
                </Switch>
              </Route>
            </PrivateRoute>
    
           
          </Switch>
        {/* </Suspense> */}
      </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
