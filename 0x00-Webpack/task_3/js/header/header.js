import $ from 'jquery';
import './header.css';
import logo from '../../assets/holberton-logo.jpg';

console.log('Init header');

$('body').append('<div id="logo"></div>');
$('body').append('<h1>Holberton Dashboard</h1>');

// Set the logo background image
$('#logo').css({
  'background-image': `url(${logo})`,
  'background-size': '200px 200px',
  'width': '200px',
  'height': '200px'
});

