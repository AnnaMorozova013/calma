const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')

const saltRounds = 10


router.post('/login', (req, res, next) => {
	const { username, password } = req.body;
	// do we have a user with that username in the database
	User.findOne({ username: username })
		.then(userFromDB => {
			if (userFromDB === null) {
				// username is not correct -> show login 
				res.status(400).json({ message: 'invalid credentials' })
			}
			// username is correct
			// check the password against the hash in the database
			// compareSync() -> true or false
			if (bcrypt.compareSync(password, userFromDB.password)) {
				// it matches -> credentials are correct -> user get's logged in
				// req.session.<some key (usually 'user')>
				req.session.user = userFromDB
				res.status(200).json(userFromDB)
			} else {
				// password is not correct -> show login again
				res.status(400).json({ message: 'invalid credentials' })
			}
		})
});

router.post('/signup', (req, res, next) => {

	const { username, password } = req.body
	// is the password 4 + characters
	if (password.length < 4) {
		// validation failed -> we show the signup form again with a message
		res.status(400).json({ message: 'Your password needs to be minimum 4 charachters long' })
		return;
	}
	// is the username not empty
	if (username.length === 0) {
		res.status(400).json({ message: 'Your username cannot be empty' })
		return
	}
	// validation (format) passed
	// do we already have a user with that username?
	User.findOne({ username: username })
		.then(userFromDB => {
			// if there is a user
			if (userFromDB !== null) {
				res.status(400).json({ message: 'Your username is already taken' })
			} else {
				// the username can be used
				// we hash the password 
				const salt = bcrypt.genSaltSync(saltRounds);
				const hash = bcrypt.hashSync(password, salt)
				// create the user
				User.create({ username: username, password: hash })
					.then(createdUser => {
						//log the user in
						req.session.user = createdUser;
						res.status(200).json(createdUser);
					})
					.catch(err => next(err))
			}
		})
});

router.get('/loggedin', (req, res, next) => {
	const user = req.session.user;
	res.json(user)
});

router.delete('/logout', (req, res, next) => {
	req.session.destroy();
	res.status(200).json({ message: 'successful logout' })
}
)

module.exports = router;