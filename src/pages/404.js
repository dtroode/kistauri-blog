import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import "../styles/articles.scss";
import "../styles/media.scss";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ErrorPage = props => {
  const PostsList = props.data.LatestPosts.edges;
  return (
    <Layout pageClass="error" title="404">
      <Helmet>
        <link rel="canonical" href="https://dtroode.netlify.com/404" />
      </Helmet>
      <SEO
        title="404"
        description="404. Сайт не получился."
        image="/img/preview.jpg"
      />
      <section className="main__arts">
        <article key="main__arts__inf">
          <Link to="/">
            <section className="art__cont">
              <h2 data-text="Ты столкнулся с ошибкой" className="glitch">
                Ты столкнулся с ошибкой
              </h2>
              <p
                data-text="Что произошло: возможно, ты ошибся ссылкой или перешел
                по удаленной странице. Но отсюда нет выхода."
                className="glitch"
              >
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
            to={`mailto:davidkis113@gmail.com?subject=Я нашел ошибку на сайте`}
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
        {PostsList.map(({ node }) => (
          <article key={node.frontmatter.title}>
            <Link to={node.fields.slug}>
              <section className="art__cont">
                <h2>{node.frontmatter.title}</h2>
                <p>
                  <span>{node.frontmatter.date}</span> •{" "}
                  <span>{node.timeToRead}</span> мин.
                </p>
                <p>{node.frontmatter.description}</p>
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
      limit: 3
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
          }
          timeToRead
        }
      }
    }
  }
`;
