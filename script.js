const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links-mobile")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navLinks.classList.toggle("show")
})
