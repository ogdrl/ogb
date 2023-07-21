function toggleTheme() {
  var theme = localStorage.getItem("theme") || "dark";
  const themeContainer = document.querySelector(".theme-container");
  const themeIcon = document.getElementById("theme-icon");
  const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
  const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";

  if (theme === "dark") {
    document.documentElement.style.setProperty("--bs-dark", "#212121");
    document.documentElement.style.setProperty("--bs-light", "#f2f2f2");
    document.body.style.backgroundColor = "var(--bs-light)";
    themeContainer.style.backgroundColor = "var(--bs-light)";
    themeIcon.src = sun;
    theme = "light";
  } else {
    document.documentElement.style.setProperty("--bs-dark", "#212121");
    document.documentElement.style.setProperty("--bs-light", "#f2f2f2");
    document.body.style.backgroundColor = "var(--bs-dark)";
    themeContainer.style.backgroundColor = "var(--bs-dark)";
    themeIcon.src = moon;
    theme = "dark";
  }
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
  localStorage.setItem("theme", theme);
}

document.addEventListener("DOMContentLoaded", function() {
  var theme = localStorage.getItem("theme") || "dark";
  const themeContainer = document.querySelector(".theme-container");
  const themeIcon = document.getElementById("theme-icon");
  const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
  const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";

  if (theme === "light") {
    document.documentElement.style.setProperty("--bs-dark", "#212121");
    document.documentElement.style.setProperty("--bs-light", "#f2f2f2");
    document.body.style.backgroundColor = "var(--bs-light)";
    themeContainer.style.backgroundColor = "var(--bs-light)";
    themeIcon.src = sun;
  } else {
    document.documentElement.style.setProperty("--bs-dark", "#212121");
    document.documentElement.style.setProperty("--bs-light", "#f2f2f2");
    document.body.style.backgroundColor = "var(--bs-dark)";
    themeContainer.style.backgroundColor = "var(--bs-dark)";
    themeIcon.src = moon;
  }
  document.body.classList.toggle("dark-mode", theme === "light");
});

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}
