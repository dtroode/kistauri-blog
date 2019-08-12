import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import "../styles/articles.scss";
import "../styles/media.scss";
import Layout from "../components/layout";
import kebabCase from "lodash/kebabCase";
import SEO from "../components/seo";

const ErrorPage = props => {
  const PostsList = props.data.LatestPosts.edges;
  const date = new Date();
  return (
    <Layout pageClass="error" title="404. Страница не найдена">
      <Helmet>
        <link rel="canonical" href="https://davidkistauri.now.sh/404" />
      </Helmet>
      <SEO
        title="404. Страница не найдена"
        description="404. Сайт не получился."
        image="/img/preview.jpg"
      />
      <section className="main__arts">
        <article key="main__arts__inf">
          <Link to="/">
            <section className="art__cont">
              <h2>Ты столкнулся с ошибкой</h2>
              <p>
                Что произошло: возможно, ты ошибся ссылкой или перешел по
                удаленной странице.
                <br />
                Как исправить: можно спокойно нажать прям сюда и забыть об этом.
              </p>
            </section>
          </Link>
        </article>
        <article key="main__arts__portfolio">
          <a
            href={`mailto:davidkis113@gmail.com?subject=Я нашел ошибку на сайте`}
          >
            <section className="art__cont">
              <h2>Сообщить об ошибке</h2>
              <p>А еще можно сообщить автору об ошибке нажав на этот блок.</p>
            </section>
          </a>
        </article>
        <article key="main__arts__portfolio">
          <Link to="/">
            <section className="art__cont">
              <h2>Портфолио</h2>
              <p>
                Чтоб сбежать отсюда, можно перейти в портфолио.
                <br />
                Главное: сделать вид, что ничего не было и тихо сидеть
              </p>
            </section>
          </Link>
        </article>
        <article key="main__arts__blog">
          <Link to="/blog">
            <section className="art__cont">
              <h2>Блог</h2>
              <p>
                Или можно перейти в блог, чтоб почитать мои статьи.
                <br /> Они доступны, в отличие от этой страницы.
                <br />
                Вот список последних статей →
              </p>
            </section>
          </Link>
        </article>
        {/* Two latest posts */}
        {PostsList.map(({ node }) => (
          <article key={node.frontmatter.title}>
            <Link to={node.fields.slug}>
              <section className="art__cont">
                <h2>{node.frontmatter.title}</h2>
                <p>{node.frontmatter.description}</p>
                <p className="date-tags">
                  {/* Date of post written */}
                  <span title={node.frontmatter.date}>
                    {(() => {
                      switch (true) {
                        case node.frontmatter.date.endsWith(date.getFullYear()):
                          return node.frontmatter.date.slice(
                            0,
                            node.frontmatter.date.length - 5
                          );
                        default:
                          return node.frontmatter.date;
                      }
                    })()}
                  </span>
                  {/* All tags for this post */}
                  {node.frontmatter.tags.map(tag => (
                    <Link to={`/blog/tags/${kebabCase(tag)}`}>{tag}</Link>
                  ))}
                </p>
              </section>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export default ErrorPage;

export const listQuery = graphql`
  query {
    LatestPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "D MMMM YYYY", locale: "ru")
            description
            categories
            tags
          }
        }
      }
    }
  }
`;
