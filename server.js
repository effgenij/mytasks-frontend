const express = require('express');
const app = express();

app.use(express.static('./dist/mytasks-frontend'));
app.get('/*', (req, res) =>
  res.sendFile('index.html', { root: 'dist/mytasks-frontend'}),
);
app.listen(process.env.PORT || 8080);
