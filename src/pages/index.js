import React from 'react'
import PropTypes from 'prop-types'

import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/media.scss'

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
            <Link to="/projects/sukhum-road-website">
              <strong>Маршрутки Сухума</strong>
            </Link>{' '}
            — 2020
            <br/>
            Сделал сайт-список маршруток Сухума с характеристикой
            <ul>
              <li>
                <strong>Цель</strong>
                <br/>
                Собрать все машрутки с характеристикой, чтоб описать транспортную систему города и анализировать список
              </li>
              <li>
                <strong>Целевая аудитория</strong>
                <br/>
                Кто угодно в городе: мальчики, девочки, парни, девушки, дедушки, бабушки
              </li>
              <li>
                <strong>Как контент-менеджер</strong>
                <br/>
                Собирал несколько месяцев контент и структуризировал, продолжаю наполнять
              </li>
              <li>
                <strong>Как разработчик</strong>
                <br/>
                Перевел таблицу из JSON в контент на сайте
              </li>
              <li>
                <strong>Как дизайнер</strong>
                <br/>
                Придумал дизайн
              </li>
            </ul>
          </li>
          <li>
            <Link to="/blog">
              <strong>Блог</strong>
            </Link>{' '}
            — 2019
            <br />
            Сделал себе сайт портфолио-блог
            <ul>
              <li>
                <strong>Цель</strong>
                <br />
                Создание портфолио с информацией о себе и работах + блог,
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
            </Link>{' '}
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
            </Link>{' '}
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
                Придумал дизайн бренда, придумал дизайн сайта,{' '}
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
            </Link>{' '}
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
            </Link>{' '}
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
        <h2>Веду блог</h2>
        <ul>
          {PostsList.map(({ node }) => (
            <li key={node.frontmatter.title}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </li>
          ))}
          <li>
            <a href="https://news.ycombinator.com/item?id=20254420">
              «Why you need to give Firefox a chance»
            </a>{' '}
            — <i>Hackernews</i>
          </li>
        </ul>
      </section>
      <hr />
      <section className="main__sect--content">
        <h2>Еще</h2>
        <ul>
          <li>
            HTML, CSS, JavaScript, Pug, SASS, SugarSS, React, Gatsby, GraphQL,
            Git.
          </li><li>
            Учу: Svelte, Sapper, NextJS, а еще математику. По дороге куда-нибудь{' '}
            <Link to="/reading">читаю</Link> книги.
          </li><li>
            В свободное время забываю про веб и учу компьютерные науки и
            Python.
          </li><li>
            Когда нахожу что-нибудь интересное, пишу в{' '}
            <a href="https://t.me/s/dtroode_channel">телеграм канал</a>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object
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
