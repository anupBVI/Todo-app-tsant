import { Button } from "antd";
import React, { useState } from "react";
import {} from "react-router";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Home from "./pages/home";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Theme } from "./styles/Theme";
import styled from "styled-components";
import New from "./pages/new";
import Navbar from "./components/Navbar/Navbar";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import { Provider } from "react-redux";
// import store from "./redux/store";
import HomePage from "./pages/homepage/HomePage";
// import { store } from "./toolkit/store";
import Dashboard from "./components/Dashboard";
import store from "./redux/store";

const Wrapper = styled.div`
  display: flex;
  margin: 0;
`;

const App = () => {
  const [Nav, setNav] = useState(true);
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />

        <Router>
          <Wrapper>
            {Nav && <Navbar />}
            <div className="right">
              <Routes>
                {/* <Route path="/" element={<HomePage />}> */}
                {/* </Route> */}
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                {/* <Route path="/new3" element={<Page3 />} /> */}
                <Route path="/new4" element={<Page4 />} />
              </Routes>
              <div className="footer"></div>
            </div>
          </Wrapper>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;





// import { Route, Redirect } from "react-router-dom";

// function PrivateRoute({ component: Component, ...rest }) {
//   const isAuthenticated = useAuth(); // a custom hook to check if the user is authenticated

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to={{ pathname: "/login" }} />
//         )
//       }
//     />
//   );
// }


{/* <Switch>
  <Route path="/login" component={LoginPage} />
  <PrivateRoute path="/profile" component={ProfilePage} />
  <Redirect to="/" />
</Switch> */}