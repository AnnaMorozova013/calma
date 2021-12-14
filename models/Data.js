const { Schema, model } = require("mongoose");

const dataSchema = new Schema(
    {
        username: String,
        mood: String,
        sleep: Number,
        social: Number,
        food: Number,
        sport: Number,
        work: Number,
        journal: String
    },
    {
        timestamps: true
    }
)

const Data = model("Data", dataSchema);

module.exports = Data;