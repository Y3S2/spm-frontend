import UserLogin from "./systemAdmin/components/UserLogin.jsx";
import UsersGrid from "./systemAdmin/components/UsersGrid.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import PrivateRoute from "./PrivateRoute.js";
import StaffUserRegitration from "./systemAdmin/components/StaffUserRegitration.jsx";
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
      <StaffUserRegitration />
    {/* <ThemeProvider theme={theme}>
      <Router>
      
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
       
      </Router>
    </ThemeProvider> */}
    </div>
  );
}

export default App;
