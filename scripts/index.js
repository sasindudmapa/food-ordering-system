//navbar load handle
fetch("navbarH.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;
  });

//footer handle
fetch("footerH.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });

fetch("date.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("date-placeholder").innerHTML = data;

    const script = document.createElement("script");
    script.src = "scripts/datejs.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
  });

window.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("main-cata-img")
    .addEventListener("click", function () {
      window.location.href = "pages/product.html#signature-dish";
    });

  document.getElementById("snack-cata").addEventListener("click", function () {
    window.location.href = "pages/product.html#snack";
  });

  document.getElementById("dess-cata").addEventListener("click", function () {
    window.location.href = "pages/product.html#desserts";
  });
});
