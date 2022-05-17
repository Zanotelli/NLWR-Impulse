import express from 'express'
import {controller} from "./controller";
import cors from 'cors'

// Inicializa a aplicação
const app = express()

app.use(cors())
app.use(express.json())
app.use(controller)

app.listen(8080, () => {
    console.log("HTTP server running...")
})

