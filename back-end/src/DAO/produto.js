import AplicaçãoModel from "./AplicaçãoModel.js"

export default class Produto extends AplicaçãoModel {
    id; title; description;

    static configurar() {
        Produto.associar('id', 'ID')
        Produto.associar('title', 'TITLE')
        Produto.associar('description', 'DESCRIPTION')
    }
}