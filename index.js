const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");

btn1.addEventListener("click", function () {
  const image1 = document.getElementsByClassName("blog-image");
  image1[0].classList.add("bgimg");
  btn1.onblur = function () {
    image1[0].classList.remove("bgimg");
  };
});

btn2.addEventListener("click", function () {
  const image2 = document.getElementsByClassName("showcase-image");
  image2[0].classList.add("shimg");
  btn2.onblur = function () {
    image2[0].classList.remove("shimg");
  };
});
btn3.addEventListener("click", function () {
  const image3 = document.getElementsByClassName("youtube-image");
  image3[0].classList.add("ytimg");
  btn3.onblur = function () {
    image3[0].classList.remove("ytimg");
  };
});
