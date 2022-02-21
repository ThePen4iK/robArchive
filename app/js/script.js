document.addEventListener("DOMContentLoaded", function () {

  const burger = document.querySelector(".hamburger"),
        header = document.querySelector(".header"),
        startScreen = document.querySelector('.js-main'),
        html = document.documentElement;
        headerFixed = startScreen.offsetHeight;

  window.onscroll = function () {
    fixed();
  }
  function fixed() {
    //&& window.pageYOffset >= headerFixed
    if (window.scrollY > 0) {
      header.classList.add("header__fixed");
    } else {
      header.classList.remove("header__fixed");
    }
  }
  burger.addEventListener("click", ()=>{
    html.classList.toggle("body-scroll");
    header.classList.toggle("header--open");
    burger.classList.toggle("hamburger--active");
  })



  console.log("DOM fully loaded and parsed");
})