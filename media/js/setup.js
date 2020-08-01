// modal
$(".modal-btn").click(function (e) {
  e.preventDefault();
  dataModal = $(this).attr("data-modal");
  $("#" + dataModal).css({
    "display": "block"
  });
  // $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
});

$(".modal-close,.modal-closePic, .modal-bg,.registButton").click(function () {
  $(".modal").css({
    "display": "none",
  });
  // $("body").css({"overflow-y": "auto"}); //Prevent double scrollbar.
});

//popup video 
$(".modal-clip").modalVideo({
  youtube: {
    controls: 0,
    nocookie: true
  }
});
$(document).ready(function () {
  function layoutHandler() {
    if (window.innerWidth < 1025) {
      $(".mn1,.mn2,.mn3,.mn4,.mn5,.mn6,.mn7,.mn8,.mn9").click(function () {
        $(this).parent().find('.menuSubBox').toggle();
      });
    }
    if (window.innerWidth < 1025) {
      $(".LP .siteHeaderMain a").click(function () {
        $(".LP .siteHeaderMain").removeClass("active");
        $(".siteHeader-bg").removeClass("active");
      });

    }
  }
  layoutHandler();

  $(".siteHeaderNav").click(function () {
    $(".siteHeaderMain").addClass("active");
    $(".siteHeader-bg").addClass("active");
  });
  $(".siteHeader-bg").click(function () {
    $(".siteHeaderMain").removeClass("active");
    $(".siteHeader-bg").removeClass("active");
  });

  $('.temp2 .owl-carousel').owlCarousel({
    margin: 0,
    items: 2,
    autoHeight: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
      },
      414: {
        items: 1,
      },
      768: {
        items: 2
      },
      1024: {
        items: 2
      }
    }
  });
  $('.temp5 .owl-carousel').owlCarousel({
    margin: 20,
    autoHeight: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
        margin: 10
      },
      414: {
        items: 1,
        margin: 10
      },
      768: {
        items: 1
      },
      1024: {
        items: 1
      }
    }
  });

  $(document).on("scroll", onScroll);
  $(".menu a, a[href='#form'],header a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 70
      }, 900);
      return false;
      var target = this.hash,
        menu = target;
      $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $(target).offset().top - 70
      }, 70, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    }
  });

});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('.menu  a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top - 70 <= scrollPos && refElement.position().top - 50 + refElement.height() > scrollPos) {
      $('.menu  a').removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}

//menu fix
jQuery(document).scroll(function () {
  scoll_top = jQuery(document).scrollTop();
  height_header = $('.temp1').height();
  if (scoll_top >= height_header) {
    jQuery("header").addClass("menufix");
  } else {
    jQuery("header").removeClass("menufix");
  }
});

// active click
var $tabs = $('.tabs .tab');
$tabs.click(function (event) {
  var selectedClass = 'active';
  $('.tabs .tab,.tabs .tab img ').removeClass(selectedClass);
  $(event.target).addClass(selectedClass);
});