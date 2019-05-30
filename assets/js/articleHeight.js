function findArticleHeight() {
  const articles = document.querySelectorAll('.page');
  const articlesArray = [...articles];

  articlesArray.forEach(a => {
    let articleWidth = a.offsetWidth;
    a.style.height = articleWidth + "px";
  })
}

window.addEventListener('load', () => {
  findArticleHeight();
});
window.addEventListener('resize', () => {
  findArticleHeight();
});