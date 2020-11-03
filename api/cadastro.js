module.exports = app => {
   
    // Metodo para listar todos
    const getAll = ('/', (req, res, next) => {
        app.db('cadastro')
        //.where({ userId: req.user.id })
            .then((dados) => {
                res.send(dados);
            }, next)
    })

     // Metodo para gravar    
    const save = (req, res) => {
       // req.body.Id = req.user.id
        console.log(req.userId)
        app.db('cadastro')
            .insert(req.body)
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

   //Busca por Id
  const getById = ('/get/:id', (req, res, next) => {
    const {id} = req.params;
    app.db('cadastro')
    .where('id', id)
    .first()
    .then((dados)=>{
        if(!dados)return res.send(new err.BadRequestError('Nada foi encontrado'))
        res.send(dados);
    }, next)
   
  }); 

  // Metodo para Alterar
  const put = ('/update/:id', (req, res, next) => {

    const {id} = req.params;

    app.db('cadastro')

    .where('id', id)

    .update(req.body)

    .then((dados)=>{
        if(!dados)return res.send(new err.BadRequestError('Erro!!!'))
        res.send('Alterado com sucesso!!!');
    }, next)
   
  }); 

    // Metodo para Apagar     
    const del = ('/delete/:id', (req, res, next) => {
        const { id } = req.params;
        app.db('cadastro')
            .where('id', id)
            .delete()
            .then((dados) => {
                if (!dados) return res.send(new err.BadRequestError('Nada foi encontrado'))
                res.send('Excluido com sucesso!!!');
            }, next)

    });   
    

    return { getAll, save, del, getById, put }
}