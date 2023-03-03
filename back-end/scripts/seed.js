import Paginas from "../src/DAO/paginas.js"
import Produto from "../src/DAO/produto.js"
import Login from "../src/DAO/login.js"

import { hashSync } from "bcrypt"

const models = [
    Paginas, Produto, Login
]

const seed = async () => {
    models.forEach(model => model.configurar())

    const page = new Paginas()
    page.title = 'Sobre'
    page.text = 'Lorem ipsum dolor sit amet.'
    const pagina = [page]

    const produtos = []
    for (let i=1; i<=1; i++) {
        const prod = new Produto()
        prod.title = `Doador ${i}`
        prod.description = `Item a ser doado ${i}`
        produtos.push(prod)
    }

    const admin = new Login()
    admin.email = "admin@t2.com"
    admin.encryptedPassword = hashSync ('admin', 6)
    const logins = [admin]

    await Paginas._seed(pagina)
    await Produto._seed(produtos)
    await Login._seed(logins)
}

seed()