// Login //

function ativar() {
    var x = document.getElementById("loginA");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  

  // Menu //

  

  function show() {
    var menu = document.getElementById("menunav");
    // var menuclose = document.getElementById("menu-btn");


    // menuclose.classList.toggle("fa-times")

    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }
