import $ from 'jquery';
import './style.scss';

let num = 0;
setInterval(() => {
  $('#main').html(`You've been on this page for ${num++} seconds.`);
}, 1000);
