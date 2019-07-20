import React from "react";
import "../styles/media.scss";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageClass="portfolio" title="Давид Кистаури >_<">
      <Helmet>
        <link rel="canonical" href="https://dtroode.netlify.com/" />
      </Helmet>
      <SEO
        title=">_<"
        description="Сайт Давида Кистаури. Назови любое слово и я сделаю о нем сайт."
        image="/img/preview.jpg"
      />
      <section className="main__content">
        <h2>Обо мне</h2>
        <ol>
          <li>
            Разрабатываю адаптивные сайт, лэндинги и веб-приложения, оптимизирую
            их — сайты грузятся быстро. Пишу на HTML, CSS, JS, React, Gatsby.
            Учу Next.js, Svelte. Вкладываю в опен-сорс. Пишу статьи в блог и на
            английском на Дев о полезных вещах для разработчиков и тех, кто
            хочет им стать.
          </li>
          <li>
            Развиваю качественную разработку, хочу сделать ее проще для новичков
            и опытных программистов: from dev to dev.
          </li>
          <li>
            Работаю только удаленно. Принимаю полный план с предоплатой и
            материалом, чтоб сразу начать работу.
          </li>
        </ol>
        <hr />
      </section>
      <section className="main__content">
        <h2>О медиа</h2>
        <section>
          <ol>
            <li>
              <a href="https://twitter.com/newsycombinator/status/1142764827959595008?s=20">
                Моя статья о Файерфоксе.
              </a>
            </li>
          </ol>
        </section>
        <hr />
      </section>
      <section className="main__content">
        <h2>О работах</h2>
        <section>
          <ol>
            <li>
              <a href="https://cyxym.cf">Сайт CYXYM</a>
              <br />
              Придумал проект. Задизайнил сайт. Написал сайт. Написал текст о
              местах и людях.
            </li>
            <li>
              <a href="https://secondschool.gq">Сайт второй школы</a>
              <br />
              Придумал проект. Задизайнил сайт. Написал сайт. Отредактировал
              текст об истории. Написал остальной текст.
            </li>
            <li>
              <a href="https://constantvalues.tk">Сайт Постоянные Величины</a>
              <br />
              Придумал проект. Задизайнил сайт. Написал сайт. Заполнил
              контентом.
            </li>
            <li>
              <a href="https://masterbuket.com">Мастер Букет</a>
              <br />
              Задизайнил бренд. Задизайнил сайт. Написал сайт. Поддерживаю сайт.
              Работал с соц. сетями.
            </li>
            <li>
              <a href="https://dtroode.netlify.com/blog">Блог</a>
              <br />
              Сделал себе блог: задизайнил, написал, продолжаю писать.
            </li>
          </ol>
        </section>
        <hr />
      </section>
      <section className="main__content">
        <h2>Об остальном</h2>
        <section>
          <ol>
            <li>
              <a href="https://t.me/s/dtroodechannel">
                Телеграм канал о технологиях и дизайне
              </a>
            </li>
          </ol>
        </section>
      </section>
    </Layout>
  );
};

export default IndexPage;
