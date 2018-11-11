# express-body-trimmer

Express middleware to trim request body

### Dependencies

Requires `https://www.npmjs.com/package/body-parser middleware`.

### Installation

npm i express-body-trimmer

### How to use

```shell
const trimmer = require('express-body-trimmer');
const bodyParser = require('body-parser');

app.use(bodyParser());
app.use(trimmer());
```
