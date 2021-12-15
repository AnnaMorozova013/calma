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
    username = req.session.user.username
    console.log('addSurveyworks', sleep, social, food, sport, work)

    Data.find({ username }).sort({ _id: -1 }).limit(1)
        .then((foundInDB) => {
            console.log(foundInDB[0]._id.toString())
            const id = foundInDB[0]._id.toString()

            Data.findOneAndUpdate({ _id: id }, { sleep: sleep, social: social, food: food, sport: sport, work: work }, { new: true })
                .then((foundInDB) => {
                    console.log(foundInDB)
                })
        }
        )
        .catch(err => console.log(err))
}
)

router.post('/addJournal', (req, res, next) => {
    text = req.body.text
    username = req.session.user.username
    console.log('addJournalyworks', text)

    Data.find({ username }).sort({ _id: -1 }).limit(1)
        .then((foundInDB) => {
            const id = foundInDB[0]._id.toString()

            Data.findOneAndUpdate({ _id: id }, { journal: text }, { new: true })
                .then((foundInDB) => {
                    console.log(foundInDB)
                })
        }
        )
        .catch(err => console.log(err))
}
)

module.exports = router;