# express-body-trimmer

Express middleware to trim request body

### Dependencies

Requires body-parser middleware.

### Installation

npm i express-trimmer

### How to use

const trimmer = require('express-body-trimmer');

...
// app initialization
// use body parser
...

app.use(trimmer)
