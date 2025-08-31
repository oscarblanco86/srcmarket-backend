import express from 'express'
import router from './routes/index.js'

const app = express()

app.use('/api', router)

app.get('/', (req, res) => {
  res.send('Verzo API is running')
})

export default app