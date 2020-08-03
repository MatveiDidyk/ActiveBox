$(function() { 
   
         /* -- Fixed Header -- */
   let header = $("#header");
   let intro = $("#intro");
   let introH= intro.innerHeight(); 
   let scrollPos = $(window).scrollTop();
   let nav = $("#nav"); // В переменную nav сохраняем селектор навигации
   let navToggle = $("#navToggle"); // В переменную navToggle сохраняем селектор навигации

   checkScroll(scrollPos, introH); 

   
   $(window).on("scroll resize", function() { 
      introH = intro.innerHeight(); 
      scrollPos = $(this).scrollTop(); 

      checkScroll(scrollPos, introH); 
   });

   function checkScroll(scrollPos, introH) { // Отправляем параметры в функцию: Позицию скрола и Высоту Интро Блока
      if(scrollPos > introH) { 
         header.addClass("fixed"); 
      } else {
         header.removeClass("fixed"); 
      }
   }

         /* -- Smooth scroll -- */
   $("[data-scroll]").on("click", function(event){
      event.preventDefault(); //Отменяем стандартное поведение ссылки при клике.

      let elementID = $(this).data('scroll'); 
      let elementOffset = $(elementID).offset().top; 
      

      nav.removeClass("show"); // Чтобы выпадающее меню исчезало после клика на него. 
      
      $("html, body").animate({
         scrollTop: elementOffset - 70
      }, 1500);
   });

         /* -- Nav Toggle -- */
         
         navToggle.on("click", function(event) { 
         event.preventDefault(); 
         // Показываем / Скрываем МЕНЮ
         nav.toggleClass("show"); 
      });

         /* -- Reviews  https://kenwheeler.github.io/slick/ -- */
         let slider = $("#revievsSlider");

         slider.slick({  
            infinite: true,  
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true, 
            arrows: false,
            dots: true
          });
});