import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
var config = require('./webpack.config');

import React from 'react';
import ReactDom from 'react-dom/server';
import Component from './src/entry';

import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from './src/shared/routes';

let app = express();
const port = 3000;

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(express.static(path.join(__dirname, 'dist')));

app.use((request, response) => {
  const location = createLocation(request.url);
  match({routes, location}, (err, redirectLocation, renderProps) => {
    if(err){
      console.error(err);
      return response.status(500).end('Internal server error.');
    }
    if(!renderProps) return response.status(404).end('Not found.');
    const InitialComponent = (
      <RoutingContext {...renderProps} />
    );
    const componentHTML = ReactDom.renderToString(InitialComponent);

    const props = {
      styles : "/styles.css",
      scripts: ["/bundle.js"],
      componentHTML: componentHTML
    }

    const element = React.createFactory(Component);
    const markup = ReactDom.renderToStaticMarkup(element(props));
    response.end(markup);

  })
});

app.listen(port, (error) => {
  if (error) console.error(error);
  else console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
})
