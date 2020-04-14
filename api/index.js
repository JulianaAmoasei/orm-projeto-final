import express from 'express'
import routes from './routes/index'

const app = express()
const port = 3000

routes(app)

app.listen(port, () => {
 console.log(`Servidor rodando em ${port}`)
})

export default app