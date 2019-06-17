import React from "react";
import "../styles/portfolio.css";
import "../styles/mobile.css";
import "../styles/dark.css";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

const PortfolioPage = () => {
  const title = "Portfolio";
  return (
    <Layout pageClass="portfolio" title="David Kistauri >_<">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href="https://dtroode.netlify.com/portfolio" />
      </Helmet>
      <section className="content me">
        <h2>About me</h2>
        <p>
          <span>0.1.</span>I am frontend-developer. I write HTML, CSS, JS, React
          (learning) code. I'm in the 10th grade. Abkhazia. I started to code in
          2018 and have already written several websites. I have a Telegram
          channel (link below). Digital! I have experience in SMM. Not native
          English speaker.
        </p>
        <hr />
      </section>
      <section className="content media">
        <h2>About media</h2>
        <section>
          <p>
            <span className="link-span">0.2. </span>
            <a href="https://youtu.be/vGIBBduGjvc">
              Interview on local TV-channel about how I wrote the website for
              school
            </a>
          </p>
        </section>
        <hr />
      </section>
      <section className="content works">
        <h2>About works</h2>
        <section>
          <p>
            <span className="link-span">0.3. </span>
            <a href="https://cyxym.cf">CYXYM website</a>
            <br />
            This is website for my cite Sukhum. Wrote because no one else did.
          </p>
          <p>
            <span className="link-span">0.4. </span>
            <a href="https://secondschool.gq">School website</a>
            <br />
            This is redesign because old one is ugly.
          </p>
          <p>
            <span className="link-span">0.5. </span>
            <a href="https://constantvalues.tk">Constant values website</a>
            <br />A lot of tables for easy learning.
          </p>
          <p>
            <span className="link-span">0.6. </span>
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
