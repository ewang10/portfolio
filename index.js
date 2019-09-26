function classToggle() {
  const navs = document.querySelectorAll('.navbar-items')
  
  navs.forEach(nav => nav.classList.toggle('navbar-toggleShow'));
}



function handleToggle() {
  document.querySelector('.navbar-toggle')
  .addEventListener('click', classToggle);
}


function handleFilter() {
  $(".filter").on("click", function(event) {
    $(".filter").removeClass("filter-active");
    $(this).addClass("filter-active");

    //Why is it not reaching here?
    let newSelection = "";
    console.log("reach");
    $("#all-projects").fadeTo(200, 0.10);
    $(".filter").removeClass("current");
    $(this).addClass("current");
    newSelection = $(this).attr("rel");
    $(".project").not("."+newSelection).slideUp();
		$("."+newSelection).slideDown();
    $("#all-projects").fadeTo(600, 1);
    console.log("reach");
  });

  
}


function handleKeyboard() {
  document.onkeydown = function(e) {
  if(e.keyCode === 13) { // The Enter/Return key
    document.activeElement.click();
  }
  };
}


$(handleToggle);
$(handleFilter);
$(handleKeyboard);
  