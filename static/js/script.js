$(document).ready(function () {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 50, // values from 0 to 3000, with step 50ms
    duration: 2000, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 50) {
      $(".header").css("background", "rgba(255,255,255,0.85)");
      $(".header").css("backdrop-filter", "blur(10px)");
      $(".header").css("-webkit-backdrop-filter", "blur(10px)");
    } else {
      $(".header").css("background", "rgba(255,255,255,0)");
      $(".header").css("backdrop-filter", "blur(0px)");
      $(".header").css("-webkit-backdrop-filter", "blur(0px)");
    }
  });

  // // Toggle plus minus icon on show hide
  // // of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".faq-h")
        .children("#plus_icon")
        .remove();
      $(this)
        .prev(".card-header")
        .find(".faq-h")
        .append('<i data-feather="minus" id="minus_icon"></i>');
      feather.replace({ width: 60, height: 60, "stroke-width": 1 });
    })
    .on("hide.bs.collapse", function () {
      $(this);
      $(this)
        .prev(".card-header")
        .find(".faq-h")
        .children("#minus_icon")
        .remove();
      $(this)
        .prev(".card-header")
        .find(".faq-h")
        .append('<i data-feather="plus" id="plus_icon"></i>');
      feather.replace({ width: 60, height: 60, "stroke-width": 1 });
    });

  $(".join-community").click(function () {
    window.location.href = "https://t.me/+R4xPtKA62lIyNTRk";
  });

  //Change menu on click
  $(".mobile-menu").click(function () {
    if ($(".mobile-menu").children().attr("id") == "menu_icon") {
      $(this).html('<i data-feather="x" id="close_icon"></i>');
      feather.replace({ width: 60, height: 60, "stroke-width": 1 });
      $(".mobile-nav").css("display", "flex");
      $(".mobile-nav").fadeIn();
    } else {
      $(this).html('<i data-feather="menu" id="menu_icon"></i>');
      feather.replace({ width: 60, height: 60, "stroke-width": 1 });
      $(".mobile-nav").fadeOut();
    }
  });

  //Smooth scroll to div on div
  $("#route_to_modal").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#access").offset().top,
      },
      1000
    );
  });

  //Validate email and name
  $("#access_email").on("input", function () {
    var re = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var emailFormat = re.test($("#access_email").val());
    var nameFormat = $("#access_name").val();
    console.log($("#access_email").val());
    console.log($("#access_name").val().length);
    if (emailFormat && nameFormat.length > 0) {
      $("#access_button").removeClass("disabled");
    } else {
      $("#access_button").addClass("disabled");
    }
  });

  $("#access_name").on("input", function () {
    var re = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var emailFormat = re.test($("#access_email").val());
    var nameFormat = $("#access_name").val();
    console.log($("#access_email").val());
    console.log($("#access_name").val().length);
    if (emailFormat && nameFormat.length > 0) {
      $("#access_button").removeClass("disabled");
    } else {
      $("#access_button").addClass("disabled");
    }
  });

  // Early access Early access Ajax request.
  $("#access_button").click(function () {
    $.ajax({
      method: "POST",
      url: "https://braqqet-staging.herokuapp.com/api/v1/auth/earlyAccess",
      data: {
        email: $("#access_email").val(),
        full_name: $("#access_name").val(),
      },
    }).done(function (msg) {
      //On successs
      if (msg.success) {
        $("#access_button").addClass("animate-submit");
        setTimeout(function () {
          $("#access_button").html(
            '<i data-feather="check-circle" id="checkmark_icon"></i> <span>Submitted</span>'
          );
          $("#access_button").addClass("submitted");
          feather.replace({ width: 60, height: 60, "stroke-width": 1 });
        }, 1000);
        setTimeout(function () {
          $("#access_button").removeClass("animate-submit");
          $("#access_button").removeClass("submitted");
          $("#access_button").html("Get Early Access");
        }, 4000);
      } else {
         //On fail
        $("#access_button").addClass("animate-fl");
        setTimeout(function () {
          $("#access_button").html(
            '<i data-feather="frown" id="checkmark_icon"></i> <span>Failed</span>'
          );
          $("#access_button").addClass("failed");
          feather.replace({ width: 60, height: 60, "stroke-width": 1 });
        }, 1000);
        setTimeout(function () {
          $("#access_button").removeClass("animate-fl");
          $("#access_button").removeClass("failed");
          $("#access_button").html("Get Early Access");
        }, 4000);
      }
    });
  });
});
