$(function () {
    // const footerVideoClose =  document.querySelector('.footer__video-close');
    // const footerVideo =  document.querySelector('.footer__video-wrap');

    // footerVideoClose.addEventListener('click', function(){
    //     footerVideo.style.display = "none";
    // });

    const footerBtnOpenForm = document.getElementById('footerBtnOpenForm');
    const modalForm = document.getElementById('modalForm');
    const modalFormClose = document.getElementById('modalFormClose');

    footerBtnOpenForm.addEventListener('click', OpenCloseModalForm);
    modalFormClose.addEventListener('click', OpenCloseModalForm);

    function OpenCloseModalForm() {
        modalForm.classList.toggle('show-modal');
    }
    // const footerBtnCloseForm = document.getElementById('footerBtnCloseForm');
    // const footerContactForm = document.getElementById('footer__contact-form');
    // const footerContactDescription = document.getElementById('footer__contact-description');
    //
    // footerBtnOpenForm.addEventListener('click', (event)=>{
    //     event.preventDefault();
    //     footerContactDescription.style.display = "none";
    //     footerContactForm.style.display = "block";
    // });
    // footerBtnCloseForm.addEventListener('click', (event)=>{
    //     event.preventDefault();
    //     footerContactDescription.style.display = "block";
    //     footerContactForm.style.display = "none";
    // });
    const burger = document.getElementById('burger');
    const headerMenu = document.getElementById('headerMenu');

    function openMenu(event) {
        headerMenu.classList.toggle('open-menu');
        burger.classList.toggle('active');
    }

    burger.addEventListener('click', openMenu);

    var galleryTop = new Swiper('.gallery-top', {
        effect: 'slide',

        spaceBetween: 0,
        slidesPerView: 1,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        loop: true,
        loopedSlides: 6, //looped slides should be the same
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        onAny: function (e) {
            if (e === 'slideChangeTransitionStart') {
                $('.intro__title').hide().removeClass(['animate__animated', 'animate__zoomIn']);
                $('.intro__button').hide().removeClass(['animate__animated', 'animate__fadeInRight']);
            }

            if (e === 'slideChangeTransitionEnd') {
                const $active = $('.swiper-slide-active');
                $active.find(".intro__title").show().addClass(["animate__animated", "animate__zoomIn"]);
                $active.find(".intro__button").show().addClass(["animate__animated", "animate__fadeInRight"]);
                if (window.innerWidth < 1100) {
                    $active.find(".intro__button").hide().removeClass(['animate__animated', 'animate__fadeInRight']);;
                }
            }
        }
    });

    $('.cataloge-link__wrap').on('mouseover', function () {
        galleryTop.slideTo($(this).index());
    });
    // const modalVideo = document.getElementById('modalVideo');
    // const openModalVideo = document.getElementById('openModalVideo');
    // const modalCloseVideo = document.getElementById('modalCloseVideo');
    // const VideoInModal = document.getElementById('VideoInModal');
    //
    // openModalVideo.addEventListener('click', OpenModalVideo);
    // modalCloseVideo.addEventListener('click', CloseModalVideo);
    //
    // function OpenModalVideo(){
    //     modalVideo.classList.add('show-modal');
    //     $("#VideoInModal").attr("src", 'https://www.youtube.com/embed/paHVhcGAx0o?autoplay=1&loop=1&mute=0&version=3&playerapiid=video');
    // }
    // function CloseModalVideo(){
    //     modalVideo.classList.remove('show-modal');
    //     $("#VideoInModal").attr("src", null);
    // }


    (function () {
        if ($('[data-js-slider="products"]').length) {
            new Swiper('[data-js-slider="products"]', {
                loop: true,
                slidesPerView: 3,
                autoplay: {
                    delay: 3000
                },
                speed: 1000,
                navigation: {
                    nextEl: '.product-slider__control_next',
                    prevEl: '.product-slider__control_prev'
                },
                pagination: {
                    el: '.product-slider__pagination',
                    dynamicBullets: false
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        centeredSlides: true
                    },
                    768: {
                        slidesPerView: 3

                    }
                }
            });
        }
    })();

    const buttonOpenForm = document.getElementById('buttonOpenForm');
    const buttonOpenTable = document.getElementById('buttonOpenTable');
    const buttonOpenSteps = document.getElementById('buttonOpenSteps');
    const TabForm = document.getElementById('TabForm');
    const TabTable = document.getElementById('TabTable');
    const TabSteps = document.getElementById('TabSteps');

    // т.к. не на всех страницах он есть
    if (buttonOpenForm) {
        buttonOpenForm.addEventListener('click', function (e) {
            TabForm.classList.toggle('tab-open');
        });
    }
    if (buttonOpenTable) {
        buttonOpenTable.addEventListener('click', function (e) {
            TabTable.classList.toggle('tab-open');
        });
    }
    if (buttonOpenSteps) {
        buttonOpenSteps.addEventListener('click', function (e) {
            TabSteps.classList.toggle('tab-open');
        });
    }

    /*Tabs desktop===========*/
    const tabsTriggersItem = document.querySelectorAll('.tabs-triggers__item');
    const tabsContentItem = document.querySelectorAll('.tabs-content__item');

    /*Находим все наши айтемы и перебираем их циклом.
    У всех удаляем активный класс, добавляем только тем, кто получил клик.*/
    tabsTriggersItem.forEach(function (item) {
        return item.addEventListener('click', function (e) {
            e.preventDefault();

            const id = this.getAttribute('href').replace('#', '');
            tabsContentItem.forEach(function (child) {
                return child.getAttribute('id') !== id && child.classList.remove('tabs-content__item--active');
            });
            document.getElementById(id).classList.toggle('tabs-content__item--active');
        });
    });

    $('.tabs-triggers__item').on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.attr('href'),
            blockOffset = $(blockId).offset().top - 250;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);

        // console.log(blockOffset);
    });

    /*For form ===========*/
    (function () {
        const upload = document.querySelector('[data-upload="file"]'),
              upload_content = document.querySelector('[data-upload="content"]');

        $(upload).on('change', setFileName.bind(upload));

        function setFileName() {
            upload_content.textContent = this.files[0].name;
        }
    })();

    (function () {
        if ($('[data-js-slider="trust-us"]').length) {
            let trustSlider = new Swiper('[data-js-slider="trust-us"]', {
                slidesPerView: 5,
                slidesPerGroup: 5,
                speed: 1500,
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false
                },
                navigation: {
                    prevEl: '[data-slider-ctrl="trust-us-prev"]',
                    nextEl: '[data-slider-ctrl="trust-us-next"]'
                },
                pagination: {
                    el: '[data-slider-pagination="trust-us"]',
                    bulletElement: 'div',
                    bulletClass: 'trust-us__pagination-item',
                    bulletActiveClass: 'trust-us__pagination-item_active',
                    clickable: true
                },
                breakpoints: {
                    768: {
                        slidesPerView: 4,
                        slidesPerGroup: 4
                    },
                    991: {
                        slidesPerView: 5,
                        slidesPerGroup: 5
                    },
                    320: {
                        slidesPerView: 3,
                        slidesPerGroup: 3
                    }
                }
            });
        }
    })();

    const videoSection = document.getElementById('videoSection');
    const blockVideo = document.getElementById('blockVideo');
    const btnVideo = document.getElementById('btnVideo');

    let player;

    window.onYouTubeIframeAPIReady = function () {
        player = new YT.Player("video");
    };

    btnVideo.addEventListener('click', function () {
        videoSection.classList.add('video__opacity');

        player.seekTo(0);
        player.unMute();
    });
    const tabs = document.querySelectorAll('[data-header]');
    const slides = document.querySelectorAll('[data-content]');
    const icon = document.querySelectorAll('.why-we__svg-icon');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', openSlide);
    });
    function openSlide(event) {
        const id = this.getAttribute('data-slide');

        tabs.forEach(function (s) {
            return s.classList.remove('fill');
        });
        this.classList.add('fill');

        slides.forEach(function (s) {
            return s.classList.remove('active');
        });
        document.getElementById(id).classList.add('active');
    }
});