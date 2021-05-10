function onDiscord() {
  window.open("https://discord.gg/MKXPxcE", "_blank");
}

function playCartel() {
  window.open("https://cartel.curt.workers.dev/connect", "_blank");
}

function activeStreamers(name) {}

window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".scrollTop");

  scroll.classList.toggle("active", window.scrollY > 500);
});

function scrolltToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
