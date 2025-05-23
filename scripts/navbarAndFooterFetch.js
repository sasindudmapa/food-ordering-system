window.addEventListener("DOMContentLoaded", () => {
  //navbar load handle
  fetch("../pages/navbar.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    });

  //footer handle
  fetch("../pages/footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});
