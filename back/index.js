require('dotenv').config()
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')

const router = require("./router/index")
const sequelize = require('./db')

const PORT = process.env.PORT || 4000
const app = express()



app.use(cors())
app.use(express.json())
app.use('/static',express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
// app.use("/img", express.static(path.join("back/static/img")));

app.get('/', (req, res) => {
  res.json('hello world')
})



const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () =>
      console.log('\x1b[36m%s\x1b[0m', `\nServer has been started on port ${PORT}\n`)
    )
  }catch (e) {
    console.log(e)
  }
}

start()

