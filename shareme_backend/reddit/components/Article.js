import React, { Component } from "react";

function Article(props) {
  return (
    <article>
      <a href={"https://reddit.com" + props.article.permalink} target="_blank">
        <h3>{props.article.title}</h3>
      </a>
    </article>
  );
}

export default Article;
