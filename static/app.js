let darkState = false;

const darkToggle = document.getElementById("dark-toggle");
const moon = document.querySelector(".fa-moon");
const sun = document.querySelector(".fa-sun");

darkToggle.addEventListener("click", () => {
  moon.classList.toggle("show");
  sun.classList.toggle("show");

  darkState = darkState ? false : true;
  document.body.classList.toggle("dark-mode");
});

window.onload = () => {
  if (darkState) {
    document.body.classList.add("dark-mode");
    moon.classList.remove("show");
    sun.classList.add("show");
  }
};
