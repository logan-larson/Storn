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

const authRouter = require('./routes/auth');

app.use('/', authRouter);

mongoose
	.connect('mongodb://localhost/storn', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then((client) => {
		app.listen(port, () => {
			console.log(`Server started at http://localhost:${port}`);
		});
	})
	.catch((err) => console.log(err));

module.exports = app;
