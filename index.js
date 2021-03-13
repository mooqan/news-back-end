const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {router} = require('./routes/api');

app.use(bodyParser.json());
app.use(router);

const PORT = 5000;

app.listen(PORT, () => {
    console.log('Приложение запущено на порту: ' + PORT);
});