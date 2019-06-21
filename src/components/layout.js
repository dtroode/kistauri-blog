import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./footer";

const Layout = props => {
  useEffect(() => checkTheme())

  function checkTheme() {
    let isThemeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    (isThemeDark === true && localStorage.getItem('themeSwitch') === null) ? document.body.setAttribute('data-theme', 'dark') : (isThemeDark === false && localStorage.getItem('themeSwitch')) ? document.body.setAttribute('data-theme', 'dark') : (isThemeDark === true && localStorage.getItem('themeSwitch') === 'dark') ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header
            title={props.title}
            pageClass={props.pageClass}
            category={props.category}
          />
          <main className={props.pageClass}>{props.children}</main>
          <Footer />
        </>
      )}
    />
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
