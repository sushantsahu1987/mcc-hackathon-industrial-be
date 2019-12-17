const express = require('express');
const bodyparser = require('body-parser');
const app = express();

const logger = require('./src/logger');
const routes = require('./src/routes');

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(logger);
routes(app);
const port = process.env.PORT || 80
app.listen(port, () => {
    console.log(`server is running on server ${port}`);
});