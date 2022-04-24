/* eslint-disable */
Drupal.behaviors.libCarrousel = {
    attach(context) {
  
        var carrouselitem = document.querySelectorAll('.header__menu .menu span');
        var mmcontent = document.querySelectorAll('.header__menu .menu .menu_link_content');
  
        for (let i = 0; i < mmspan.length; i++) {
          mmspan[i].addEventListener("click", function(event) {
            
            if (document.querySelector('.active-son')) {
              var itemson = document.querySelector('.active-son');
              var menuitem = itemson.closest('.menu-item');
  
              menuitem.classList.remove('active');
              itemson.classList.remove('active');
              itemson.classList.remove('active-son');
            }
  
            if ( mmspan[i].classList.contains('active')) {
              mmspan[i].classList.remove('active', 'active-son');
              mmspan[i].parentNode.classList.remove('active');
            } else {
              mmspan[i].classList.add('active', 'active-son');
              mmspan[i].parentNode.classList.add('active');
            }
          });
        };
  
        for (let i = 0; i < mmcontent.length; i++) {
            mmcontent[i].addEventListener("mouseleave", function( event ) {
                if ( mmcontent[i].parentNode.classList.contains('active')) {
                    mmcontent[i].parentNode.classList.remove('active');
                    mmcontent[i].parentNode.querySelector('span').classList.remove('active');
                    document.querySelector('.active-son').classList.remove('active-son');
                } else {
                }
            });
        };
    },
  };
  