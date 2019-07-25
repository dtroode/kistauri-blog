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
            Разрабатываю адаптивные сайты, лэндинги и веб-приложения,
            оптимизирую их — сайты грузятся быстро. Пишу на HTML, CSS, JS,
            React, Gatsby. Учу Next.js, Svelte. Вкладываю в опен-сорс. Пишу
            статьи в блог и на английском на Дев о полезных вещах для
            разработчиков и тех, кто хочет им стать.
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
      </section>
      <hr />
      <section className="main__content">
        <h2>О медиа</h2>
        <ol>
          <li>
            <a href="https://twitter.com/newsycombinator/status/1142764827959595008?s=20">
              Моя статья о Файерфоксе
            </a>
          </li>
        </ol>
      </section>
      <hr />
      <section className="main__content">
        <h2>О работах</h2>
        <ol>
          <li>
            <a href="https://dtroode.netlify.com/blog">Блог</a> — 2019
            <ul>
              <li>
                <strong>Как никто</strong>
                <br />
                Сделал себе блог: задизайнил, написал, продолжаю писать.
              </li>
            </ul>
          </li>
          <hr />
          <li>
            <a href="https://masterbuket.com">Мастер Букет</a> — 2018
            <ul>
              <li>
                <strong>Как руководитель</strong>
                <br />
                Спланировал проект.
              </li>
              <li>
                <strong>Как разработчик</strong>
                <br />
                Написал все страницы сайта, выложил сайт на хостинг,
                администрирую сайт.
              </li>
              <li>
                <strong>Как дизайнер</strong>
                <br />
                Придумал дизайн бренда, придумал дизайн сайта.
              </li>
              <li>
                <strong>Как редактор</strong>
                <br />
                Написал текст, занимался соц. сетями.
              </li>
            </ul>
          </li>
          <hr />
          <li>
            <a href="https://constantvalues.tk">Сайт Постоянные Величины</a> —
            2018
            <ul>
              <li>
                <strong>Как руководитель</strong>
                <br />
                Придумал проект, спланировал проект.
              </li>
              <li>
                <strong>Как разработчик</strong>
                <br />
                Написал все страницы сайта, выложил сайт на хостинг,
                администрирую сайт.
              </li>
              <li>
                <strong>Как дизайнер</strong>
                <br />
                Придумал дизайн.
              </li>
              <li>
                <strong>Как редактор</strong>
                <br />
                Написал текст.
              </li>
            </ul>
          </li>
          <hr />
          <li>
            <a href="https://secondschool.gq">Сайт второй школы</a> — 2018
            <ul>
              <li>
                <strong>Как руководитель</strong>
                <br />
                Придумал проект, спланировал проект, собрал весь материал.
              </li>
              <li>
                <strong>Как разработчик</strong>
                <br />
                Написал все страницы сайта, выложил сайт на хостинг,
                администрировал сайт.
              </li>
              <li>
                <strong>Как дизайнер</strong>
                <br />
                Придумал редизайн.
              </li>
              <li>
                <strong>Как редактор</strong>
                <br />
                Отредактировал текст об истории, написал остальной текст.
              </li>
            </ul>
          </li>
          <hr />
          <li>
            <a href="https://cyxym.cf">Сайт CYXYM</a> — 2018
            <ul>
              <li>
                <strong>Как руководитель</strong>
                <br />
                Придумал проект, спланировал проект, руководил командой.
              </li>
              <li>
                <strong>Как разработчик</strong>
                <br />
                Написал все страницы сайта, выложил сайт на хостинг,
                администрирую сайт.
              </li>
              <li>
                <strong>Как дизайнер</strong>
                <br />
                Придумал дизайн.
              </li>
              <li>
                <strong>Как редактор</strong>
                <br />
                Написал текст о местах и людях, отредактировал текст об истории.
              </li>
            </ul>
          </li>
        </ol>
      </section>
      <hr />
      <section className="main__content">
        <h2>Об остальном</h2>
        <ol>
          <li>
            <a href="https://t.me/s/dtroode_channel">
              Телеграм канал о технологиях и дизайне
            </a>
          </li>
        </ol>
      </section>
    </Layout>
  );
};

export default IndexPage;
