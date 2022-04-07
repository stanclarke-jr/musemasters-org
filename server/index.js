'use strict';

const express = require("express");
const morgan = require("morgan)")
const helmet = require("helmet");

const app = express();

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
app.use(morgan('tiny'))
app.use("helmet")
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

  // Any requests for static files will go into the public folder
app.use(express.static('public'))

const PORT = 8000;

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));


