import express from 'express'
import {controller} from "./controller";

// Inicializa a aplicação
const app = express()

// Manda o Express entender JSON
app.use(express.json())
app.use(controller)

app.listen(8080, () => {
    console.log("HTTP server running...")
})

