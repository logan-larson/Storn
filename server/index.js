const express = require('express');
const session = require('cookie-session');
const path = require('path');
const app = express();
const port = 5000;

const cookieSecret = 'thisisthecookiesecret';

const mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, 'public')));
app.use(
	session({
		secret: cookieSecret,
	})
);

const authRouter = require('./routes/auth-route');
const userRouter = require('./routes/user-route');
const classRouter = require('./routes/class-route');
const projectRouter = require('./routes/project-route');
const sessionRouter = require('./routes/session-route');

app.get('/', (req, res, next) => {
	res.status(200).sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

app.use('/', authRouter);
app.use('/', userRouter);
app.use('/', classRouter);
app.use('/', projectRouter);
app.use('/', sessionRouter);

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
