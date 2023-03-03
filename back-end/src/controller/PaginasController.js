import { verificarToken } from "../middleware/autorização.js"
import Paginas from "../DAO/paginas.js"

export default class PaginasController {
    static routes(app) {
        app.get('/paginas/:id', PaginasController.listar)
        app.patch('/paginas/:id', verificarToken, PaginasController.atualizar)
    }

    static async listar(req, res) {
        const {id} = req.params
        const page = await Paginas.findByProperty('id', id)
        if (!page) {
            return res.status(404).send({
                message: 'Página não encontrada'
            })
        }
        res.status(200).send({
            message: 'Sucesso ao buscar página',
            data: page
        })
    }

    static async atualizar(req, res) {
        const {id} = req.params
        const {title, text} = req.body
        const page = await Paginas.findByProperty('id', id)
        if (!page) {
            return res.status(404).send({
                message: 'Página não encontrada'
            })
        }
        if (title) {
            page.title = title
        }
        if (text) {
            page.text = text
        }
        await page.save()
        res.status(200).send({
            message: 'Sucesso ao alterar dados da página',
            data: page
        })
    }
}