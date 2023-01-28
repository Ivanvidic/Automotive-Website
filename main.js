window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top-btn").style.display = "block";
  } else {
    document.getElementById("back-to-top-btn").style.display = "none";
  }
};

document.getElementById("back-to-top-btn").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

$(document).on("click", ".smooth-scroll", function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    1000
  );
});

const hamburgerMenu = document.querySelector("#hamburger-button");
const sidebar = document.querySelector("#sidebar");
const closeBtn = document.querySelector("#close-btn");
const links = document.querySelectorAll(".nav-links a");

hamburgerMenu.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("active");
});

links.forEach(function (link) {
  link.addEventListener("click", function () {
    sidebar.classList.remove("active");
  });
});
