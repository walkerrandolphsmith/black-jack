import express from 'express';
import path from 'path';

let app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (request, response) => {
  response.send("markup");
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
