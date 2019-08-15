import React from "react";
import { Link } from "gatsby";
import "../styles/article.scss";

const Article = props => {
  const date = new Date();
  return (
    <article
      id={props.node.frontmatter.categories}
      key={props.node.frontmatter.title}
      className="main__sect--arts__art"
    >
      <Link to={props.node.fields.slug} className="main__sect--arts__art__link">
        <section className="main__sect--arts__art__link__sect">
          <h2>{props.node.frontmatter.title}</h2>
          <p>{props.node.frontmatter.description}</p>
          <p className="post-links">
            {/* Date of post written */}
            <span title={props.node.frontmatter.date}>
              {(() => {
                switch (true) {
                  case props.node.frontmatter.date.endsWith(date.getFullYear()):
                    return props.node.frontmatter.date.slice(
                      0,
                      props.node.frontmatter.date.length - 5
                    );
                  default:
                    return props.node.frontmatter.date;
                }
              })()}
            </span>
            <span>·</span>
            {/* All tags for this post */}
            {props.node.frontmatter.tags.map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </p>
        </section>
      </Link>
    </article>
  );
};

export default Article;
