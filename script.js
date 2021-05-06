const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links-mobile")
const navDesktop = document.querySelector(".navbar-desktop")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navLinks.classList.toggle("show")
})

// window.addEventListener("scroll", fixNav)

// function fixNav() {
// //   console.log(window.scrollY, navDesktop.offsetHeight)
// //   //   if (window.scrollY > navDesktop.offsetHeight + 150) {
// //   //     navDesktop.classList.add("scroll")
// //   //     console.log("hi")
// //   //   } else {
// //   //     navDesktop.classList.remove("scroll")
// //   //   }
// // }
