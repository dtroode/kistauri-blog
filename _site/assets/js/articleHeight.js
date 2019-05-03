function articleHeight() {
  const articles = document.querySelectorAll('.page');
  const articlesArray = [...articles];

  articlesArray.forEach(a => {
    let articleWidth = a.offsetWidth;
    a.style.height = articleWidth + "px";
  })
}

window.addEventListener('load', () => articleHeight());
window.addEventListener('resize', () => articleHeight());