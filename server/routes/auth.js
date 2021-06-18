// Eventually auth might be the entry point and user is funneled to
// different js files for each type of auth(eg. github, twitter, google...)

const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const session = require('cookie-session');

const user = require('../services/user-service');

const githubClientId = 'd0a4be1267ced10edef1';
const githubClientSecret = '4a8547355631aa4dc0f55186ff56e3adad2a7c3b';
const cookieSecret = 'thisisthecookiesecret';

router.use(express.json());

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
router.post('/api/v1/auth/github/callback', async (req, res) => {
	const code = req.body.code;

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

router.all('/api/v1/*', async (req, res, next) => {
	// Lookup req.session.githubId in mongo
	// If exists, allow user entry
	// else refer back to auth

	if (req.session) {
		let u = await user.findUserByGithubId(req.session.githubId);
		if (u) {
			next();
		} else {
			res.json({ err: 'Unauthorized' });
		}
	} else {
		res.json({ err: 'Unauthorized access' });
	}
});

router.post('/api/v1/auth/github/logout', (req, res) => {
	req.session = null;
	res.json({ msg: 'Logout success' });
});

router.get('/api/v1/auth/github/validate', async (req, res) => {
	// Validate credentials

	// Further validation required but for now it is fine

	if (req.session.githubId) {
		// If it exists, attempt to find user in mongo
		let u = await user.findUserByGithubId(req.session.githubId);
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
