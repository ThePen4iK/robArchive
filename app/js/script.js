document.addEventListener("DOMContentLoaded", function () {

    let burger = document.querySelector(".hamburger"),
        header = document.querySelector(".header"),
        startScreen = document.querySelector('.js-main'),
        bodyDontScroll = document.documentElement,
        // html = document.documentElement;
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

    burger.addEventListener("click", () => {
        bodyDontScroll.classList.toggle("body-scroll");
        header.classList.toggle("header--open");
        burger.classList.toggle("hamburger--active");

    })

    let btnHeader = document.querySelector(".btn--header"),
        btnConnection = document.querySelectorAll(".form__btn"),
        btnPolicy = document.querySelector(".footer__policy"),

        overlay = document.querySelector(".overlay"),

        popupHeader = document.querySelector(".js-popup-header"),
        popupThanks = document.querySelector(".js-popup-thanks"),
        popupPolicy = document.querySelector(".js-popup-policy"),

        popupClose = document.querySelectorAll(".popup__close");


    btnHeader.addEventListener("click", ()=>{
        popupHeader.classList.add("popup__show");
        overlay.classList.add("active-overlay");
        bodyDontScroll.classList.add("body-scroll");

        popupClose.forEach((item) => {
            item.addEventListener("click", () => {
                popupHeader.classList.remove("popup__show");
                overlay.classList.remove("active-overlay");
                bodyDontScroll.classList.remove("body-scroll");
            })
        })
    })

    btnConnection.forEach((item, i) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            popupThanks.classList.add("popup__show");
            overlay.classList.add("active-overlay");
            bodyDontScroll.classList.add("body-scroll");

            popupClose.forEach((item) => {
                item.addEventListener("click", () => {
                    popupThanks.classList.remove("popup__show");
                    overlay.classList.remove("active-overlay");
                    bodyDontScroll.classList.remove("body-scroll");
                })
            })
        })
    })

    btnPolicy.addEventListener("click", ()=>{
        popupPolicy.classList.add("popup__show");
        overlay.classList.add("active-overlay");
        bodyDontScroll.classList.add("body-scroll");

        popupClose.forEach((item) => {
            item.addEventListener("click", () => {
                popupPolicy.classList.remove("popup__show");
                overlay.classList.remove("active-overlay");
                bodyDontScroll.classList.remove("body-scroll");
            })
        })
    })

    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {
            popupThanks.classList.remove("popup__show");
            popupHeader.classList.remove("popup__show");
            popupPolicy.classList.remove("popup__show");
            overlay.classList.remove("active-overlay");
            bodyDontScroll.classList.remove("body-scroll");

        }
        ;
    }, false);
    window.addEventListener("click", (e) => {
        let target = e.target;
        if (target.classList.contains("active-overlay")) {
            popupThanks.classList.remove("popup__show");
            popupHeader.classList.remove("popup__show");
            popupPolicy.classList.remove("popup__show");
            overlay.classList.remove("active-overlay");
            bodyDontScroll.classList.remove("body-scroll");
        }
    })

    const swiperCommon = new Swiper(".common__swiper", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 20,
        navigation: {
            nextEl: ".arrow__next",
            prevEl: ".arrow__prev",
        },
    });

    const swiperInfo = new Swiper(".info__swiper", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 12,
        navigation: {
            nextEl: ".arrow__next",
            prevEl: ".arrow__prev",
        },
        breakpoints: {
            768: {
                spaceBetween: 20,
            }
        }
    })


    const swiperPhoto = new Swiper(".photo__swiper", {
        slidesPerView: "auto",
        spaceBetween: 16,
        loop: true,
        navigation: {
            nextEl: ".arrow__next--photo",
            prevEl: ".arrow__prev--photo",
        },
        breakpoints: {
            768: {
                spaceBetween: 20,
            }
        },
    })


    const swiperService = new Swiper(".service__swiper", {
        slidesPerView: "auto",
        spaceBetween: 15,
        navigation: {
            nextEl: ".arrow__next--service",
            prevEl: ".arrow__prev--service",
        },
        breakpoints: {
            1439: {
                spaceBetween: 0,
            }
        },
        on: {
            resize() {
                if (window.innerWidth <= 1439) {
                    this.enable();
                } else if (window.innerWidth > 1439) {

                    this.slideTo(0);
                    this.disable();
                }
            }
        }
    })


    const swiperAdvantage = new Swiper(".advantage__swiper", {
        slidesPerView: "auto",
        spaceBetween: 35,
        navigation: {
            nextEl: ".arrow__next",
            prevEl: ".arrow__prev",
        },
        breakpoints: {
            768: {
                spaceBetween: 140,
            }
        }
    })


    const swiperHistoryTimeline = new Swiper(".history__timeline-container", {
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 166,
        freeMode: true,
        // centeredSlides: true,
        watchSlidesProgress: true,
        allowTouchMove: false,
        navigation: {
            nextEl: ".arrow__next",
            prevEl: ".arrow__prev",
        },

        breakpoints: {
            768: {
                spaceBetween: 266,
            }
        }
    })

    const swiperHistory = new Swiper(".history__swiper", {
        spaceBetween: 15,
        slidesPerView: 'auto',
        loop: true,
        navigation: {
            nextEl: ".arrow__next",
            prevEl: ".arrow__prev",
        },
        thumbs: {
            swiper: swiperHistoryTimeline,
        },
    })


    const swiperStoryTimeline = new Swiper(".story__timeline-swiper", {
        spaceBetween: 34,
        allowTouchMove: false,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: ".arrow__next--story",
            prevEl: ".arrow__prev--story",
        },
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            768: {
                spaceBetween: 38,
            },
            1200: {
                direction: "vertical",
                spaceBetween: 148,
            }
        }
    })

    const swiperAboutHistory = new Swiper(".story__swiper", {
        slidesPerView: 1,
        spaceBetween: 34,
        loop: true,
        thumbs: {
            swiper: swiperStoryTimeline,
        },
        navigation: {
            nextEl: ".arrow__next--story",
            prevEl: ".arrow__prev--story",
        },
    })

    console.log("DOM fully loaded and parsed");
})