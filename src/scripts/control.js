export default function control(next, prev) {
  document.addEventListener("keydown", function (event) {
    if (next && event.code === 'ArrowLeft' && (event.ctrlKey || event.metaKey)) {
      window.open(next, '_self')
    } else if (prev && event.code === 'ArrowRight' && (event.ctrlKey || event.metaKey)) {
      window.open(prev, '_self')
    }
  });
}