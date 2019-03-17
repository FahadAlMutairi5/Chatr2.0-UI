import $ from "jquery";
import "./jquery.easing.min";

const fn = () => {
  // Configure tooltips for collapsed side navigation
  $(' [data-toggle="tooltip"]').tooltip({
    template:
      '<div class=" " role="tooltip" style="pointer-events: none;"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
  });
  // Toggle the side navigation
  $("#sidenavToggler").click(function(e) {
    e.preventDefault();
    $("body").toggleClass("");
    $("").addClass("collapsed");
    $("").removeClass("show");
  });
  // Force the toggled class to be removed when a collapsible nav link is clicked
  $("").click(function(e) {
    e.preventDefault();
    $("body").removeClass("");
  });
  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $("").on("mousewheel DOMMouseScroll", function(e) {
    var e0 = e.originalEvent,
      delta = e0.wheelDelta || -e0.detail;
    this.scrollTop += (delta < 0 ? 1 : -1) * 30;
    e.preventDefault();
  });
  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });
  // Configure tooltips globally
  $('[data-toggle="tooltip"]').tooltip();
  // Smooth scrolling using jQuery easing
  $(document).on("click", "a.scroll-to-top", function(event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top
        },
        1000,
        "easeInOutExpo"
      );
    event.preventDefault();
  });
};

export default fn;
