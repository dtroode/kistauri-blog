import React from "react";

import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../styles/media.scss";

const IndexPage = () => {
  return (
    <Layout pageClass="portfolio" title="Давид Кистаури">
      <Helmet>
        <link rel="canonical" href="https://davidkistauri.ru/" />
      </Helmet>
      <SEO
        title=">_<"
        description="Сайт Давида Кистаури. Назови любое слово и я сделаю о нем сайт."
        image="/img/preview.jpg"
      />
      <section className="main__sect--content">
        <h2>Обо мне</h2>
        <ol>
          <li>
            Разрабатываю адаптивные сайты, лэндинги и веб-приложения,
            оптимизирую их — сайты грузятся быстро. Пишу на <span lang="en">HTML, CSS, JS,
            React, Gatsby</span>. Учу <span lang="en">Next.js, Svelte</span>. Вкладываю в опен сорс.
          </li>
          <li>
            Пишу текст{" "}
            <span style={{ opacity: "0.4" }}>
              с фактами и конкретикой без лишней мишуры:{" "}
            </span>
            клиенты запомнят.
          </li>
          <li>
            Пишу статьи на <a href="/blog">русском</a> и{" "}
            <a href="https://dev.to/dtroode">английском</a> о полезных вещах для
            дизайнеров, разработчиков и тех, кто новичок в веб-разработке.
          </li>
          <li>
            Развиваю качественную разработку, хочу сделать ее проще для новичков
            и опытных программистов: <span lang="en">from developer to developer</span>.
          </li>
          <li>
            Работаю только удаленно. Принимаю полный план с предоплатой и
            материалом, чтоб сразу начать работу.
          </li>
        </ol>
      </section>
      <hr />
      <section className="main__sect--content">
        <h2>О работах</h2>
        <ol className="main__ol--arts">
          <li>
            <Link to="/blog">
              <strong>Блог</strong>
            </Link>{" "}
            — 2019
            <br />
            Сделал себе сайт портфолио-блог.
            <ul>
              <li>
                <strong>Цель</strong>
                <br />
                Создание портфолио с информацией о себе и работах + блог,
                который выглядит как портфолио.
              </li>
              <li>
                <strong>Причина</strong>
                <br />
                Привлечение читателей для разделения опыта и знакомства с
                другими разработчиками.
              </li>
              <li>
                <strong>Целевая аудитория</strong>
                <br />
                Разработчики, дизайнеры, люди связанные со сферой технологий.
              </li>
              <li>
                <strong>Как никто</strong>
                <br />
                Сделал себе блог: задизайнил, написал, продолжаю писать.
              </li>
            </ul>
          </li>
          <li>
            <Link to="/projects/postvel-website">
              <strong>Сайт Пост Величины</strong>
            </Link>{" "}
            — 2018
            <br />
            Сделал сайт с таблицами по математике, физике и химии.
            <ul>
              <li>
                <strong>Цель</strong>
                <br />
                Самообучение, создание страницы с доступной и красивой основной
                информацией.
              </li>
              <li>
                <strong>Целевая аудитория</strong>
                <br />
                Школьники и студенты, которым надо быстро подсмотреть значения
                или подготовиться к контрольной работе.
              </li>
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
                Придумал дизайн, придумал редизайн.
              </li>
              <li>
                <strong>Как редактор</strong>
                <br />
                Написал текст.
              </li>
            </ul>
          </li>
          <li>
            <Link to="/projects/masterbuket">
              <strong>Мастер Букет</strong>
            </Link>{" "}
            — 2018
            <br />
            Сделал сайт и брендинг цветочной студии Мастер Букет.
            <ul>
              <li>
                <strong>Цель</strong>
                <br />
                Привлечение клиентов через социальные сети, создание каталога с
                букетами и информацией о студии.
              </li>
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
                Придумал дизайн бренда, придумал дизайн сайта,{" "}
                <a href="https://davidkistauri.ru/blog/all/masterbuket-2/">
                  придумал редизайн сайта.
                </a>
              </li>
              <li>
                <strong>Как редактор</strong>
                <br />
                Написал текст, занимался соц. сетями.
              </li>
            </ul>
          </li>
          <li>
            <Link to="/projects/secondschool-website">
              <strong>Сайт школы им. А. С. Пушкина</strong>
            </Link>{" "}
            — 2018
            <br />
            Сделал редизайн сайта школы с нуля по информации со старого сайта.
            <ul>
              <li>
                <strong>Цель</strong>
                <br />
                Создание красивого сайта, который сочетается с внешним видом
                школы, презентует школу, который выглядит лучше, чем у
                конкурентов.
              </li>
              <li>
                <strong>Целевая аудитория</strong>
                <br />
                Ученики, которые хотят найти информацию о школе: расписание,
                билеты, история, родители, которые хотят выбрать школу для
                ребенка.
              </li>
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

        </ol>
      </section>
      <hr />
      <section className="main__sect--content">
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
      <section className="main__sect--content">
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
