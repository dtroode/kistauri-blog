import React from "react";
import "../styles/pages-styles/portfolio.scss";
import "../styles/media.scss";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";
import SEO from "../components/seo";

const PortfolioPage = () => {
  return (
    <Layout pageClass="portfolio" title="David Kistauri >_<">
      <Helmet>
        <link rel="canonical" href="https://dtroode.netlify.com/" />
      </Helmet>
      <SEO
        title="Portfolio"
        description="Just David Kistauri's portfolio. Name any word and i'll make a website about it"
        image="/img/preview.jpg"
      />
      <section className="main__content">
        <h2>About me</h2>
        <p>
          <span>0.1. </span>Develop adaptive websites, landing pages and
          web-apps with compression technology — websites load fast. Work remote
          from Abkhazia. Use HTML, CSS, JS, React, Gatsby. Learn Next.js,
          Svelte. Contribute to opensource. Write articles to blog and dev.to
          about useful tricks for frontend-developers. Have a{" "}
          <a href="https://t.me/dtroodechannel">Telegram Channel</a>.
        </p>
        <hr />
      </section>
      <section className="main__content">
        <h2>About media</h2>
        <section>
          <p>
            <span>0.2. </span>
            <a href="https://twitter.com/newsycombinator/status/1142764827959595008?s=20">
              My article about Firefox on Hackernews
            </a>
          </p>
        </section>
        <hr />
      </section>
      <section className="main__content">
        <h2>About works</h2>
        <section>
          <p>
            <span>0.5. </span>
            <a href="https://cyxym.cf">CYXYM website</a>
            <br />
            This is the website for my city Sukhum. Wrote because no one else
            did.
          </p>
          <p>
            <span>0.6. </span>
            <a href="https://secondschool.gq">School website</a>
            <br />
            This is a redesign of the school website because the old one is
            ugly.
          </p>
          <p>
            <span>0.7. </span>
            <a href="https://constantvalues.tk">Constant values website</a>
            <br />A lot of Maths, Physics and Chemistry tables for easy
            learning.
          </p>
          <p>
            <span>0.8. </span>
            <a href="https://masterbuket.com">
              Floristic studio website and branding
            </a>
            <br />
            Website + logo, design system, social media accounts and offline
            branding.
          </p>
        </section>
      </section>
    </Layout>
  );
};

export default PortfolioPage;
