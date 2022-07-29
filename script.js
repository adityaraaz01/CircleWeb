// navigation section 
function navButtonClick(){
    var navbar = document.getElementById("myuppernav");
    if (navbar.className === "uppernav") {
        navbar.className += " responsive";
    } else {
        navbar.className = "uppernav";
    }
}

function expandOrShrink(dots, more, btn) {
  var dotsText = document.getElementById(dots);
  var moreText = document.getElementById(more);
  var btnText = document.getElementById(btn);

  if (dotsText.style.display === "none") {
    dotsText.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  }
  else {
    dotsText.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

