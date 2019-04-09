if ('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('../service-worker.js')
           .then(function() { console.log('You can use this site without internet! ⚡'); });
}
// function articleHeight() {
//   var article = document.getElementsByClassName('page');
//   var articleWidth = (window.innerWidth - 4.375*32) / 2;
//   console.log(article);
//   for (var i = 0; i < article.length; i++) {
//     article[i].style.height = articleWidth + "px";
//   }
// }



// function articleHeight() {
//   var articleWidth = (window.innerWidth - 4.375*32) / 2;

//   articles.forEach(a => {
//     a.style.height = articleWidth + "px";
//   })
// }

// window.onload = articleHeight();
// window.onresize = articleHeight();