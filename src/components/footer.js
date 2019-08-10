import { Link } from "gatsby";
import React from "react";

// Component for using Client Side Routing with classname
const ListLink = props => (
  <Link className={props.className} to={props.to}>
    {props.children}
  </Link>
);

const Footer = props => {
  const title = props.title;
  // Link of page
  const link = `https://kistauri.dtroode.now.sh${props.link}`;
  // Variable with share content. Uses only for posts
  let share = "";

  // If page is post writing links to `share` variable
  if (props.pageClass === "post") {
    share = (
      <>
        <h2>О ссылке</h2>
        <nav className="foot__share">
          <a
            className="a--secondary tw-share-button"
            href={`https://twitter.com/intent/tweet?text=${title} by @dtroode&url=${link}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.769 50.501">
              <path d="M62.77 5.992c-2.283 1.141-4.85 1.712-7.418 1.997 2.568-1.712 4.565-3.994 5.706-7.133-2.568 1.427-5.136 2.568-8.274 3.138C50.501 1.426 47.078 0 43.369 0A12.785 12.785 0 0 0 30.53 12.839c0 1.141 0 1.997.285 2.853-10.557-.571-19.972-5.706-26.534-13.41C3.14 4.279 2.569 6.276 2.569 8.844c0 4.565 2.283 8.274 5.706 10.557a10.29 10.29 0 0 1-5.706-1.712v.285c0 6.277 4.28 11.413 10.271 12.554-1.141.285-2.283.571-3.424.571-.856 0-1.712 0-2.283-.285 1.712 5.136 6.277 8.845 11.983 8.845-4.28 3.424-9.986 5.421-15.978 5.421-1.141 0-1.997 0-3.138-.285 5.706 3.709 12.269 5.706 19.687 5.706 23.681 0 36.52-19.401 36.52-36.52v-1.712c2.854-1.427 4.851-3.709 6.563-6.277z" />
            </svg>
            Твитнуть
          </a>
          <a
            className="a--secondary facebook-share-button"
            href={`https://www.facebook.com/sharer/sharer.php?u=${link}&amp;src=sdkpreparse`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.669 65.701">
              <path d="M10.108 3.384C12.675.945 16.309.116 19.753.02c3.635-.032 7.27-.016 10.904-.016.016 3.842.016 7.668 0 11.51h-7.046c-1.483-.096-3.013 1.036-3.284 2.519-.032 2.567-.016 5.133-.016 7.7 3.443.016 6.887 0 10.33.016-.255 3.714-.717 7.413-1.259 11.08-3.045.032-6.09 0-9.135.016-.032 10.952.016 21.888-.016 32.841-4.528.016-9.039-.016-13.567.016-.08-10.952 0-21.904-.048-32.857-2.2-.016-4.416.016-6.616-.016.016-3.683 0-7.365 0-11.032 2.2-.032 4.416 0 6.616-.016.064-3.571-.064-7.158.064-10.729.24-2.853 1.308-5.707 3.428-7.668z" />
            </svg>
            Поделиться
          </a>
          <a
            className="a--secondary telegram-share-button"
            href={`https://telegram.me/share/url?url=${link}&text=${title} | @dtroode`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.918 54.832">
              <path d="M61.889.103L.933 23.34c-1.228.477-1.245 2.384-.047 2.931L16.5 32.675l5.815 18.34a1.488 1.488 0 0 0 2.372.639l8.931-8.311 16.979 11.261a1.488 1.488 0 0 0 2.248-.965l11.04-51.852c.236-1.154-.899-2.11-1.996-1.684zM25.183 36.148l-.992 9.428-4.714-14.513L52.722 9.231 25.183 36.148z" />
            </svg>
            Отправить
          </a>
        </nav>
        <hr />
      </>
    );
  }

  return (
    <footer className={`foot--${props.pageClass}`}>
      <section>
        {/*
        Passing `share` variable.
        If page is post, variable contains social media share links.
        If not, variable is empty.
       */}
        {share}
        <h2>О контактах</h2>
        {/* Nav for links to social media */}
        <nav className="foot__cont">
          <a className="a--primary" href="https://twitter.com/dtroode">
            Твиттер
          </a>
          <a className="a--primary" href="https://t.me/dtroode">
            Телеграм
          </a>
          <a className="a--primary" href="https://dev.to/dtroode">
            Дев
          </a>
          <a className="a--primary" href="https://github.com/dtroode">
            Гитхаб
          </a>
        </nav>
        {/* Nav for technical links like RSS feed */}
        <nav className="foot__cont foot__cont--site-links">
          <ListLink className="a--primary" to="/blog/rss/">
            РСС
          </ListLink>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
