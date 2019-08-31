import React from "react";
import Img from "gatsby-image";

import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { format, isToday, isYesterday, isThisYear } from "date-fns";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../styles/media.scss";

const ProjectsList = ({ data }) => {
  const ProjectsList = data.Projects.edges;
  const ruLocale = require("date-fns/locale/ru");

  return (
    <Layout pageClass="projects" title="Давид Кистаури. Проекты">
      <Helmet>
        <link rel="canonical" href="https://davidkistauri.now.sh/projects" />
      </Helmet>
      <SEO
        title="Проекты"
        description="Проекты Давида Кистаури. Назови любое слово и я сделаю о нем сайт."
        image="/img/preview.jpg"
      />
      <section className="main__sect--arts">
        {/* Displaying all projects according to limit */}
        {ProjectsList.map(({ node }) => (
          <article
            key={node.frontmatter.title}
            className="main__sect--arts__art main__sect--arts__art--work"
          >
            <Link to={node.fields.slug} className="main__sect--arts__art__link">
              <Img
                fluid={node.frontmatter.hero.childImageSharp.fluid}
                className="main__sect--arts__art__link__img"
              />
              <section className="main__sect--arts__art__link__sect">
                <h2>{node.frontmatter.title}</h2>
                <p className="main__sect--arts__art__link__sect__p">
                  {node.frontmatter.description}
                </p>
                <p className="main__sect--arts__art__link__sect__p post-links">
                  {/* Date of post written */}
                  <span
                    title={
                      format(node.frontmatter.date, "dddd, D MMMM YYYY", {
                        locale: ruLocale
                      })
                        .charAt(0)
                        .toUpperCase() +
                      format(node.frontmatter.date, "dddd, D MMMM YYYY", {
                        locale: ruLocale
                      }).slice(1)
                    }
                    className="post-links__span"
                  >
                    {(() => {
                      if (isToday(node.frontmatter.date)) {
                        return "сегодня";
                      } else if (isYesterday(node.frontmatter.date)) {
                        return "вчера";
                      } else if (isThisYear(node.frontmatter.date)) {
                        return format(node.frontmatter.date, "D MMMM", {
                          locale: ruLocale
                        });
                      } else {
                        return format(node.frontmatter.date, "D MMMM YYYY", {
                          locale: ruLocale
                        });
                      }
                    })()}
                  </span>
                </p>
              </section>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export default ProjectsList;

// Getting projects list
export const projectsListQuery = graphql`
  query projectsListQuery {
    Projects: allMarkdownRemark(
      filter: { frontmatter: { posttype: { eq: "project" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            description
            hero {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
