import React from 'react';
import ReactDom from 'react-dom';
import Info from './components/info';

const $ = require('jquery');

const url = require('./components/ip');

const { href } = window.location;

const params = new URLSearchParams(href.split('?')[1]);

const id = params.get('pid') || 1;

const settings = {
  url: `${url}/api/info-section/${id}`,
  method: 'GET',
  timeout: 0,
};

$.ajax(settings).done((response) => {
  ReactDom.render(<Info entry={JSON.parse(response)} />, document.getElementById('info-section'));
});
