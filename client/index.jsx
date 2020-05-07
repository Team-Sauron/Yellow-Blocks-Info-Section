import React from 'react';
import ReactDom from 'react-dom';
// eslint-disable-next-line import/extensions
import Info from './components/info.jsx';

const $ = require('jquery');


let url = window.location.href;
if (url.indexOf('=') !== -1) {
  url = url.slice(url.indexOf('=') + 1);
} else {
  url = 1;
}

const settings = {
  url: `http://localhost:3002/api/info-section/${url}`,
  method: 'GET',
  timeout: 0,
};

$.ajax(settings).done((response) => {
  ReactDom.render(<Info entry={JSON.parse(response)} />, document.getElementById('info-section'));
});
