import React from "react";
import styled, { injectGlobal } from "styled-components";
import Logo from "./logo";
import Helmet from "react-helmet";

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    background: #EEE;
    font-family: 'Nunito', sans-serif;
  }
`;

const NavBar = styled.div`
  height: 30px;
  padding: 10px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  text-align: center;
  > img {
    height: 30px;
  }
`;

const Nav = () => (
  <NavBar>
    <Helmet
      title="react-error"
      link={[
        {
          href: "https://fonts.googleapis.com/css?family=Nunito",
          rel: "stylesheet"
        }
      ]}
    />
    <Logo />
  </NavBar>
);

export default Nav;
