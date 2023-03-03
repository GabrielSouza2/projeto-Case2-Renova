import { verificarToken } from "../middleware/autorização.js"
import Produto from "../DAO/produto.js"

export default class ProdutoController {
    static routes(app) {
        app.post('/produtos', verificarToken, ProdutoController.inserir)
        app.get('/produtos', ProdutoController.listarTodos)
        app.patch('/produtos/:id',verificarToken, ProdutoController.atualizar)
        app.delete('/produtos/:id',verificarToken, ProdutoController.deletar)
    }

    static async inserir(req, res) {
        const { title, description } = req.body

        if (!title || !description) {
            return res.status(400).send({
                message: 'Os campos "doador e "item" são obrigatórios'
            })
        }

        const product = new Produto()
        product.title = title
        product.description = description

        await product.save()

        res.status(200).send({
            message: 'Item cadastrado com sucesso!',
            data: product
        })
    }

    static async listarTodos(req, res) {
        const products = await Produto.findAll()
        res.status(200).send({
            message: 'Doadores e ítens listados com sucesso',
            data: products
        })
    }

    static async atualizar(req, res) {
        const {id} = req.params

        const product = await Produto.findByProperty('id', id)
        if (!product) {
            return res.status(404).send({
                message: `O ID do doador/item ${id} não existe`
            })
        }

        const {title, description} = req.body
        if (title) {
            product.title = title
        }
        if (description) {
            product.description = description
        }

        await product.save()

        res.status(200).send({
            message: 'Alteração do doador/item feita com sucesso',
            data: product
        })
    }

    static async deletar(req, res) {
        const {id} = req.params

        const product = await Produto.findByProperty('id', id)
        if (!product) {
            return res.status(404).send({
                message: `O ID do doador/item ${id} não existe`
            })
        }

        await product.delete()

        res.status(200).send({
            message: 'doador/item deletado com sucesso'
        })
    }
}