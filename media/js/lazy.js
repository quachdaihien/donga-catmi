var ll = $('section');
var lh = []
var wscroll = 0;
var wh = $(window).height();

function update_offsets() {
  $('section').each(function () {
    var x = $(this).offset().top;
    lh.push(x);
  });
};

function lazy() {
  wscroll = $(window).scrollTop();
  for (i = 0; i < lh.length; i++) {
    if (lh[i] <= wscroll + (wh - 100)) {
      $('section').eq(i).addClass('loaded');
    };
  };
};

// Page Load
update_offsets();
lazy();

$(window).on('scroll', function () {
  lazy();
});

$(window).scroll(function () {
  $(".img-lazy").each(function () {
    var src = $(this).data('src');
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
    if (pos < winTop + 1900) {
      $(this).attr("src", src);
      $(this).removeClass('img-lazy');
      $(this).fadeIn(3000);
    }
  });
  $(".imgSet-lazy").each(function () {
    var src = $(this).data('srcset');
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
    if (pos < winTop + 1900) {
      $(this).attr("srcset", src);
      $(this).removeClass('imgSet-lazy');
      $(this).fadeIn(3000);
    }
  });
});
