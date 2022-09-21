import express from 'express'
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log('Response From Ahmed Raza: ' + req.ip);
  res.send('Response From Ahmed Raza: ' + req.ip)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})