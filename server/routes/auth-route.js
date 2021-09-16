// Eventually auth might be the entry point and user is funneled to
// different js files for each type of auth(eg. github, twitter, google...)

const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const session = require('cookie-session');

const user = require('../services/user-service');
router.use(express.json());

router.post('/api/v1/auth/login', async (req, res) => {
	// Find user, if no user send back error
	let u = await user.findByUsername(req.body.username);

	if (!u) {
		res.json({ err: 'Username does not exist' });
		return;
	}
	// Check if password match user's password, if not send back error
	if (u.password != req.body.password) {
		res.json({ err: 'Incorrect password' });
		return;
	}
	// Set session to user._id
	req.session.id = u._id;

	// Respond nominal
	res.json({ msg: 'Logged in' });
});

router.post('/api/v1/auth/register', async (req, res) => {
	// Check if user exists, if so send error
	let u = await user.findByUsername(req.body.username);

	if (u) {
		res.json({ err: 'Username is taken' });
		return;
	}

	// Create new user
	let userId = await user.createNewUser(req.body.username, req.body.password);

	// Set session to user._id
	console.log(userId);
	req.session.id = userId;

	// Respond nominal
	res.json({ msg: 'Registered new user' });
});

router.all('/api/v1/*', async (req, res, next) => {
	// Lookup req.session.githubId in mongo
	// If exists, allow user entry
	// else refer back to auth
	if (req.session) {
		let u = await user.findUserById(req.session.id);

		if (u) {
			next();
		} else {
			res.json({ err: 'Unauthorized' });
		}
	} else {
		res.json({ err: 'Unauthorized access' });
	}
});

router.post('/api/v1/auth/logout', (req, res) => {
	req.session = null;
	res.json({ msg: 'Logout success' });
});

router.get('/api/v1/auth/validate', async (req, res) => {
	// Validate credentials

	// Further validation required but for now it is fine

	if (req.session.id) {
		// If it exists, attempt to find user in mongo
		let u = await user.findUserById(req.session.id);
		if (u) {
			res.json({ msg: 'Authorized' });
		} else {
			res.json({ err: 'Unauthorized' });
		}
	} else {
		res.json({ err: 'Unauthorized' });
	}
});

module.exports = router;

/*
const githubClientId = 'd0a4be1267ced10edef1';
const githubClientSecret = '4a8547355631aa4dc0f55186ff56e3adad2a7c3b';
const cookieSecret = 'thisisthecookiesecret';

// Github access token
async function getAccessToken(code) {
	// Make calls to mongoose to retrieve
	// client_id and client_secret

	// @ts-ignore
	let res = await fetch('https://github.com/login/oauth/access_token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify({
			client_id: githubClientId,
			client_secret: githubClientSecret,
			code: code,
		}),
	});

	let data = await res.json();
	return data.access_token;
}

// Github user data
async function getGithubUserData(token) {
	// @ts-ignore
	let res = await fetch('https://api.github.com/user', {
		headers: {
			Authorization: `bearer ${token}`,
		},
	});

	return await res.json();
}

// Github auth entry
router.get('/api/v1/github/login', async (req, res) => {
	const id = req.query.id;

	// Setup user profile/compare user to existing users
	req.session.githubId = id;

	// Search
	let u = await user.findUserByGithubId(id);
	if (!u) {
		user.saveNewUser('logan-larson', id.toString());
	}

	// Update user token for session
	res.json({ msg: 'Valid authentication' });
});


// Github auth entry
router.post('/api/v1/github/login', async (req, res) => {
	const code = req.params.code;

	let token = await getAccessToken(code);
	let data = await getGithubUserData(token);
	// Setup user profile/compare user to existing users
	if (!data) {
		res.json({ err: 'Invalid authentication' });
	} else {
		req.session.githubId = data.id;
		req.session.token = token;

		// Search
		let u = await user.findUserByGithubId(data.id);
		if (!u) {
			user.saveNewUser(data.name, data.id.toString());
		}

		// Update user token for session
		res.json({ msg: 'Valid authentication' });
	}
});
*/
