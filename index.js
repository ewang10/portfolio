//Handles the burger icon nav menu
function handleToggle() {
  $(".navbar-toggle").on("click", function(event) {
    $(".navbar-items").toggleClass("navbar-toggleShow");
  });
}

//Handles hiding/un-hiding the main contents when the burger icon is clicked
function handleHideContent() {
  $(".navbar-toggle").on("click", function(event) {
    $("main").toggleClass("hide");
    $("footer").toggleClass("hide");
  });
}

//Handles filtering the projects
function handleFilter() {
  $(".filter").on("click", function(event) {
    $(".filter").removeClass("filter-active");
    $(this).addClass("filter-active");

    let newSelection = "";
    $(".all-projects").fadeTo(600, 0);
    $(".filter").removeClass("current");
    $(this).addClass("current");
    newSelection = $(this).attr("rel");
    $(".project").not("."+newSelection).slideUp();
		$("."+newSelection).slideDown();
    $(".all-projects").fadeTo(600, 1);
    
  });
}

//Handles elements with the button role
function handleKeyboard() {
  document.onkeydown = function(e) {
  if(e.keyCode === 13) { // The Enter/Return key
    document.activeElement.click();
  }
  };
}

function handlePortfolio() {
  $(handleToggle);
  $(handleFilter);
  $(handleKeyboard);
  $(handleHideContent);
}

$(handlePortfolio);