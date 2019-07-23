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
            <br />
            <span>
              Сделал себе блог: задизайнил, написал, продолжаю писать.
            </span>
          </li>
          <hr />
          <li>
            <a href="https://masterbuket.com">Мастер Букет</a> — 2018
            <section className="section--table">
              <section>
                <strong>Как разработчик</strong>
                <span>Написал все страницы сайта</span>
                <span>Выложил сайт на хостинг</span>
                <span> Администрирую сайт</span>
              </section>
              <section>
                <strong>Как редактор</strong>
                <span>Написал текст</span>
                <span>Занимался соц. сетями</span>
              </section>
              <section>
                <strong>Как руководитель</strong>
                <span>Спланировал проект</span>
              </section>
              <section>
                <strong>Как дизайнер</strong>
                <span>Придумал дизайн бренда</span>
                <span>Придумал дизайн сайта</span>
              </section>
            </section>
          </li>
          <hr />
          <li>
            <a href="https://constantvalues.tk">Сайт Постоянные Величины</a> —
            2018
            <section className="section--table">
              <section>
                <strong>Как разработчик</strong>
                <span>Написал все страницы сайта</span>
                <span>Выложил сайт на хостинг</span>
                <span>Администрирую сайт</span>
              </section>
              <section>
                <strong>Как редактор</strong>
                <span>Написал текст</span>
              </section>
              <section>
                <strong>Как руководитель</strong>
                <span>Придумал проект</span>
                <span>Спланировал проект</span>
              </section>
              <section>
                <strong>Как дизайнер</strong>
                <span>Придумал дизайн</span>
              </section>
            </section>
          </li>
          <hr />
          <li>
            <a href="https://secondschool.gq">Сайт второй школы</a> — 2018
            <section className="section--table">
              <section>
                <strong>Как разработчик</strong>
                <span>Написал все страницы сайта</span>
                <span>Выложил сайт на хостинг</span>
                <span>Администрировал сайт</span>
              </section>
              <section>
                <strong>Как редактор</strong>
                <span>Отредактировал текст об истории</span>
                <span>Написал остальной текст</span>
              </section>
              <section>
                <strong>Как руководитель</strong>
                <span>Придумал проект</span>
                <span>Спланировал проект</span>
                <span>Собрал весь материал</span>
              </section>
              <section>
                <strong>Как дизайнер</strong>
                <span>Придумал редизайн</span>
              </section>
            </section>
          </li>
          <hr />
          <li>
            <a href="https://cyxym.cf">Сайт CYXYM</a> — 2018
            <section className="section--table">
              <section>
                <strong>Как разработчик</strong>
                <span>Написал все страницы сайта</span>
                <span>Выложил сайт на хостинг</span>
                <span>Администрирую сайт</span>
              </section>
              <section>
                <strong>Как редактор</strong>
                <span>Написал текст о местах и людях</span>
                <span>Отредактировал текст об истории</span>
              </section>
              <section>
                <strong>Как руководитель</strong>
                <span>Придумал проект</span>
                <span>Спланировал проект</span>
                <span>Руководил командой</span>
              </section>
              <section>
                <strong>Как дизайнер</strong>
                <span>Придумал дизайн</span>
              </section>
            </section>
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
