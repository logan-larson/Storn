const express = require('express');
const session = require('cookie-session');
const app = express();
const port = process.env.port || 5000;

const cookieSecret = 'thisisthecookiesecret';

const mongoose = require('mongoose');

app.use(
  session({
    secret: cookieSecret,
  })
);

const authRouter = require('./routes/auth-route');
const userRouter = require('./routes/user-route');
const projectRouter = require('./routes/project-route');

app.use('/', authRouter);
app.use('/', userRouter);
app.use('/', projectRouter);

mongoose
  .connect(
    'mongodb+srv://admin:u9.yj8MFm6KpT8m@storn.9duq1.mongodb.net/Storn?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then((client) => {
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));

module.exports = app;
