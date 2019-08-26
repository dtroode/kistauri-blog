import React from "react";

import { Link } from "gatsby";
import { format, isToday, isYesterday, isThisYear } from "date-fns";

import "../styles/article.scss";

const Article = props => {
  const ruLocale = require("date-fns/locale/ru");

  return (
    <article
      id={props.node.frontmatter.categories}
      key={props.node.frontmatter.title}
      className="main__sect--arts__art"
    >
      <Link to={props.node.fields.slug} className="main__sect--arts__art__link">
        <section className="main__sect--arts__art__link__sect">
          <h2>{props.node.frontmatter.title}</h2>
          <p className="main__sect--arts__art__link__sect__p">
            {props.node.frontmatter.description}
          </p>
          <p className="main__sect--arts__art__link__sect__p post-links">
            {/* Date of post written */}
            <span
              title={
                format(props.node.frontmatter.date, "dddd, D MMMM YYYY", {
                  locale: ruLocale
                })
                  .charAt(0)
                  .toUpperCase() +
                format(props.node.frontmatter.date, "dddd, D MMMM YYYY", {
                  locale: ruLocale
                }).slice(1)
              }
              className="post-links__span"
            >
              {(() => {
                if (isToday(props.node.frontmatter.date)) {
                  return "сегодня";
                } else if (isYesterday(props.node.frontmatter.date)) {
                  return "вчера";
                } else if (isThisYear(props.node.frontmatter.date)) {
                  return format(props.node.frontmatter.date, "D MMMM", {
                    locale: ruLocale
                  });
                } else {
                  return format(props.node.frontmatter.date, "D MMMM YYYY", {
                    locale: ruLocale
                  });
                }
              })()}
            </span>
            {/* All tags for this post */}
            {props.node.frontmatter.tags.map(tag => (
              <span key={tag} className="post-links__span">
                {tag}
              </span>
            ))}
          </p>
        </section>
      </Link>
    </article>
  );
};

export default Article;
