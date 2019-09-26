function classToggle() {
  const navs = document.querySelectorAll('.navbar-items')
  
  navs.forEach(nav => nav.classList.toggle('navbar-toggleShow'));
}



function handleToggle() {
  document.querySelector('.navbar-toggle')
  .addEventListener('click', classToggle);
}

function handleHideContent() {
  $(".navbar-toggle").on("click", function(event) {
    $("main").toggleClass("hide");
  });
}

function handleFilter() {
  $(".filter").on("click", function(event) {
    //alert("text");
    $(".filter").removeClass("filter-active");
    //alert("text2");
    $(this).addClass("filter-active");
    //alert("text3");
    //Why is it not reaching here?
    let newSelection = "";
    //alert("text4");
    
    
    $(".all-projects").hide();
    $(".filter").removeClass("current");
    $(this).addClass("current");
    newSelection = $(this).attr("rel");
    $(".project").not("."+newSelection).hide();
		$("."+newSelection).show();
    $(".all-projects").show();
    
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
$(handleHideContent);

  