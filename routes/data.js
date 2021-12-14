const router = require('express').Router();
const Data = require('../models/Data')

router.post('/addMood', (req, res, next) => {
    username = req.session.user.username
    emotion = req.body.emotion
    console.log(username, emotion)
    Data.create({ username: username, mood: emotion, sleep: '', social: '',  food: '', sport: '', work: '', journal: '' })
}
)


router.post('/addSurvey', (req, res, next) => {

}
)

router.post('/addJournal', (req, res, next) => {

}
)

module.exports = router;