$(document).ready(function() {





    /* =================================
        Preloader
    =================================== */
    if ((".loader").length) {
        // show Preloader until the website ist loaded
        $(window).on('load', function() {
            $(".loader").fadeOut("slow");
        });
    }
    
    
    
    /* =================================
        SCROLL FROM MENU
    =================================== */
    function scrollPageToId(id) {
        var to = $('#' + id).offset().top - 50;
        $("html, body").animate({
            scrollTop: to
        }, 200);
    }
    
    
    /* =================================
        ANIMATION
    =================================== */
    
    $(window).scroll(function() {
                $('#section-4').each(function(){
                var imagePos = $(this).offset().top;
                
                var topOfWindow = $(window).scrollTop();
                    if (imagePos < topOfWindow+400) {
                        $('.block_num').addClass("slideUp");
                    }
                });
    
                $('#pin').each(function(){
                var imagePos = $(this).offset().top;
                
                var topOfWindow = $(window).scrollTop();
                    if (imagePos < topOfWindow+400) {
                        $(this).addClass("hatch");
                    }
                });
    
                $('#pop-up-message').each(function(){
                var imagePos = $(this).offset().top;
                
                var topOfWindow = $(window).scrollTop();
                    if (imagePos < topOfWindow+400) {
                        $(this).addClass("slideExpandUp");
                    }
                });	
                
                    $('#example-5').each(function(){
                var imagePos = $(this).offset().top;
                
                var topOfWindow = $(window).scrollTop();
                    if (imagePos < topOfWindow+400) {
                        $('.graph-bar').addClass("pullUp");
                    }
                });					
                                    
                                    
                    $('#section-1').each(function(){
                var imagePos = $(this).offset().top;
                
                var topOfWindow = $(window).scrollTop();
                    if (imagePos < topOfWindow+400) {
                        $('#section-1 .line-gold-home').addClass("stretchRight");
                    }
                });						
    
                $('#section-2').each(function(){
                var imagePos = $(this).offset().top;
                
                var topOfWindow = $(window).scrollTop();
                    if (imagePos < topOfWindow+400) {
                        $('#section-2 .line-gold').addClass("stretchRight");
                    }
                });		
                
                    
                $('#section-3').each(function(){
                var imagePos = $(this).offset().top;
                
                var topOfWindow = $(window).scrollTop();
                    if (imagePos < topOfWindow+400) {
                        $('#section-3 .line-gold').addClass("stretchRight");
                    }
                });				
                
    
    
    $('#section-4').each(function(){
                var imagePos = $(this).offset().top;
                
                var topOfWindow = $(window).scrollTop();
                    if (imagePos < topOfWindow+400) {
                        $('#section-4 .line-gold').addClass("stretchRight");
                    }
                });		
    
    
    
    
    
    $('#section-5').each(function(){
                var imagePos = $(this).offset().top;
                
                var topOfWindow = $(window).scrollTop();
                    if (imagePos < topOfWindow+400) {
                        $('#section-5 .line-gold').addClass("stretchRight");
                    }
                });		
                
                
                
                $('#section-6').each(function(){
                var imagePos = $(this).offset().top;
                
                var topOfWindow = $(window).scrollTop();
                    if (imagePos < topOfWindow+400) {
                        $('#section-6 .line-gold').addClass("stretchRight");
                    }
                });		
                
                
                $('#section-7').each(function(){
                var imagePos = $(this).offset().top;
                
                var topOfWindow = $(window).scrollTop();
                    if (imagePos < topOfWindow+400) {
                        $('#section-7 .line-gold').addClass("stretchRight");
                    }
                });		
                
                
                
                
                
                
                        $('#section-2').each(function(){
                var imagePos = $(this).offset().top;
                
                var topOfWindow = $(window).scrollTop();
                    if (imagePos < topOfWindow+400) {
                        $('#section-2 .line-gold').addClass("stretchRight");
                    }
                });
    
            
    
            });
    
    
    
    
    
    
    /* =================================
        NAVBAR COLLAPSE ON SCROLL
    =================================== */
    $(window).on('scroll', function() {
        var b = $(window).scrollTop();
        if (b > 60) {
            $(".scroll_header").addClass("scrollMenu");
        } else {
            $(".scroll_header").removeClass("scrollMenu");
        }
    });
    
    
    
    
    
    
    $(document).ready(function() {
    
    /* =================================
        ADD CLASS TO ACTIVE ID
    =================================== */
    
    $('.mymenu, .slidebars').singlePageNav({
        filter: ':not(.extra)'
    });
    
    
    /* =================================
        Mobile Menu
    =================================== */
                
    
    $.slidebars({
    siteClose: false // true or false
    });
                    
    $(".sb-menu a").click(function(){
        $.slidebars.close()
        section = $(this).attr('href')
        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 2000);
    })
    
    
    
    
    /* ===========================================================
        Equal-Height Columns
    ============================================================== */
    
    $(document).ready(function() {
        setHeight('.equal_height_columns');
    });
    
    var maxHeight = 0;
    
    function setHeight(column) {
        //Get all the element with class = col
        column = $(column);
        //Loop all the column
        column.each(function() {
            //Store the highest value
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();;
            }
        });
        //Set the height
        column.height(maxHeight);
    }
    
    
    
    
    /* ===========================================================
        MAKES AND MODELS
    ============================================================== */
    
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        nav: false,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
    
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    })
    
    
    
    
    /* ===========================================================
        REWIEV ABOUT US
    ============================================================== */
    $('.rewiev_about_us').owlCarousel({
        loop: true,
    
    
        dots: true,
        nav: false,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
    
    
            },
            667: {
                items: 1
            },
            1025: {
                items: 1
            }
        }
    })
    
    
    
    
    /* =================================
        QUOTE
    =================================== */
    $('.quote_slider').owlCarousel({
        dots: true,
        loop: true,
        nav: false,
        items: 1
    })
    
    
    /* =================================
        home v2
    =================================== */
    $('.home_v2').owlCarousel({
        dots: false,
        autoHeight: false,
        nav: true,
        loop: true,
        items: 1,
        responsiveClass: true,
        responsive: {
            0: {
                dots: true,
                nav: false
            },
            768: {
                dots: false
            }
        }
    })
    
    /* =================================
        home v4
    =================================== */
    $('.home_v4').owlCarousel({
        dots: false,
        autoHeight: false,
        nav: true,
        loop: true,
        items: 1
    })
    
    /* =================================
        home v4
    =================================== */
    $('.testimonials').owlCarousel({
        dots: true,
        autoHeight: false,
        nav: false,
        loop: true,
        items: 1
    })
    
    
    /* =================================
        Accordion home page 
    =================================== */
    $('.populyarn__questions-list > li').click(function() {
        $(this).toggleClass('active').children('.populyarn__questions-li-hide').slideToggle(300);
    }); // .click
    
    
    
    /* =================================
        Accordion shortcodes
    =================================== */
    $('.accordion > .block').click(function() {
        $(this).toggleClass('active').children('.accordion_hide').slideToggle(300);
    }); // .click
    
    
    
    
    /* ==========================================================================
      Product statistics counter
      ========================================================================== */
    $('.count').counterUp({
        delay: 10, // the delay time in ms
        time: 2000 // the speed time in ms
    });
    
    /* ==========================================================================
     Tabs
     ========================================================================== */
    
    // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();
    
    /* if in tab mode */
    $("ul.tabs li").click(function() {
    
        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
    
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
    
        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
    
    });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function() {
    
        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();
    
        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");
    
        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });
    
    
    /* Extra class "tab_last" 
           to add border to right side
           of last tab */
    $('ul.tabs li').last().addClass("tab_last");
    
    
    
    
    /* ==========================================================================
     Pop up and Lighbox 
     ========================================================================== */
    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        callbacks: {
            change: function() {
                if (this.isOpen) {
                    this.wrap.addClass('mfp-open');
                }
            },
            beforeOpen: function() {
                // just a hack that adds mfp-anim class to markup 
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
    
    
    $(function() {
        $('.popup-modal').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username'
        });
        $(document).on('click', '.popup-modal-dismiss', function(e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });
    
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
    
        fixedContentPos: false
    });
    
    /* =================================
        Timer 
    =================================== */
    
    timer();
    
    function timer() {
        var now = new Date();
        var newDate = new Date("November,14,2018 23:59:59");
        var totalRemains = (newDate.getTime() - now.getTime());
        if (totalRemains > 1) {
            var Days = (parseInt(parseInt(totalRemains / 1000) / (24 * 3600)));
            var Hours = (parseInt((parseInt(totalRemains / 1000) - Days * 24 * 3600) / 3600));
            var Min = (parseInt(parseInt((parseInt(totalRemains / 1000) - Days * 24 * 3600) - Hours * 3600) / 60));
            var Sec = parseInt((parseInt(totalRemains / 1000) - Days * 24 * 3600) - Hours * 3600) - Min * 60;
            if (Days < 10) {
                Days = "0" + Days
            }
            if (Hours < 10) {
                Hours = "0" + Hours
            }
            if (Min < 10) {
                Min = "0" + Min
            }
            if (Sec < 10) {
                Sec = "0" + Sec
            }
            $(".day").each(function() {
                $(this).text(Days);
            });
            $(".hour").each(function() {
                $(this).text(Hours);
            });
            $(".min").each(function() {
                $(this).text(Min);
            });
            $(".sec").each(function() {
                $(this).text(Sec);
            });
            setTimeout(timer, 1000);
        }
    }
    
    
    
    
    /* =================================
        Animation 
    =================================== */
    
    window.sr = ScrollReveal();
    
    
    
    //home
     sr.reveal('.animation #home .title-gold', {
       origin   : "bottom",
            distance : "64px",
            duration : 900,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
     sr.reveal('.animation #home .subtitle-gold', {
       origin   : "top",
            distance : "64px",
            duration : 900,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
    
    
    
     sr.reveal('.animation #section-2 .title-black', {
       origin   : "bottom",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
     sr.reveal('.animation #section-2 .subtitle-black', {
      origin   : "top",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
         
     
    
    
    
    
     sr.reveal('.animation #section-3 .title-white', {
       origin   : "bottom",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
     sr.reveal('.animation #section-3 .subtitle-white', {
      origin   : "top",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
    
     sr.reveal('.animation #section-4 .title-black', {
       origin   : "bottom",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
     sr.reveal('.animation #section-4 .subtitle-black', {
      origin   : "top",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
    
    
    
    
     sr.reveal('.animation #section-5 .popup_title', {
       origin   : "bottom",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
     sr.reveal('.animation #section-5 .popup_subtitle', {
      origin   : "top",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
    
    
    
     sr.reveal('.animation #section-6 .title-black', {
       origin   : "bottom",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
     sr.reveal('.animation #section-6 .subtitle-black', {
      origin   : "top",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
    
    
    
     sr.reveal('.animation #section-7 .title-black', {
       origin   : "bottom",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
     sr.reveal('.animation #section-7 .subtitle-black', {
      origin   : "top",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
    
    
     sr.reveal('.animation #what-we-do .title-black', {
       origin   : "bottom",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
     sr.reveal('.animation #what-we-do .subtitle-black', {
      origin   : "top",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
    
     sr.reveal('.animation #section-9 .title-white', {
       origin   : "bottom",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
     sr.reveal('.animation #section-9 .subtitle-white', {
      origin   : "top",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
    
     sr.reveal('.animation #section-10 .title-black', {
       origin   : "bottom",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
     sr.reveal('.animation #section-10 .subtitle-black', {
      origin   : "top",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
    
     sr.reveal('.animation #section-11 .title-black', {
       origin   : "bottom",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
     sr.reveal('.animation #section-11 .subtitle-black', {
      origin   : "top",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
    
     sr.reveal('.animation #section-12 .title-black', {
       origin   : "bottom",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
     sr.reveal('.animation #section-12 .subtitle-black', {
      origin   : "top",
            distance : "32px",
            duration : 300,
            delay    : 400,
            scale    : 1,
            reset: true
    
    }, 400);
    
    
    
    
    
    
    
    
    //Our services
    
    //title
    sr.reveal('.animation .service .animation_fade_in', {
        scale: 0,
        easing: 'linear',
        reset: false,
        mobile: false
    }, 100);
    //block
    sr.reveal('.animation .service .animation_fade_in_block', {
        scale: 0,
        easing: 'linear',
        reset: false,
        mobile: false
    
    }, 200);
    
    
    //ADVANTAGES 
    // title
    sr.reveal('.advantages .animation_fade_in', {
        scale: 0,
        easing: 'linear',
        reset: false,
        mobile: false
    }, 100);
    sr.reveal('.advantages .animation_fade_in_block', {
        reset: false,
        distance: '90px',
        easing: 'linear',
        mobile: false
    
    }, 200);
    
    
    
    //BLOG 
    // title
    sr.reveal('.animation .blog_home .animation_fade_in', {
        scale: 0,
        easing: 'linear',
        reset: false,
        mobile: false
    }, 100);
    sr.reveal('.animation .blog_home .animation_fade_in_block', {
        reset: false,
        distance: '90px',
        easing: 'linear',
        mobile: false
    
    }, 200);
    
    
    
    //call_to_action_home
    // title
    sr.reveal('.animation .call_to_action_home .animation_fade_in', {
        scale: 0,
        easing: 'linear',
        reset: false,
        mobile: false
    }, 100);
    
    
    //More about us
    // title
    sr.reveal('.animation .more-about-us .animation_fade_in', {
        scale: 0,
        easing: 'linear',
        reset: false,
        mobile: false
    }, 100);
    //block
    sr.reveal('.animation .more-about-us .animation_fade_in_block', {
        reset: false,
        distance: '90px',
        easing: 'linear',
        mobile: false
    
    }, 200);
    
    
    
    //REPAIR MAKES 
    //title
    sr.reveal('.animation .all_services .animation_left_to_right', {
        origin: 'right',
        scale: 0,
        easing: 'linear',
        reset: false,
        mobile: false
    
    }, 100);
    //all marks
    sr.reveal('.animation .all_services .animation_fade_in', {
        reset: false,
        distance: '90px',
        easing: 'linear',
        mobile: false
    }, 100);
    
    
    
    
    //GET OVER 150 CAR REPAIR SERVICES
    
    
    //title
    sr.reveal('.animation .what-we-do .animation_fade_in', {
        scale: 0,
        easing: 'linear',
        reset: false,
        mobile: false
    }, 100);
    
    //HOW CAN WE HELP
    //what-we-do big left â„–1
    sr.reveal('.animation .what-we-do-block .animation_left_to_right_1', {
        origin: 'left',
        scale: 0,
        opacity: 0,
        viewFactor: 0.5,
        easing: 'linear',
        reset: false,
        mobile: false
    }, 200);
    
    //what-we-do big right â„–1
    sr.reveal('.animation .what-we-do-block .animation_right_to_left_1', {
        origin: 'right',
        scale: 1,
        opacity: 0,
        viewFactor: 0.5,
        easing: 'linear',
        reset: false,
        mobile: false
    }, 200);
    
    
    //what-we-do big left â„–2
    sr.reveal('.animation .what-we-do-block .animation_left_to_right_2', {
        origin: 'left',
        scale: 0,
        opacity: 0,
        viewFactor: 0.5,
        easing: 'linear',
        reset: false,
        mobile: false
    }, 200);
    
    //what-we-do big right â„–2
    sr.reveal('.animation .what-we-do-block .animation_right_to_left_2', {
        origin: 'right',
        scale: 1,
        opacity: 0,
        viewFactor: 0.5,
        easing: 'linear',
        reset: false,
        mobile: false
    }, 200);
    
    
    
    //what-we-do big left â„–3
    sr.reveal('.animation .what-we-do-block .animation_left_to_right_3', {
        origin: 'left',
        scale: 0,
        opacity: 0,
        viewFactor: 0.5,
        easing: 'linear',
        reset: false,
        mobile: false
    }, 200);
    
    //what-we-do big right â„–3
    sr.reveal('.animation .what-we-do-block .animation_right_to_left_3', {
        origin: 'right',
        scale: 1,
        opacity: 0,
        viewFactor: 0.5,
        easing: 'linear',
        reset: false,
        mobile: false
    }, 200);
    
    
    
    //what-we-do big left â„–4
    sr.reveal('.animation .what-we-do-block .animation_left_to_right_4', {
        origin: 'left',
        scale: 0,
        opacity: 0,
        viewFactor: 0.5,
        easing: 'linear',
        reset: false,
        mobile: false
    }, 200);
    
    //what-we-do big right â„–4
    sr.reveal('.animation .what-we-do-block .animation_right_to_left_4', {
        origin: 'right',
        scale: 1,
        opacity: 0,
        viewFactor: 0.5,
        easing: 'linear',
        reset: false,
        mobile: false
    }, 200);
    
    
    
    
    // block
    sr.reveal('.animation .what-we-do .animation_fade_in_block', {
        reset: false,
        distance: '90px',
        easing: 'linear',
        mobile: false
    }, 300);
    
    
    
    //HOW CAN WE HELP
    //title
    sr.reveal('.animation .formCapture  .animation_left_to_right', {
        origin: 'left',
        scale: 0,
        easing: 'linear',
        reset: false,
        mobile: false
    
    }, 100);
    
    
    
    //WHY CHOOSE CERTIFIED SERVICE?
    //title
    sr.reveal('.animation .why_choose_certified_service .animation_fade_in', {
        scale: 0,
        easing: 'linear',
        reset: false,
        mobile: false
    }, 100);
    //accprdion title
    sr.reveal('.animation .why_choose_certified_service  .animation_left_to_right', {
        origin: 'left',
        scale: 0,
        easing: 'linear',
        reset: false,
        mobile: false
    
    }, 200);
    
    
    //REWIEV ABOUT US
    //title
    sr.reveal('.animation .rewiev .animation_fade_in', {
        scale: 0,
        easing: 'linear',
        reset: false
    }, 100);
    //block
    sr.reveal('.animation .rewiev  .animation_fade_in_block', {
        scale: 0,
        easing: 'linear',
        reset: false,
        mobile: false
    
    }, 100);
    
    
    
    
    //WE SERVICE MOST MAKES AND MODELS
    //title
    sr.reveal('.animation .brands .animation_fade_in', {
        scale: 0,
        easing: 'linear',
        reset: false,
        mobile: false
    }, 100);
    //block
    sr.reveal('.brands  .animation_fade_in_block', {
        scale: 0,
        easing: 'linear',
        reset: false,
        mobile: false
    
    }, 200);
    
    
    
    //CONTACTS US
    //title
    sr.reveal('.animation .contact .animation_fade_in', {
        scale: 0,
        easing: 'linear',
        reset: false,
        mobile: false
    }, 100);
    //block
    sr.reveal('.animation .contact  .animation_fade_in_block', {
        scale: 0,
        easing: 'linear',
        reset: false,
        mobile: false
    
    }, 200);
    
    
    
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
    
    
    
    /* ==========================================================================
     Contact form 1
     ========================================================================== */
    
    
    
        $("#submit_btn").click(function() {
    
            var proceed = true;
            //simple validation at client's end
            //loop through each field and we simply change border color to red for invalid fields       
            $("#contact_form input[required=true], #contact_form textarea[required=true]").each(function() {
                $(this).css('border-color', '');
                if (!$.trim($(this).val())) { //if this field is empty 
                    $(this).css('border-color', 'red'); //change border color to red   
                    proceed = false; //set do not proceed flag
                }
                //check invalid email
                var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if ($(this).attr("type") == "email" && !email_reg.test($.trim($(this).val()))) {
                    $(this).css('border-color', 'red'); //change border color to red   
                    proceed = false; //set do not proceed flag              
                }
            });
    
            if (proceed) //everything looks good! proceed...
            {
                //get input field values data to be sent to server
                post_data = {
                    'user_name': $('input[name=name]').val(),
                    'user_email': $('input[name=email]').val(),
    
                    'phone_number': $('input[name=phone]').val(),
                    'subject': $('select[name=subject]').val(),
                    'msg': $('textarea[name=message]').val()
                };
    
                //Ajax post data to server
                $.post('./php/contact.php', post_data, function(response) {
                    if (response.type == 'error') { //load json data from server and output message     
                        output = '<div class="error">' + response.text + '</div>';
                    } else {
                        output = '<div class="success">' + response.text + '</div>';
                        //reset values in all input fields
                        $("#contact_form  input[required=true], #contact_form textarea[required=true]").val('');
                        $("#contact_form #contact_body").fadeOut(); //hide form after success
                    }
                    $("#contact_form #contact_results").hide().html(output).slideDown();
                }, 'json');
            }
        });
    
        //reset previously set border colors and hide all message on .keyup()
        $("#contact_form  input[required=true], #contact_form textarea[required=true]").keyup(function() {
            $(this).css('border-color', '');
            $("#contact_results").fadeOut();
        });
    
    
        $("#submit_btn").click(function(e) {
            e.preventDefault();
            //Rest of your code
        });
    
    
    
    
        /* ==========================================================================
         Contact form 2
         ========================================================================== */
    
    
        $("#submit_btn_2").click(function() {
    
            var proceed = true;
            //simple validation at client's end
            //loop through each field and we simply change border color to red for invalid fields       
            $("#contact_form_2 input[required=true], #contact_form_2 textarea[required=true]").each(function() {
                $(this).css('border-color', '');
                if (!$.trim($(this).val())) { //if this field is empty 
                    $(this).css('border-color', 'red'); //change border color to red   
                    proceed = false; //set do not proceed flag
                }
                //check invalid email
                var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if ($(this).attr("type") == "email" && !email_reg.test($.trim($(this).val()))) {
                    $(this).css('border-color', 'red'); //change border color to red   
                    proceed = false; //set do not proceed flag              
                }
            });
    
            if (proceed) //everything looks good! proceed...
            {
                //get input field values data to be sent to server
                post_data = {
                    'user_name': $('#contact_form_2 input[name=name]').val(),
                    'user_email': $('#contact_form_2 input[name=email]').val(),
    
                    'phone_number': $('#contact_form_2 input[name=phone]').val(),
                    'subject': $('#contact_form_2 select[name=subject]').val(),
                    'msg': $('#contact_form_2 textarea[name=message]').val()
                };
    
                //Ajax post data to server
                $.post('./php/contact.php', post_data, function(response) {
                    if (response.type == 'error') { //load json data from server and output message     
                        output = '<div class="error">' + response.text + '</div>';
                    } else {
                        output = '<div class="success">' + response.text + '</div>';
                        //reset values in all input fields
                        $("#contact_form_2 input[required=true], #contact_form_2 textarea[required=true]").val('');
                        $("#contact_form_2 #contact_body_2").fadeOut("fast"); //hide form after success
                    }
                    $("#contact_form_2 #contact_results_2").hide().html(output).slideDown();
                }, 'json');
            }
        });
    
        //reset previously set border colors and hide all message on .keyup()
        $("#contact_form_2  input[required=true], #contact_form_2 textarea[required=true]").keyup(function() {
            $(this).css('border-color', '');
            $("#contact_results_2").fadeOut("fast");
        });
    
    
        $("#submit_btn_2").click(function(e) {
            e.preventDefault();
            //Rest of your code
    
        });
    
    
    
    
        /* ==========================================================================
        How can we help - Contact form 3
         ========================================================================== */
    
    
        $("#submit_btn_3").click(function() {
    
            var proceed = true;
            //simple validation at client's end
            //loop through each field and we simply change border color to red for invalid fields       
            $("#contact_form_3 input[required=true], #contact_form_3 textarea[required=true]").each(function() {
                $(this).css('border-color', '');
                if (!$.trim($(this).val())) { //if this field is empty 
                    $(this).css('border-color', 'red'); //change border color to red   
                    proceed = false; //set do not proceed flag
                }
                //check invalid email
                var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if ($(this).attr("type") == "email" && !email_reg.test($.trim($(this).val()))) {
                    $(this).css('border-color', 'red'); //change border color to red   
                    proceed = false; //set do not proceed flag              
                }
            });
    
            if (proceed) //everything looks good! proceed...
            {
                //get input field values data to be sent to server
                post_data = {
                    'user_name': $('input[name=name]').val(),
                    'user_email': $('input[name=email]').val(),
    
                    'phone_number': $('input[name=phone]').val(),
                    'subject': $('select[name=subject]').val(),
                    'msg': $('textarea[name=message]').val()
                };
    
                //Ajax post data to server
                $.post('./php/contact.php', post_data, function(response) {
                    if (response.type == 'error') { //load json data from server and output message     
                        output = '<div class="error">' + response.text + '</div>';
                    } else {
                        output = '<div class="success">' + response.text + '</div>';
                        //reset values in all input fields
                        $("#contact_form_3  input[required=true], #contact_form_3 textarea[required=true]").val('');
                        $("#contact_form_3 #contact_body").fadeOut("fast"); //hide form after success
                    }
                    $("#contact_form_3 #contact_results").hide().html(output).slideDown();
                }, 'json');
            }
        });
    
        //reset previously set border colors and hide all message on .keyup()
        $("#contact_form_3  input[required=true], #contact_form_3 textarea[required=true]").keyup(function() {
            $(this).css('border-color', '');
            $("#contact_results").fadeOut("fast");
        });
    
    
        $("#submit_btn_3").click(function(e) {
            e.preventDefault();
            //Rest of your code
    
        });
    
    
    });
    
    
    
    });
    
    