import React from 'react'

import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ReadingPage = () => {
  return (
    <Layout pageClass="portfolio" title="Давид Кистаури. Читаю">
      <Helmet>
        <link rel="canonical" href="https://davidkistauri.ru/reading" />
      </Helmet>
      <SEO
        title="Читаю"
        description="Прочтенные книги Давида Кистаури."
        image="/img/preview.jpg"
      />
      <p>
        Читаю книги — чаще нон-фикшн — и пишу короткие обзоры в телеграм.
        <br />
        <em>Обновлено 27 февраля 2020.</em>
      </p>
      <h3>2020</h3>
      <ul>
        <li>
          <a href="https://t.me/dtroode_channel/556">
            Удовольствие от x
          </a>{' '}
          — <i>Стивен Строгац</i>
        </li>
        <li className="li--favourite">
          <a href="https://t.me/dtroode_channel/533">
            Rework. Бизнес без предрассудков
          </a>{' '}
          — <i>Джейсон Фрид</i>
        </li>
        <li className="li--favourite">
          <a href="https://t.me/dtroode_channel/516">
            Как устроена экономика
          </a>{' '}
          — <i>Ха-Джун Чанг</i>
        </li>
      </ul>
      <h3>2019</h3>
      <ul>
        <li>
          <a href="https://t.me/dtroode_channel/475">Чистая архитектура</a> —{' '}
          <i>Роберт Мартин</i>
        </li>
        <li>
          <a href="https://t.me/dtroode_channel/462">Укус Питона</a> —{' '}
          <i>К. Сваруп</i>
        </li>
        <li className="li--favourite">
          <a href="https://t.me/dtroode_channel/524">Грокаем алгоритмы</a> —{' '}
          <i>Адитья Бхаргава</i>
        </li>
      </ul>
      <h3>2018</h3>
      <ul>
        <li className="li--favourite">
          Белый клык — <i>Джек Лондон</i>
        </li>
        <li className="li--favourite">
          Призрак в сети. Мемуары величайшего хакера — <i>Кевин Митник</i>
        </li>
        <li>
          Номер 1 — <i>Игорь Манн</i>
        </li>
        <li>
          Поп-арт маркетинг — <i>Лилия Нилова</i>
        </li>
        <li className="li--favourite">
          Первому игроку приготовиться — <i>Эрнест Клайн</i>
        </li>
        <li>
          Школа бизнеса — <i>Роберт Кийосаки</i>
        </li>
        <li>
          Проактивное мышление — <i>Джон Миллер</i>
        </li>
        <li className="li--favourite">
          Когда дыхание растворяется в воздухе — <i>Пол Каланити</i>
        </li>
        <li>
          Психология вредных привычек — <i>Ричард О’Коннор</i>
        </li>
        <li className="li--favourite">
          Сделано в Америке — <i>Сэм Уолтон</i>
        </li>
        <li>
          Сила воли — <i>Келли Макгонигал</i>
        </li>
        <li>
          Minne, или Память по-шведски — <i>Идриз Зогай</i>
        </li>
        <li>
          Ценные решения — <i>Роман Тарасенко</i>
        </li>
        <li>
          Кроссфит мозга — <i>Игорь Намаконов</i>
        </li>
        <li>
          90 дней — <i>Игорь Манн</i>
        </li>
        <li>
          Новый год прокрастинатора — <i>Эс Джей Скотт</i>
        </li>
      </ul>
      <h3>2017</h3>
      <ul>
        <li className="li--favourite">
          Заправляй кровать — <i>Уильям Макрейвен</i>
        </li>
        <li className="li--favourite">
          Как разговаривать с кем угодно, когда угодно, где угодно —{' '}
          <i>Ларри Кинг</i>
        </li>
        <li>
          Жизнь по помидору — <i>Кэтрин Грейс</i>
        </li>
        <li>
          Почему никто не рассказал мне это в 20 — <i>Тина Силиг</i>
        </li>
        <li className="li--favourite">
          Информационный удар — <i>Гарри Вайнерчук</i>
        </li>
        <li className="li--favourite">
          Точки контакта — <i>Игорь Манн</i>
        </li>
        <li>
          Квадрант денежного потока — <i>Роберт Кийосаки</i>
        </li>
        <li className="li--favourite">
          Богатый папа, бедный папа — <i>Роберт Кийосаки</i>
        </li>
      </ul>
    </Layout>
  )
}

export default ReadingPage
