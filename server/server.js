const express = require('express')
app = express()

require('./config/mongoose.config')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const AllMyJokeRoutes = require('./routes/jokes.routes')
AllMyJokeRoutes(app)

app.listen(8000, () => console.log('Server listening on port 8000!'))