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