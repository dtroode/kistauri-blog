import React from "react";
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
        title=">_<"
        description="Just David Kistauri's website. Name any word and i'll make a website about it"
        image="/img/preview.jpg"
      />
      <section className="main__content">
        <h2>About me</h2>
        <p>
          <span>0.1. </span>Develop adaptive websites, landing pages and
          web-apps with compression technology websites load fast. Work remote
          from Abkhazia. Use HTML, CSS, JS, React, Gatsby. Learn Next.js,
          Svelte. Contribute to opensource. Write articles to blog and dev.to
          about useful tricks for frontend-developers.
        </p>
        <p>
          I make a contribution to high-quality developing, want to make the
          process easier for staring and advanced programmers: from developer to
          developer.
        </p>
        <p>
          Work only remote. Accept full plan with prepaid and material to get to
          work right away.
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
            This is the website for my city Sukhum.
            <br />
            <i>Because no one did.</i>
          </p>
          <ul>
            <li>Idea</li>
            <li>Code all project</li>
            <li>Design all project</li>
            <li>Write text for people and guide sections</li>
          </ul>
          <p>
            <span>0.6. </span>
            <a href="https://secondschool.gq">Secondschool website</a>
            <br />
            This is a redesign of the school website.
            <br />
            <i>Because it was ugly.</i>
          </p>
          <ul>
            <li>Idea</li>
            <li>Code all project</li>
            <li>Design all project</li>
            <li>
              Rewrite text for history section. Write text for all other
              sections
            </li>
          </ul>
          <p>
            <span>0.7. </span>
            <a href="https://constantvalues.tk">Constant Values website</a>
            <br />
            Website with math, physics and chemistry constant values.
            <br />
            <i>Science interest.</i>
          </p>
          <ul>
            <li>Idea</li>
            <li>Code all project</li>
            <li>Design all project</li>
            <li>Content</li>
          </ul>
          <p>
            <span>0.8. </span>
            <a href="https://masterbuket.com">Master Buket</a>
            <br />
            Website + branding for floristic studio.
            <br />
          </p>
          <ul>
            <li>Design brand</li>
            <li>Design website</li>
            <li>Code website</li>
            <li>Work with social media accounts</li>
          </ul>
        </section>
        <hr />
      </section>
      <section className="main__content">
        <h2>About other</h2>
        <section>
          <p>
            <span>0.9. </span>
            <a href="https://t.me/s/dtroodechannel">
              Telegram channel about technology and design
            </a>
          </p>
        </section>
      </section>
    </Layout>
  );
};

export default PortfolioPage;
