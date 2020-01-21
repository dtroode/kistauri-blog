export default function control(thismove, thatmove) {
  document.addEventListener("keydown", function(event) {
    if (
      thismove &&
      event.code === "ArrowRight" &&
      (event.ctrlKey || event.metaKey)
    ) {
      window.open(thismove, "_self")
    } else if (
      thatmove &&
      event.code === "ArrowLeft" &&
      (event.ctrlKey || event.metaKey)
    ) {
      window.open(thatmove, "_self")
    }
  })
}
