import React from "react";
import { Link } from "gatsby";
import "../styles/pages/blog.scss";
import "../styles/media/dark.scss"
import SEO from "../components/seo";

const ErrorPage = props => (
  <>
    <SEO title="404" description=">404<" image="/img/preview.jpg" />
    <section
      className="articles"
      style={{
        display: `block`,
        position: `absolute`,
        top: `50%`,
        right: `2.5rem`,
        left: `2.5rem`,
        margin: `auto`,
        transform: `translateY(-50%)`,
        maxWidth: `500px`
      }}
    >
      <article
        className="error"
        style={{ backgroundColor: `var(--accent-red)` }}
      >
        <Link to="/" className="page-link" style={{ paddingBottom: `100%` }}>
          <section className="page-content-container">
            <svg
              className="page-background"
              fill="none"
              viewBox="0 0 839 559"
              xmlns="https://www.w3.org/2000/svg"
            >
              <rect width="839" height="559" fill="#FF4757" />
              <g filter="url(#b)">
                <rect
                  x="136"
                  y="106"
                  width="576"
                  height="335"
                  rx="9"
                  fill="#2F3542"
                />
                <rect
                  x="138.5"
                  y="108.5"
                  width="571"
                  height="330"
                  rx="6.5"
                  stroke="#F1F2F6"
                  stroke-width="5"
                />
              </g>
              <g filter="url(#a)">
                <rect
                  transform="rotate(-45 211 378.18)"
                  x="211"
                  y="378.18"
                  width="448.56"
                  height="154.44"
                  rx="9"
                  fill="#F1F2F6"
                />
                <rect
                  transform="rotate(-45 214.54 378.18)"
                  x="214.54"
                  y="378.18"
                  width="443.56"
                  height="149.44"
                  rx="6.5"
                  stroke="#2F3542"
                  stroke-width="5"
                />
              </g>
              <path
                d="m358.9 381.1l-10.361-10.36-14.948-66.905 16.468-16.468 40.744 40.745 7.717-7.718 10.543 10.543-7.717 7.718 10.938 10.938-12.579 12.578-10.938-10.938-29.867 29.867zm19.567-40.653l-26.403-26.403-0.486 0.486 9.54 42.294 0.486 0.486 16.863-16.863zm73.498-27.801c-5.246 5.205-11.029 8.416-17.349 9.631-6.299 1.195-12.882 0.385-19.749-2.43-6.846-2.836-13.662-7.667-20.448-14.493-10.168-10.209-15.809-20.327-16.923-30.353-1.115-10.067 2.228-19 10.026-26.799 5.206-5.205 10.938-8.426 17.197-9.662 6.279-1.255 12.822-0.506 19.628 2.249 6.786 2.734 13.561 7.505 20.326 14.31 10.23 10.27 15.962 20.479 17.197 30.627 1.216 10.128-2.086 19.101-9.905 26.92zm-10.907-10.908c3.565-3.565 4.618-8.203 3.16-13.916-1.459-5.712-5.783-12.143-12.974-19.293-7.069-7.069-13.44-11.313-19.111-12.731-5.672-1.418-10.28-0.354-13.825 3.191-3.545 3.544-4.608 8.152-3.19 13.824s5.651 12.052 12.7 19.142c7.15 7.19 13.582 11.515 19.294 12.973 5.732 1.439 10.381 0.375 13.946-3.19zm29.602-32.397l-10.361-10.361-14.949-66.904 16.468-16.468 40.744 40.744 7.718-7.717 10.543 10.543-7.718 7.717 10.938 10.938-12.578 12.579-10.939-10.938-29.866 29.867zm19.566-40.653l-26.403-26.403-0.486 0.486 9.541 42.294 0.486 0.486 16.862-16.863z"
                fill="#2F3542"
              />
              <defs>
                <filter
                  id="b"
                  x="114"
                  y="84"
                  width="620"
                  height="379"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="11" />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
                <filter
                  id="a"
                  x="189"
                  y="39"
                  width="470.38"
                  height="470.38"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="11" />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <section className="page-content" style={{ position: `absolute` }}>
              <h2>Don't worry. Just an ẸЯЯ0Я</h2>
              <p>Go back by tapping here</p>
            </section>
          </section>
        </Link>
      </article>
    </section>
  </>
);

export default ErrorPage;
