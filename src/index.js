const express = require('express')
const cors = require('cors');
const morgan = require('morgan');

const trackRoutes = require('./routes/tracks');

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(cors());

// routes
app.use('/tracks', trackRoutes);
const port = 3000;
app.listen(process.env.PORT || port);
console.log('Server on port', port);