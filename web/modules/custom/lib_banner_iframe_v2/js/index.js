/* eslint-disable */
Drupal.behaviors.libCarrouselIframe = {
    attach(context) {
  
      var iframeitem = document.querySelectorAll('.lib-comp-carrousel-iframe__item');
      var iframenav = document.querySelectorAll('.lib-comp-carrousel-iframe__circle');

      for (let i = 0; i < iframenav.length; i++) {
        iframenav[i].addEventListener("click", function(event) {
          event.preventDefault();
          for (let q = 0; q < iframeitem.length; q++) {
            const element = iframeitem[q];
            if ( element.classList.contains('is-active')) {
              element.classList.remove('is-active');
            }
          }
          iframeitem[i].classList.add('is-active');
        });
      };
    },
  };
  