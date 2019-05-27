if ('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/service-worker.js')
           .then(function() { console.log('You can use this site without internet! ⚡'); });
}

let tagsButtonClicked = false;

function openTagsList(button) {
  if (tagsButtonClicked == false) {
    button.classList.add('tags-name');
    tagsButtonClicked = true;
  } else {
    button.classList.remove('tags-name');
    tagsButtonClicked = false;
  }
}