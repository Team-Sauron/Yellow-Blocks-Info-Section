import React from 'react';
import ReactDom from 'react-dom';
import Info from './components/info';

const $ = require('jquery');

const url = require('./components/ip');

let id = 1;
if (url.indexOf('=') !== -1) {
  id = url.slice(url.indexOf('=') + 1);
}

const settings = {
  url: `${url}/api/info-section/${id}`,
  method: 'GET',
  timeout: 0,
};

$.ajax(settings).done((response) => {
  ReactDom.render(<Info entry={JSON.parse(response)} />, document.getElementById('info-section'));
});
