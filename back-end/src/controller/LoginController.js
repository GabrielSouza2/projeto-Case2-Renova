import { compareSync } from "bcrypt"
import { randomUUID } from 'crypto'
import Login from "../DAO/login.js"

export default class LoginController {
    static routes(app) {
        app.post('/login', LoginController.login)
    }

    static async login(req, res) {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).send({
                message: 'Os campos "email" e "password" são obrigatórios'
            })
        }

        const user = await Login.findByProperty('email', email)
        if (!user) {
            return res.status(404).send({
                message: 'Usuário não encontrado'
            })
        }

        const passwordsMatch = compareSync(password, user.encryptedPassword)
        if (!passwordsMatch) {
            return res.status(401).send({
                message: 'Senha incorreta'
            })
        }

        user.authToken = randomUUID()
        await user.save()

        res.status(200).send({
            token: user.authToken
        })
    }
}