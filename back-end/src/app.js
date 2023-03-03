import cors from "cors";
import express from "express";

import LoginController from './controller/LoginController.js'
import ProdutoController from './controller/ProdutoController.js'
import PaginasController from './controller/PaginasController.js'

import PaginasDAO from './DAO/paginas.js'
import ProdutoDAO from './DAO/produto.js'
import LoginDAO from './DAO/login.js'


const app = express()
app.use(cors())
app.use(express.json())

PaginasDAO.configurar()
ProdutoDAO.configurar()
LoginDAO.configurar()

LoginController.routes(app)
ProdutoController.routes(app)
PaginasController.routes(app)

export default app