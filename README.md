# express-body-trimmer

Express middleware to trim request body

### Dependencies

Requires [body-parser](https://github.com/expressjs/body-parser) middleware

### Installation

```shell
npm i express-body-trimmer
```

### How to use

```shell
const trimmer = require('express-body-trimmer');
const bodyParser = require('body-parser');

app.use(bodyParser());
app.use(trimmer());
```
