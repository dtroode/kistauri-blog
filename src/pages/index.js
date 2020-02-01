import React from "react"

import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/media.scss"

const IndexPage = ({ data }) => {
  const PostsList = data.Posts.edges

  return (
    <Layout
      pageClass="portfolio"
      title="Давид Кистаури. Разработчик и веб-дизайнер"
    >
      <Helmet>
        <link rel="canonical" href="https://davidkistauri.ru/" />
      </Helmet>
      <SEO
        title=">_<"
        description="Сайт Давида Кистаури. Назови любое слово и я сделаю о нем сайт."
        image="/img/preview.jpg"
      />
      <section className="main__sect--content">
        <h2>Работаю</h2>
        <ol className="main__ol--arts" reversed>
          <li>
            <Link to="/blog">
              <strong>Блог</strong>
            </Link>{" "}
            — 2019
            <br />
            Сделал себе сайт портфолио-блог
            <ul>
              <li>
                <strong>Цель</strong>
                <br />
                Создание портфолио с информацией о себе и работах + блог,
                который выглядит как портфолио
              </li>
              <li>
                <strong>Причина</strong>
                <br />
                Привлечение читателей для разделения опыта и знакомства с
                другими разработчиками
              </li>
              <li>
                <strong>Целевая аудитория</strong>
                <br />
                Разработчики, дизайнеры, люди связанные со сферой технологий
              </li>
              <li>
                <strong>Как никто</strong>
                <br />
                Сделал себе блог: задизайнил, написал, продолжаю писать
              </li>
            </ul>
          </li>
          <li>
            <Link to="/projects/postvel-website">
              <strong>Сайт Пост Величины</strong>
            </Link>{" "}
            — 2018
            <br />
            Сделал сайт с таблицами по математике, физике и химии
            <ul>
              <li>
                <strong>Цель</strong>
                <br />
                Самообучение, создание страницы с доступной и красивой основной
                информацией
              </li>
              <li>
                <strong>Целевая аудитория</strong>
                <br />
                Школьники и студенты, которым надо быстро подсмотреть значения
                или подготовиться к контрольной работе
              </li>
              <li>
                <strong>Как руководитель</strong>
                <br />
                Придумал проект, спланировал проект
              </li>
              <li>
                <strong>Как разработчик</strong>
                <br />
                Написал все страницы сайта, выложил сайт на хостинг,
                администрирую сайт
              </li>
              <li>
                <strong>Как дизайнер</strong>
                <br />
                Придумал дизайн, придумал редизайн
              </li>
              <li>
                <strong>Как редактор</strong>
                <br />
                Написал текст
              </li>
            </ul>
          </li>
          <li>
            <Link to="/projects/masterbuket">
              <strong>Мастер Букет</strong>
            </Link>{" "}
            — 2018
            <br />
            Сделал сайт и брендинг цветочной студии Мастер Букет
            <ul>
              <li>
                <strong>Цель</strong>
                <br />
                Привлечение клиентов через социальные сети, создание каталога с
                букетами и информацией о студии
              </li>
              <li>
                <strong>Как руководитель</strong>
                <br />
                Спланировал проект
              </li>
              <li>
                <strong>Как разработчик</strong>
                <br />
                Написал все страницы сайта, выложил сайт на хостинг,
                администрирую сайт
              </li>
              <li>
                <strong>Как дизайнер</strong>
                <br />
                Придумал дизайн бренда, придумал дизайн сайта,{" "}
                <a href="https://davidkistauri.ru/blog/all/masterbuket-2/">
                  придумал редизайн сайта
                </a>
              </li>
              <li>
                <strong>Как редактор</strong>
                <br />
                Написал текст, занимался соц. сетями
              </li>
            </ul>
          </li>
          <li>
            <Link to="/projects/secondschool-website">
              <strong>Сайт школы им. А. С. Пушкина</strong>
            </Link>{" "}
            — 2018
            <br />
            Сделал редизайн сайта школы с нуля по информации со старого сайта
            <ul>
              <li>
                <strong>Цель</strong>
                <br />
                Создание красивого сайта, который сочетается с внешним видом
                школы, презентует школу, который выглядит лучше, чем у
                конкурентов
              </li>
              <li>
                <strong>Целевая аудитория</strong>
                <br />
                Ученики, которые хотят найти информацию о школе: расписание,
                билеты, история, родители, которые хотят выбрать школу для
                ребенка
              </li>
              <li>
                <strong>Как руководитель</strong>
                <br />
                Придумал проект, спланировал проект, собрал весь материал
              </li>
              <li>
                <strong>Как разработчик</strong>
                <br />
                Написал все страницы сайта, выложил сайт на хостинг,
                администрировал сайт
              </li>
              <li>
                <strong>Как дизайнер</strong>
                <br />
                Придумал редизайн
              </li>
              <li>
                <strong>Как редактор</strong>
                <br />
                Отредактировал текст об истории, написал остальной текст
              </li>
            </ul>
          </li>
          <li>
            <Link to="/projects/cyxym-website">
              <strong>Сайт города Сухум</strong>
            </Link>{" "}
            — 2018
            <br />
            Сделал сайт города Сухум: собрал контент, придумал дизайн, написал
            код
            <ul>
              <li>
                <strong>Цель</strong>
                <br />
                Создание простого, быстрого и минималистичного сайта, где
                главное — контент. Привлечение туристов и рассказ им об истории,
                местах и культуре города
              </li>
              <li>
                <strong>Целевая аудитория</strong>
                <br />
                Туристы, которые не знают, куда сперва пойти, где поесть, где
                насладиться красотой, с кем познакомиться
              </li>
              <li>
                <strong>Как руководитель</strong>
                <br />
                Придумал проект, спланировал проект, руководил командой, собрал
                материал
              </li>
              <li>
                <strong>Как разработчик</strong>
                <br />
                Написал все страницы сайта, выложил сайт на хостинг,
                администрировал сайт
              </li>
              <li>
                <strong>Как дизайнер</strong>
                <br />
                Придумал дизайн
              </li>
              <li>
                <strong>Как редактор</strong>
                <br />
                Написал текст к разделам о местах и культуре, отредактировал
                текст об истории
              </li>
            </ul>
          </li>
        </ol>
      </section>
      <hr />
      <section className="main__sect--content">
        <h2>Пишу</h2>
        <ul>
          {PostsList.map(({ node }) => (
            <li key={node.frontmatter.title}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </section>
      <hr />
      <section className="main__sect--content">
        <h2>Читаю</h2>
        <p>
          Читаю книги — чаще нон-фикшн — и пишу короткие обзоры в телеграм.
          <br />
          <em>Обновлено 29 января 2020.</em>
        </p>
        <h3>2020</h3>
        <ul>
          <li>
            Rework. Бизнес без предрассудков — <em>Джейсон Фрид</em> ★
          </li>
          <li>
            <a href="https://t.me/dtroode_channel/516">
              Как устроена экономика
            </a>{" "}
            — <em>Ха-Джун Чанг</em> ★
          </li>
        </ul>
        <h3>2019</h3>
        <ul>
          <li>
            <a href="https://t.me/dtroode_channel/475">Чистая архитектура</a> —{" "}
            <em>Роберт Мартин</em>
          </li>
          <li>
            <a href="https://t.me/dtroode_channel/462">Укус Питона</a> —{" "}
            <em>К. Сваруп</em>
          </li>
          <li>
            <a href="https://t.me/dtroode_channel/524">Грокаем алгоритмы</a> —{" "}
            <em>Адитья Бхаргава</em> ★
          </li>
        </ul>
        <h3>2018</h3>
        <ul>
          <li>
            Белый клык — <em>Джек Лондон</em> ★
          </li>
          <li>
            Призрак в сети. Мемуары величайшего хакера — <em>Кевин Митник</em> ★
          </li>
          <li>
            Номер 1 — <em>Игорь Манн</em>
          </li>
          <li>
            Поп-арт маркетинг — <em>Лилия Нилова</em>
          </li>
          <li>
            Первому игроку приготовиться — <em>Эрнест Клайн</em> ★
          </li>
          <li>
            Школа бизнеса — <em>Роберт Кийосаки</em>
          </li>
          <li>
            Проактивное мышление — <em>Джон Миллер</em>
          </li>
          <li>
            Когда дыхание растворяется в воздухе — <em>Пол Каланити</em> ★
          </li>
          <li>
            Психология вредных привычек — <em>Ричард О'Коннор</em>
          </li>
          <li>
            Сделано в Америке — <em>Сэм Уолтон</em> ★
          </li>
          <li>
            Сила воли — <em>Келли Макгонигал</em>
          </li>
          <li>
            Minne, или Память по-шведски — <em>Идриз Зогай</em>
          </li>
          <li>
            Ценные решения — <em>Роман Тарасенко</em>
          </li>
          <li>
            Кроссфит мозга — <em>Игорь Намаконов</em>
          </li>
          <li>
            90 дней — <em>Игорь Манн</em>
          </li>
          <li>
            Новый год прокрастинатора — <em>Эс Джей Скотт</em>
          </li>
        </ul>
        <h3>2017</h3>
        <ul>
          <li>
            Заправляй кровать — <em>Уильям Макрейвен</em> ★
          </li>
          <li>
            Как разговаривать с кем угодно, когда угодно, где угодно —{" "}
            <em>Ларри Кинг</em> ★
          </li>
          <li>
            Жизнь по помидору — <em>Кэтрин Грейс</em>
          </li>
          <li>
            Почему никто не рассказал мне это в 20 — <em>Тина Силиг</em>
          </li>
          <li>
            Информационный удар — <em>Гарри Вайнерчук</em> ★
          </li>
          <li>
            Точки контакта — <em>Игорь Манн</em> ★
          </li>
          <li>
            Квадрант денежного потока — <em>Роберт Кийосаки</em>
          </li>
          <li>
            Богатый папа, бедный папа — <em>Роберт Кийосаки</em> ★
          </li>
        </ul>
      </section>
      <hr />
      <section className="main__sect--content">
        <h2>Еще</h2>
        <ul>
          <li>Сейчас большую часть времени учу математику</li>
          <li>По дороге куда-нибудь читаю книги</li>
          <li>
            В свободное время забываю про веб и учу компьютерные науки и Python
          </li>
          <li>Иногда пишу в блог о разработке и веб-дизайне</li>
          <li>
            Когда нахожу что-нибудь интересное, пишу в{" "}
            <a href="https://t.me/s/dtroode_channel">телеграм канал</a>
          </li>
          <li>
            А еще не забываю про{" "}
            <a href="https://news.ycombinator.com/item?id=20254420">
              «Why you need to give Firefox a chance»
            </a>{" "}
            на Хакерньюз
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export default IndexPage

export const blogListForPortfolio = graphql`
  query blogListForPortfolio {
    Posts: allMarkdownRemark(
      filter: { frontmatter: { posttype: { ne: "project" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 8
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
