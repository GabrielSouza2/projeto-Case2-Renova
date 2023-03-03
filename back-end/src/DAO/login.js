import AplicaçãoModel from "./AplicaçãoModel.js"

export default class Login extends AplicaçãoModel {
    id; email; encryptedPassword; authToken;

    static configurar() {
        Login.associar('id', 'ID')
        Login.associar('email', 'EMAIL')
        Login.associar('encryptedPassword', 'ENCRYPTED_PASSWORD')
        Login.associar('authToken', 'AUTH_TOKEN')
    }
}