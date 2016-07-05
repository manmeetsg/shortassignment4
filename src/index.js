import $ from 'jquery';

let num = 0;
setInterval(function() {
  $('#main').html(`You've been on this page for ${num++} seconds.`);
}, 1000);
