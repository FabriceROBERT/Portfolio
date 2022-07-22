const nav = document.querySelector("nav")
console.log(nav);
const progressBar = document.getElementsByClassName('progress-Office')[0]
const progressBar2 = document.getElementsByClassName('progress-Css')[0]
const progressBar3 = document.getElementsByClassName('progress-Js')[0]
const progressBar4 = document.getElementsByClassName('progress-Mysql')[0]
const progressBar5 = document.getElementsByClassName('progress-Php')[0]
const progressBar6 = document.getElementsByClassName('progress-Flutter')[0]


window.addEventListener("scroll", function () {

    if (window.scrollY > 120) {
        nav.style.top = "0";
    }
    else if (window.scrollY < 120) {
        nav.style.top = "-50px";
    }
    setInterval(() => {
  const computedStyle = getComputedStyle(progressBar)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  progressBar.style.setProperty('--width', width + .1)
  progressBar2.style.setProperty('--width', width + .1)
  progressBar3.style.setProperty('--width', width + .1)
  progressBar4.style.setProperty('--width', width + .1)
  progressBar5.style.setProperty('--width', width + .1)
  progressBar6.style.setProperty('--width', width + .1)
}, 5)
})



// jQuery(document).ready(function($) {

// 	'use strict';

//     var top_header = $('.parallax-content');
//     top_header.css({'background-position':'center center'}); // better use CSS

//     $(window).scroll(function () {
//     var st = $(this).scrollTop();
//     top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
//     });


//     $('body').scrollspy({ 
//         target: '.fixed-side-navbar',
//         offset: 200
//     });
// })

function reveal() {
    var reveals = document.getElementsByClassName("container reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 200;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);