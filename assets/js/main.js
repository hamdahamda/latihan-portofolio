// menu show

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

// active menu and remove menu

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  // active link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  //   remove menu mobile
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// scroll reveal animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 300,
  reset: true

})

// scroll home
sr.reveal('.home__title', {})
sr.reveal('.button', {
  delay: 300
})
sr.reveal('.home__image', {
  delay: 300
})
sr.reveal('.home__social-icon', {
  interva3: 300
})

// scroll5about
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', {
  delay: 500
})
sr.reveal('.about__text', {
  delay: 500
})

// scroll skills

sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', {
  delay: 300
})
sr.reveal('.skills__data', {
  interval: 300
})
sr.reveal('.skills__img', {
  delay: 500
})

// scroll work
sr.reveal('.work__img', {
  interval: 300
})

// scroll contact
sr.reveal('.contact__input', {
  interval: 300
})

// typing animation script

var typed = new Typed(".typing", {
  strings: ["a Developer", "a Designer", "a Freelancer"],
  typedSpeed: 100,
  backSpeed: 100,
  loop: true
});