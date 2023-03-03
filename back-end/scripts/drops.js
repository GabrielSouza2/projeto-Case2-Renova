import Paginas from "../src/DAO/paginas.js"
import Produto from "../src/DAO/produto.js"
import Login from "../src/DAO/login.js"

const models = [
    Paginas, Produto, Login
]

const drop = async () => {
    await Promise.all(models.map(model => model._drop()))
}

drop()