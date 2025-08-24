window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  const button = document.getElementById("header__button");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    button.classList.add("scrolled-btn");
  } else {
    header.classList.remove("scrolled");
    button.classList.remove("scrolled-btn");
  }
});