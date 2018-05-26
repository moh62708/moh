$(function () {
  'use strict';
  $(window).scroll(function () {
    window.console.log($('.navbar').height());
    window.console.log($(window).scrollTop());  
  })
})
