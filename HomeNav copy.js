//open the nav menu when the navigation bar is clicked

document.addEventListener("DOMContentLoaded", function () {
    const toggleMenuLink = document.getElementById("toggleMenu");
    const menu = document.getElementById("menu");
  
    toggleMenuLink.addEventListener("click", function () {
      menu.classList.toggle("hidden");
    });
  });

  
  