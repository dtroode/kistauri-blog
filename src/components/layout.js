import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./footer";

const Layout = props => (
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
          pageClass={props.pageClass}
          title={props.title}
          link={props.link}
        />
        <main className={`main--${props.pageClass}`}>{props.children}</main>
        <Footer
          pageClass={props.pageClass}
          title={props.title}
          link={props.link}
        />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
