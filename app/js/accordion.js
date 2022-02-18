(function () {
  'use strict';

  // Тут можно добавить в массив классы, если еще есть аккордеон на сайте
  const accordionBittonClasses = ['.prices__button'];

  const accordionButtons = document.querySelectorAll(accordionBittonClasses.join(','));

  accordionButtons.forEach(accordionButton => {
    // Та штука, которая сворачивается/разворачивается. Она должна быть 
    // следующим элементом в разметке после элемента, по которому кликают
    const content = accordionButton.nextElementSibling;

    if (content) {
      const contentHeight = content.offsetHeight;

      content.style.height = 0;

      content.classList.add('changed');

      accordionButton.addEventListener('click', () => {
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