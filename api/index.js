import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = 3000

app.get('*', (req, res) => res.status(200).send({
 message: 'Boas vindas à API.'
}))

app.listen(port, () => {
 console.log(`Servidor rodando em ${port}`)
})

export default app