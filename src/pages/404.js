import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import "../styles/article.scss";
import "../styles/media.scss";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ErrorPage = () => {
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
      <section className="main__sect--arts">
        <article className="main__sect--arts__art">
          <Link to="/" className="main__sect--arts__art__link">
            <section className="main__sect--arts__art__link__sect">
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
        <article className="main__sect--arts__art">
          <a
            href={`mailto:davidkis113@gmail.com?subject=Я нашел ошибку на сайте`}
            className="main__sect--arts__art__link"
          >
            <section className="main__sect--arts__art__link__sect">
              <h2>Сообщить об ошибке</h2>
              <p>А еще можно сообщить автору об ошибке нажав на этот блок.</p>
            </section>
          </a>
        </article>
      </section>
    </Layout>
  );
};

export default ErrorPage;
