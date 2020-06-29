$(function () {
  initPage();
});
$(window).bind("turbolinks:load", function () {
  initPage();
});
function initPage() {
  $(".day").click(() => {
    $(".modal").modal("toggle");
  });
}
