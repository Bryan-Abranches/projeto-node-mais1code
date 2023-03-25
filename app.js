/* Imports */

const express = require('express')
const cors = require('cors') 
const ejs = require('ejs')
const path = require('path')

const router = require('./routes')

/* Variaveis */

const app = express()
const port = 6060


/* Middlewares */

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // o faz ?

app.set('views', path.join(__dirname, "views") ) // configuração que define onde vao estar os arquivos de views pa pagina.

app.set("view engine", "ejs") // configuração para EJS 


/* routers */
app.use(router)



/* Server  */
app.listen(port, ()=>{
    console.log(`O servidor esta rodando na porta ${port}`)

})