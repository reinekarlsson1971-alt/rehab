document.addEventListener("DOMContentLoaded", function () {

  fetch("/includes/menu.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("menu-container").innerHTML = data;

      initMenu();
      setActiveLink();
    });

  function initMenu() {
    const toggle = document.querySelector(".nav-toggle");
    const navList = document.querySelector(".nav-list");

    toggle.addEventListener("click", function () {
      navList.classList.toggle("open");
    });
  }

  function setActiveLink() {
    const currentPath = window.location.pathname;

    document.querySelectorAll(".nav-list a").forEach(link => {
      if (currentPath.includes(link.getAttribute("href"))) {
        link.classList.add("active");
      }
    });
  }

});
