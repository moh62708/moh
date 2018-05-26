$(function () {
  'use strict';
  $(window).scroll(function () {
    window.console.log($('.nav').height());
    window.console.log($(window).scrollTop());  
  });
});
