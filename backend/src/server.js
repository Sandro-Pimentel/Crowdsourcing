const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const authRoutes = require('./routes/auth')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/oncode", {
    useNewUlrPerser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB Connected")
}).catch((error) => {
    console.log(error.message)
})

const PORT = process.env.port || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
