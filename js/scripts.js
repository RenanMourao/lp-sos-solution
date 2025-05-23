function toggleTituloCorAoScroll() {
    const titulo = document.getElementById('titulo-sos');
    if (!titulo) return;

    // Verifica se a largura da tela é menor que 640px (tela de celular)
    if (window.innerWidth <= 640) {
        titulo.classList.remove('text-white'); // Título fica preto em dispositivos móveis
        titulo.classList.add('text-black');
    } else {
        // Se a tela for maior que 640px (desktop), continua o comportamento do scroll
        if (window.scrollY > 10) {
            titulo.classList.remove('text-white');
            titulo.classList.add('text-black');
        } else {
            titulo.classList.remove('text-black');
            titulo.classList.add('text-white');
        }
    }
}

// Executa a função toda vez que houver scroll
window.addEventListener('scroll', toggleTituloCorAoScroll);

// Também executa uma vez ao carregar a página (caso já esteja rolada)
window.addEventListener('load', toggleTituloCorAoScroll);



  function toggleTextNavScroll() {
    const titulos = document.querySelectorAll('.text-nav');
    if (!titulos.length) return;

    titulos.forEach((titulo) => {
      if (window.scrollY > 10) {
        titulo.classList.remove('text-white');
        titulo.classList.add('text-black');
      } else {
        titulo.classList.remove('text-black');
        titulo.classList.add('text-white');
      }
    });
  }

  window.addEventListener('scroll', toggleTextNavScroll);
  window.addEventListener('load', toggleTextNavScroll);

(function($) {
    "use strict"; 
	
    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });
    
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			var target = $($anchor.attr('href'));
			
			if (target.length) {
				$('html, body').stop().animate({
					scrollTop: target.offset().top
				}, 600, 'easeInOutExpo');
			}
			
			event.preventDefault();
		});
	});
	

    // hover in desktop mode
    function toggleDropdown (e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function(){
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
    .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);


    /* Details Lightbox - Magnific Popup */
    $('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
    });
    

    /* Card Slider - Swiper */
	var cardSlider = new Swiper('.card-slider', {
		autoplay: {
            delay: 4000,
            disableOnInteraction: false
		},
        loop: true,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		slidesPerView: 3,
		spaceBetween: 70,
        breakpoints: {
            // when window is <= 767px
            767: {
                slidesPerView: 1
            },
            // when window is <= 1023px
            1023: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        }
    });


    /* Counter - CountTo */
	var a = 0;
	$(window).scroll(function() {
		if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors	
			var oTop = $('#counter').offset().top - window.innerHeight;
			if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
				countNum: $this.text()
				}).animate({
					countNum: countTo
				},
				{
					duration: 2000,
					easing: 'swing',
					step: function() {
					$this.text(Math.floor(this.countNum));
					},
					complete: function() {
					$this.text(this.countNum);
					//alert('finished');
					}
				});
			});
			a = 1;
			}
		}
    });


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
	});
	

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

	/* Function to get the navigation links for smooth page scroll */
	function getMenuItems() {
		var menuItems = [];
		$('.nav-link').each(function() {
			var hash = $(this).attr('href').substr(1);
			if(hash !== "")
				menuItems.push(hash);
		})
		return menuItems;
	}	

	/* Prevents adding of # at the end of URL on click of non-pagescroll links */
	$('.nav-link').click(function (e) {
		var hash = $(this).attr('href').substr(1);
		if(hash == "")
			e.preventDefault();
	});

	/* Checks page scroll offset and changes active link on page load */
	changeActive();

	/* Change active link on scroll */
	$(document).scroll(function(){
		changeActive();
	});
	
function changeActive() {
    // Verifica a largura da tela (exemplo: maior que 768px para dispositivos maiores)
    if ($(window).width() > 768) {
        const menuItems = getMenuItems();
        $.each(menuItems, function(index, value) {
            var section = $('#' + value);
            if (section.length) {
                var offsetSection = section.offset().top;
                var docScroll = $(document).scrollTop();
                var docScroll1 = docScroll + 1;

                if (docScroll1 >= offsetSection) {
                    // Remover a classe 'active' apenas dos links de navegação
                    $('.nav-link').not('.whatsapp-link').removeClass('active');
                    // Adicionar a classe 'active' no link da seção correspondente
                    $('.nav-link[href$="#'+value+'"]').addClass('active');
                }
            }
        });
    }
}



})(jQuery);

