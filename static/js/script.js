$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 50) {
      $(".header").css("background-color", "rgba(255,255,255,0.85)");
    } else {
      $(".header").css("background-color", "rgba(255,255,255,0)");
    }
  });

  // Add minus icon for collapse element which
  // is open by default
  $(".collapse.show").each(function () {
    $(this).prev(".card-header").find("i").attr("data-feather", "plus");
    console.log($(this).prev(".card-header").find("i"));
  });

  // Toggle plus minus icon on show hide
  // of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this).prev(".card-header").find("#plus_icon").attr("data-feather", "plus");;
      console.log($(this).prev(".card-header").find("#plus_icon"));
    })
    .on("hide.bs.collapse", function () {
      $(this).prev(".card-header").find("#plus_icon").attr("data-feather", "minus");
    });

    $(".join-community").click(function () {
        window.location.href="https://t.me/+R4xPtKA62lIyNTRk";
    })

  $(".logo").click(function () {
    // window.location.href=window.location.hostname;
  });
});
