const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000

// cors.corsOption = [
//   origin: 'https://localhost:'+PORT'
// ]

app.use(cors())
app.use(express.json())

app.get('/', 
(req, res) => {
  res.send('welcome')
})

const userRouter = require('./routes/user')
const barangRouter = require('./routes/barang')
app.use('/user', userRouter)
app.use('/barang', barangRouter)


app.listen(PORT, 
  () => { console.log('listening in https://localhost:'+PORT) })