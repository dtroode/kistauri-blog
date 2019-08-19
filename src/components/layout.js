import React from "react";

import Header from "./header";
import Footer from "./footer";

const Layout = props => (
  <>
    {/* Using header component and passing link of page into it */}
    <Header pageClass={props.pageClass} title={props.title} />
    {/* Passing childs into main component */}
    <main className={`main main--${props.pageClass}`}>{props.children}</main>
    {/* Using footer component and passing link of page into it */}
    <Footer pageClass={props.pageClass} title={props.title} link={props.link} />
  </>
);

export default Layout;
