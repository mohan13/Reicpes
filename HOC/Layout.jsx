import React from "react";
import Toolbar from "../Components/Navigation/Toolbar/toolbar";
import Footer from "../Components/Footer/Index";
const Layout = ({ children }) => {
  return (
    <div>
      <Toolbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
