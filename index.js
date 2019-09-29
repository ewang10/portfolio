//Handles the burger icon nav menu
function handleToggle() {
  $(".navbar-toggle").on("click", function (event) {
    $(".navbar-items").toggleClass("navbar-toggleShow");
  });
}

//Handles hiding/un-hiding the main contents when the burger icon is clicked
function handleHideContent() {
  $(".navbar-toggle").on("click", function (event) {
    $("main").toggleClass("hide");
    $("footer").toggleClass("hide");
  });
}

//Handles filtering the projects
function handleFilter() {
  $(".filter").on("click", function (event) {
    $(".filter").removeClass("filter-active");
    $(this).addClass("filter-active");

    let newSelection = "";
    $(".all-projects").fadeTo(600, 0);
    $(".filter").removeClass("current");
    $(this).addClass("current");
    newSelection = $(this).attr("rel");
    $(".project").not("." + newSelection).slideUp();
    $("." + newSelection).slideDown();
    $(".all-projects").fadeTo(600, 1);

  });
}

//Handles elements with the button role
function handleKeyboard() {
  document.onkeydown = function (e) {
    if (e.keyCode === 13) { // The Enter/Return key
      document.activeElement.click();
    }
  };
}

function navbarDisplay() {
  let navHTML = ``;
  let width = document.body.clientWidth;;
  if (width < 768) {
    navHTML = `
          <a href="./index.html"><span>Home</span></a>
          <a href="./about.html"><span>About</span></a>
          <a href="./projects.html"><span>Projects</span></a>
          <a href="./skills.html"><span>Skills</span></a>
          <a href="./contact.html"><span>Contact</span></a>
        `;
  } else {
    navHTML = `
          <a href="./index.html">
              <div class="tooltip">
                <i class="nav-icons fas fa-home"></i>
                <span class="tooltiptext">Home</span>
              </div>
            </a>
            <a href="./about.html">
              <div class="tooltip">
                <i class="fas fa-user"></i>
                <span class="tooltiptext">About</span>
              </div>
            </a>
            <a href="./projects.html">
              <div class="tooltip">
                <i class="fas fa-laptop-code"></i>
                <span class="tooltiptext">Projects</span>
              </div>
            </a>
            <a href="./skills.html">
              <div class="tooltip">
                <i class="fas fa-code"></i>
                <span class="tooltiptext">Skills</span>
              </div>
            </a>
            <a href="./contact.html">
              <div class="tooltip">
                <i class="fas fa-envelope"></i>
                <span class="tooltiptext">Contact</span>
              </div>
            </a>
        `;
  }
  $('.navbar-items').html(navHTML);
}

//Handles the display of navbar depending on screen size
function handleNavbarDisplay() {
  $.when($.ready).then(function (event) {
    navbarDisplay();
    $(window).resize(function (event) {
      navbarDisplay();
    });
  });
}

function handlePortfolio() {
  $(handleNavbarDisplay);
  $(handleToggle);
  $(handleFilter);
  $(handleKeyboard);
  $(handleHideContent);
}

$(handlePortfolio);
