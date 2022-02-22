(function () {
    'use strict';

    // Тут можно добавить в массив классы, если еще есть аккордеон на сайте
    const accordionBittonClasses = ['.prices__button', '.accordion'];

    const accordionButtons = document.querySelectorAll(accordionBittonClasses.join(','));

    accordionButtons.forEach((accordionButton, i) => {
        // Та штука, которая сворачивается/разворачивается. Она должна быть
        // следующим элементом в разметке после элемента, по которому кликают
        const content = accordionButton.nextElementSibling;

        if (content) {
            const contentHeight = content.offsetHeight;

            content.style.height = 0;

            content.classList.add('changed');

            accordionButton.addEventListener('click', () => {

                const accordionIcon = document.querySelectorAll(".accordion__icon");
                accordionIcon.forEach((item, j) => {
                    if (i === j) {
                        item.classList.toggle("accordion__icon--active");
                    }
                })


                if (accordionButton.classList.contains('active')) {
                    content.style.height = 0;
                    accordionButton.classList.remove('active');

                } else {
                    content.style.height = contentHeight + 'px';
                    accordionButton.classList.add('active');
                }
            });
        }
    });
})();
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