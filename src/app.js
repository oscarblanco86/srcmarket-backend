import express from 'express'

const app = express()

app.use('/api', routes)

app.get('/', (req, res) => {
  res.send('Verzo API is running')
})

export default app