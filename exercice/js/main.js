window.onload = function(){
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {
    setStickyMenu()
  };

  // Get the navbar
  var navbar = document.getElementById("stickyMenu");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function setStickyMenu() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
};

// Function to add class to the top nav and generate a responsive menu with css
function responsiveMenu() {
  var x = document.getElementById("topnav");
  if (x.className === "navbar") {
      x.className += " responsive";
  } else {
      x.className = "navbar";
  }
}

// Replace normal pictures to @2x if there's a retina screen
function retina(img, src) {
  if (window.devicePixelRatio > 1){
    src = src.replace(".png", "@2x.png");
    img.onload = null; img.src = src;
  }
}
