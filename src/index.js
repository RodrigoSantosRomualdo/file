const express = require('express')
const morgan = require('morgan');
const cors = require('cors');

const trackRoutes = require('./routes/tracks');
const compareTextRoutes = require('./routes/compareText')

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json())
app.use(cors());

// routes
app.use('/tracks', trackRoutes);

app.use('/compare', compareTextRoutes);

const port = 3000;
app.listen(process.env.PORT || port);
console.log('Server on port', process.env.PORT || port);