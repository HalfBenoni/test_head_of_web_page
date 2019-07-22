
// DOM Ready
$(function() {

  var originalBGplaypen = $(".container").css("background-color"),
      x, y, xy, bgWebKit, bgMoz,
      lightColor = "rgba(255,255,255,0.15)",
      gradientSize = 65;

    // Basic Demo
    $('.container').mousemove(function(e) {

      x  = e.pageX - this.offsetLeft;
      y  = e.pageY - this.offsetTop;
      xy = x + " " + y;

      bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize + ", from(" + lightColor + "), to(rgba(255,255,255,0.0))), " + originalBGplaypen;
      bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBGplaypen + " " + gradientSize + "px)";

      $(this)
        .css({ background: bgWebKit })
        .css({ background: bgMoz });

    }).mouseleave(function() {
      $(this).css({ background: originalBGplaypen });
    });
  });
