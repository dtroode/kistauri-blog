import React from "react"

import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"

import articleStyles from "../styles/article.module.scss"
import "../styles/media.scss"

const ErrorPage = () => {
  return (
    <Layout pageClass="error" title="404. Страница не найдена">
      <Helmet>
        <link rel="canonical" href="https://davidkistauri.ru/404" />
      </Helmet>
      <SEO
        title="404. Страница не найдена"
        description="404. Сайт не получился."
        image="/img/preview.jpg"
      />
      <section className="main__sect--arts">
        <article className={`${articleStyles.art} ${articleStyles.error}`}>
          <Link
            to="/"
            className={`${articleStyles.art__link} ${articleStyles.error__link}`}
          >
            <section className={articleStyles.art__link__sect}>
              <h2>Ты столкнулся с ошибкой</h2>
              <p className={articleStyles.error__link__sect__p}>
                Что произошло: возможно, ты ошибся ссылкой или перешел по
                удаленной странице.
                <br />
                Как исправить: можно спокойно нажать прям сюда и забыть об этом.
              </p>
            </section>
          </Link>
        </article>
        <article className={`${articleStyles.art} ${articleStyles.error}`}>
          <a
            href={`mailto:davidkis113@gmail.com?subject=Я нашел ошибку на сайте`}
            className={`${articleStyles.art__link} ${articleStyles.error__link}`}
          >
            <section className={articleStyles.art__link__sect}>
              <h2>Сообщить об ошибке</h2>
              <p className={articleStyles.error__link__sect__p}>
                А еще можно сообщить автору об ошибке нажав на этот блок.
              </p>
            </section>
          </a>
        </article>
      </section>
    </Layout>
  )
}

export default ErrorPage
