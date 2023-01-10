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
import {store} from "./toolkit/store"

const Wrapper = styled.div`
  display: flex;
  margin: 0;
`;

const App = () => {
  const [Nav, setNav] = useState(false);
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />

        <Router>
          <Wrapper>
            {Nav && <Navbar />}
            <div className="right">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/todohome" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/new3" element={<Page3 />} />
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
