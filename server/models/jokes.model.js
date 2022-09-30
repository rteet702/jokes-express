const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    content: String,
    punch_line: String
})

const Joke = mongoose.model('Joke', JokeSchema)

module.exports = Joke