let ul = document.querySelector("ul");

ul.addEventListener("click", function (evt) {
  if (evt.target.className == "btn-show") {
    const btn = evt.target;
    const code = btn.parentNode.querySelector(".code-block");
    if (btn.show != "show") {
      btn.show = "show";
      code.style.display = "block";
    } else {
      btn.show = "off";
      code.style.display = "none";
    }
  }
});

hljs.highlightAll();
