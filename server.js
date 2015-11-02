import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
var config = require('./webpack.config');

import React from 'react';
import ReactDom from 'react-dom/server';
import Component from './src/app/entry';

let app = express();
const port = 3000;

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (request, response) => {

  let props = {
    styles : "/styles.css",
    scripts: ["/bundle.js"]
  }

  let element = React.createFactory(Component);
  let markup = ReactDom.renderToStaticMarkup(element(props));
  response.send(markup);
});

app.get('*', (request, response) => {
    response.json({
        'route': 'Page not found!'
    });
});

app.listen(port, (error) => {
  if (error) console.error(error);
  else console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
})
