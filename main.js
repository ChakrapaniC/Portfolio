var typed = new Typed(".type-text",{
    strings: ["Front End Developer","Java Script","React Js"],
    typeSpeed:120,
    backSpeed:75,
    showCursor: true,
    cursorChar: '',
    loop:true


})

AOS.init({
    offset:300,
    duration: 2000,
    easing:'ease-in-out',
    once: true,
    anchorPlacement: 'top-bottom',
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }