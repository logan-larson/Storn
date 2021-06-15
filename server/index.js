const express = require('express');
const session = require('cookie-session');
const app = express();
const port = process.env.port || 5000;

const cookieSecret = 'thisisthecookiesecret';

app.use(
  session({
    secret: cookieSecret,
  })
);

const authRouter = require('./routes/auth');

app.use('/', authRouter);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

module.exports = app;
