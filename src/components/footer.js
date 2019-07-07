import { Link } from "gatsby";
import React from "react";

const ListLink = props => (
  <Link to={props.to} className={props.className}>
    {props.children}
  </Link>
);

const Footer = props => {
  let share = "";
  if (props.pageClass === "post") {
    share = (
      <>
        <section className="foot__share">
          <h2>About Share</h2>
          <section className="foot__share__cont">
            <p>Like? Share it in social media</p>
            <nav>
              <a
                href={`https://twitter.com/intent/tweet?text=${document.title} by @dtroode&url=${window.location.href}`}
                className="twitter-share-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 62.769 50.501"
                >
                  <path d="M62.77 5.992c-2.283 1.141-4.85 1.712-7.418 1.997 2.568-1.712 4.565-3.994 5.706-7.133-2.568 1.427-5.136 2.568-8.274 3.138C50.501 1.426 47.078 0 43.369 0A12.785 12.785 0 0 0 30.53 12.839c0 1.141 0 1.997.285 2.853-10.557-.571-19.972-5.706-26.534-13.41C3.14 4.279 2.569 6.276 2.569 8.844c0 4.565 2.283 8.274 5.706 10.557a10.29 10.29 0 0 1-5.706-1.712v.285c0 6.277 4.28 11.413 10.271 12.554-1.141.285-2.283.571-3.424.571-.856 0-1.712 0-2.283-.285 1.712 5.136 6.277 8.845 11.983 8.845-4.28 3.424-9.986 5.421-15.978 5.421-1.141 0-1.997 0-3.138-.285 5.706 3.709 12.269 5.706 19.687 5.706 23.681 0 36.52-19.401 36.52-36.52v-1.712c2.854-1.427 4.851-3.709 6.563-6.277z" />
                </svg>
                Tweet
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&amp;src=sdkpreparse`}
                className="facebook-share-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30.669 65.701"
                >
                  <path d="M10.108 3.384C12.675.945 16.309.116 19.753.02c3.635-.032 7.27-.016 10.904-.016.016 3.842.016 7.668 0 11.51h-7.046c-1.483-.096-3.013 1.036-3.284 2.519-.032 2.567-.016 5.133-.016 7.7 3.443.016 6.887 0 10.33.016-.255 3.714-.717 7.413-1.259 11.08-3.045.032-6.09 0-9.135.016-.032 10.952.016 21.888-.016 32.841-4.528.016-9.039-.016-13.567.016-.08-10.952 0-21.904-.048-32.857-2.2-.016-4.416.016-6.616-.016.016-3.683 0-7.365 0-11.032 2.2-.032 4.416 0 6.616-.016.064-3.571-.064-7.158.064-10.729.24-2.853 1.308-5.707 3.428-7.668z" />
                </svg>
                Share
              </a>
              <a
                href={`https://telegram.me/share/url?url=${window.location.href}>&text=${document.title} by @dtroode`}
                className="telegram-share-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 63.918 54.832"
                >
                  <path d="M61.889.103L.933 23.34c-1.228.477-1.245 2.384-.047 2.931L16.5 32.675l5.815 18.34a1.488 1.488 0 0 0 2.372.639l8.931-8.311 16.979 11.261a1.488 1.488 0 0 0 2.248-.965l11.04-51.852c.236-1.154-.899-2.11-1.996-1.684zM25.183 36.148l-.992 9.428-4.714-14.513L52.722 9.231 25.183 36.148z" />
                </svg>
                Send
              </a>
            </nav>
          </section>
          <hr />
        </section>
      </>
    );
  }

  return (
    <footer className={`foot--${props.pageClass}`}>
      {share}
      <section className="foot__cont">
        <h2>About contacts</h2>
        <section className="foot__cont__cont">
          <p>
            You can find me in social media by username{" "}
            <span className="nickname">@dtroode</span>
          </p>
          <nav className="foot__cont__cont__nav foot__cont__cont__nav--page-links">
            <ListLink to="/">Portfolio</ListLink>
            <ListLink to="/blog">Blog</ListLink>
            <ListLink to="/rss.xml">RSS</ListLink>
            <ListLink to="/sitemap.xml">Sitemap</ListLink>
          </nav>
          <nav className="foot__cont__cont__nav foot__cont__cont__nav--other-links">
            <a href="https://github.com/dtroode">Github</a>
            <a href="https://twitter.com/dtroode">Twitter</a>
            <a href="https://t.me/dtroode">Telegram</a>
            <a href="https://t.me/dtroodechannel">TG channel</a>
          </nav>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
