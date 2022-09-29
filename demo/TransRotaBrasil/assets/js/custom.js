/*--------------------- Copyright (c) 2022 -----------------------
[Master Javascript]
Project: Transport
-------------------------------------------------------------------*/

(function ($) {
    "use strict";
    var Transport = {
      initialised: false,
      version: 1.0,
      mobile: false,
      init: function () {
        if (!this.initialised) {
          this.initialised = true;
        }
        else {
          return;
        }
        /*-------------- Transport Design Functions Calling-------------------*/
        this.tp_testimonial_slide();
        this.tp_toggle_animate();
        this.pxMagnific_popup();
        this.tp_counter();
      },
  
      /*-------------- Transport Design Functions Calling ------------------------*/
  
      // /*--- Counter numbers----*/
      tp_counter:function(){
        $('.lc-counter').each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },
          {
            duration: 8000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }
          });  
        });
      },
      /*--- Testimonial Slider----*/
      tp_testimonial_slide: function () {
        var swiper = new Swiper(".tp-testimonial-slider", {
          slidesPerView: 2,
          spaceBetween: 40,
          slidesPerGroup: 2,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          }
        });
      },
      /*--- Testimonial Slider----*/
  
      /*--- Toggle Animation----*/
      tp_toggle_animate: function () {
        $(document).ready(function () {
          $(".tp-toggle").click(function () {
            $(".tp-toggle-menu").animate({
              height: 'toggle'
            });
            $(".tp-toggle-menu").show();
          });
        });
      },
      /*--- Toggle Animation----*/
  
      /*--- Input Clear on Click----*/
  
      /*--- Input Clear on Click----*/
  
     
      // magenific popup 
      pxMagnific_popup: function () {
        if ($('.view').length > 0) {
          $('.view').magnificPopup({
            type: 'image',
  
            gallery: {
              enabled: true
            }
          });
        }
      },
  
    };
  
    Transport.init();
  }(jQuery));
  
  // Contact Form Submission
  
  function checkRequire(formId, targetResp) {
    targetResp.html('');
    var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
    var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
    var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
    var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
    var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
    var check = 0;
    $('#er_msg').remove();
    var target = (typeof formId == 'object') ? $(formId) : $('#' + formId);
    target.find('input , textarea , select').each(function () {
      if ($(this).hasClass('require')) {
        if ($(this).val().trim() == '') {
          check = 1;
          $(this).focus();
          targetResp.html('You missed out some fields.');
          $(this).addClass('error');
          return false;
        } else {
          $(this).removeClass('error');
        }
      }
      if ($(this).val().trim() != '') {
        var valid = $(this).attr('data-valid');
        if (typeof valid != 'undefined') {
          if (!eval(valid).test($(this).val().trim())) {
            $(this).addClass('error');
            $(this).focus();
            check = 1;
            targetResp.html($(this).attr('data-error'));
            return false;
          } else {
            $(this).removeClass('error');
          }
        }
      }
    });
    return check;
  }
  
  $(".submitForm").on("click", function () {
    var _this = $(this);
    var targetForm = _this.closest('form');
    var errroTarget = targetForm.find('.response');
    var check = checkRequire(targetForm, errroTarget);
  
    if (check == 0) {
      var formDetail = new FormData(targetForm[0]);
      formDetail.append('form_type', _this.attr('form-type'));
      $.ajax({
        method: 'post',
        url: 'ajaxmail.php',
        data: formDetail,
        cache: false,
        contentType: false,
        processData: false
      }).done(function (resp) {
        console.log(resp);
        if (resp == 1) {
          targetForm.find('input').val('');
          targetForm.find('textarea').val('');
          errroTarget.html('<p style="color:white;">Mail has been sent successfully.</p>');
        } else {
          errroTarget.html('<p style="color:white;">Something went wrong please try again latter.</p>');
        }
      });
    }
  });