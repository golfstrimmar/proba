//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import $ from "jquery";


$(document).ready(function () {

  // $(".popup").fadeOut(1);
  $(".popup__init").on("click", function () {
    $(".modal").fadeIn(200);
  });
  $(".icon-close2").on("click", function () {
    $(".modal").fadeOut(200);
  });
  $(".popup__overlay").on("click", function () {
    $(".modal").fadeOut(200);
  });
});

