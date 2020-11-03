const bcrypt = require('bcrypt-nodejs')

module.exports = app => {

    const obterHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })
    }

    const gravar = (req, res) => {
        obterHash(req.body.password, hash => {
            const password = hash

            app.db('users')
               .insert({
                    nome: req.body.nome, 
                    email: req.body.email, 
                    password
                })
               .then(_ => res.status(204).send())
               .catch(err => res.status(400).json(err))
               
        })
    }

    // Metodo para listar todos
    const getAllUsers = ('/', (req, res, next) => {
        app.db('users')
            .then((dados) => {
                res.send(dados);
            }, next)
    })


    return { gravar, getAllUsers }

}