const songCover = document.getElementById("song-cover")

songCover.addEventListener("mouseenter", () => {
  songCover.classList.add("hover")
  console.log("hi")
})

songCover.addEventListener("mouseleave", () => {
  songCover.classList.remove("hover")
  console.log("hi")
})
