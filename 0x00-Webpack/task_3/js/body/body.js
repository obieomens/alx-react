import $ from 'jquery';
import './body.css';

$(document).ready(() => {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');

  $('body').append('<p>Copyright - Holberton School</p>');

  let count = 0;

  $('button').click(async () => {
    const _ = await import('lodash');
    count++;
    $('#count').text(`${count} clicks on the button`);
  });
});

