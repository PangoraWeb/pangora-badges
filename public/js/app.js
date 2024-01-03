particlesJS.load("particles-js", "/assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});

window.onload = function () {
  document.getElementById("content").classList.remove("fadeout");
};

window.onbeforeunload = function (e) {
  document.getElementById("content").classList.add("fadeout");
};

window.onpageshow = function () {
  document.getElementById("content").classList.remove("fadeout");
};
