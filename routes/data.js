const router = require('express').Router();
const Data = require('../models/Data')

router.post('/addMood', (req, res, next) => {
    username = req.session.user.username
    emotion = req.body.emotion

    Data.create({ username: username, mood: emotion, sleep: 0, social: 0, food: 0, sport: 0, work: 0, journal: '' })
}
)

router.post('/addSurvey', (req, res, next) => {
    sleep = req.body.ratingSleep
    social = req.body.ratingSocial
    food = req.body.ratingFood
    sport = req.body.ratingSport
    work = req.body.ratingWork

    Data.findOneAndUpdate({username}, { sleep: sleep, social: social , food: food, sport: sport, work: work }, { new: true })
    .catch(err => console.log(err))
}
)

router.post('/addJournal', (req, res, next) => {

}
)

module.exports = router;