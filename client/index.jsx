import React from 'react';
import ReactDom from 'react-dom';
import Info from './components/info';

const $ = require('jquery');

let url = window.location.href;
if (url.indexOf('=') !== -1) {
  url = url.slice(url.indexOf('=') + 1);
} else {
  url = 1;
}

const settings = {
  url: `http://18.144.89.238:3002/api/info-section/${url}`,
  method: 'GET',
  timeout: 0,
};

$.ajax(settings).done((response) => {
  ReactDom.render(<Info entry={JSON.parse(response)} />, document.getElementById('info-section'));
});
