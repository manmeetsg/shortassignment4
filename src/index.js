import $ from 'jquery';
import './style.scss';

let num = 1;
setInterval(() => {
  $('#main').html(`You've been on this page for ${num++} seconds.`);
}, 1000);

const colors = ['bisque', 'darkseagreen', 'white', 'lightsteelblue'];
let index = 0;
setInterval(() => {
  $('body').css({ background: colors[index++ % 4] });
}, 10000);
