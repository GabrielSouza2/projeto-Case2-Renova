import AplicaçãoModel from "./AplicaçãoModel.js"

export default class Paginas extends AplicaçãoModel {
    id; title; text;

    static configurar() {
        Paginas.associar('id', 'ID')
        Paginas.associar('title', 'TITLE')
        Paginas.associar('text', 'TEXT')
    }
}