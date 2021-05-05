const songCover = document.getElementById("song-cover")
const coverTwo = document.querySelector(".cover2")

songCover.addEventListener("mouseenter", () => {
  songCover.classList.add("hover")
})

songCover.addEventListener("mouseleave", () => {
  songCover.classList.remove("hover")
})

coverTwo.addEventListener("mouseenter", () => {
  coverTwo.classList.add("hover")
})

coverTwo.addEventListener("mouseleave", () => {
  coverTwo.classList.remove("hover")
})
