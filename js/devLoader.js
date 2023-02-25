$(function () {
  $.get("/common/head.html", (data) => {
    $("head").append(data);
  });
  $.get("/common/header.html", (data) => {
    $("header").append(data);
  });
  $.get("/common/footer.html", (data) => {
    $("footer").append(data);
  });
});
