const express = require('express')
const app = express()
const PORT = 5000

app.use(express.json())

const postRoutes = require('./routes/posts')
app.use('/api/posts', postRoutes)

app.get('/', (req, res) => {
  res.send('Welcome to Insta API1!')
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
