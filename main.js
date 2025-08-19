// var inpNum = document.getElementById("inpNum");

// function up(){
//   inpNum.stepUp(10)
// }

// function down(){
//   inpNum.stepDown(5);
// }

// // =================================

// var rangeInp = document.getElementById("rangeInp");
// var rangeVal = document.getElementById("rangeVal");

// rangeInp.addEventListener("input", function(){
//   rangeVal.innerHTML = rangeInp.value;

// })

// // function test(){
// //   console.log(typeof inpNum.valueAsNumber);

// // }

// // =======================================

// var volumeInp = document.getElementById("volumeInp");
// var timeInp = document.getElementById("timeInp");
// var speed = document.getElementById("speedSelect");
// var audio = document.querySelector("audio");

// function playAud(){
//   audio.play();
// }
// function pauseAud(){
//   audio.pause();
// }
// function stopAud(){
//   audio.load();
//   audio.pause();
// }
// function muteAud(){

//   audio.muted = ! audio.muted ;
// }

// function test(){
//   console.log(audio.volume);

// }

// volumeInp.addEventListener("input", function(){
//   audio.volume = volumeInp.value;
// })

// timeInp.addEventListener("input", function(){
//   audio.currentTime = timeInp.value;
// })

// audio.addEventListener("timeupdate", function(){
//   timeInp.value = audio.currentTime ;
// })

// speed.addEventListener("change", function(){

//   audio.playbackRate = speed.value;
// })

// window.onload = function(){
//   // console.log(audio.duration);
//   timeInp.max =  audio.duration
// }

// ==================== animation ===========================

var preloader = document.getElementsByClassName("preloader")[0];
window.onload = function () {
  setTimeout(function () {
    preloader.style.transition = "opacity 300ms";
    preloader.style.opacity = 0;
    setTimeout(function () {
      preloader.style.display = "none";
    }, 1000);
  }, 1000);
};

// ===================================

var header = document.getElementsByClassName("header")[0];

var offers = document.getElementsByClassName("offer");

var grid = document.getElementsByClassName("service-grid")[0];
var items = document.getElementsByClassName("service-item");

window.onscroll = function () {
  var scrollTop = scrollY;
  if (scrollY > 440) {
    header.classList.add("fixed-bar");
    offers[0].style.animation = "fadeInUp 1.5s forwards";
    offers[1].style.animation = "fadeInUp 1.5s .4s forwards";
    offers[2].style.animation = "fadeInUp 1.5s .8s forwards";
  } else {
    header.classList.remove("fixed-bar");
  }
  if (scrollTop > 1000) {
    if (grid) {
      grid.classList.add("in-view");
      for (var i = 0; i < items.length; i++) {
        items[i].style.animation = "fadeInUp 1s " + i * 0.3 + "s forwards";
      }
    }
  } else {
    if (grid) {
      grid.classList.remove("in-view");
      for (var i = 0; i < items.length; i++) {
        items[i].style.animation = "none";
      }
    }
  }
};

var testimonials = document.getElementsByClassName("testimonial");
var slideNumber = document.getElementById("slide-number");
var currentIndex = 0;

function showTestimonial(index, direction) {
  for (var i = 0; i < testimonials.length; i++) {
    testimonials[i].classList.remove(
      "active",
      "slide-in-left",
      "slide-in-right"
    );
    testimonials[i].style.display = "none";
  }

  // Prepare the incoming testimonial
  testimonials[index].style.display = "block"; // Show it so transition can work

  // Trigger animation
  if (direction === "right") {
    testimonials[index].classList.add("slide-in-right");
  } else if (direction === "left") {
    testimonials[index].classList.add("slide-in-left");
  }

  // Force reflow to restart animation
  void testimonials[index].offsetWidth;

  testimonials[index].classList.add("active");

  // Update slide number
  slideNumber.textContent = index + 1;
}

document.getElementById("next").onclick = function () {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex, "right");
};

document.getElementById("prev").onclick = function () {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex, "left");
};

// Initial display
showTestimonial(currentIndex, "right");

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
