const restify = require('restify');

const err = require('restify-errors');

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'sibre'
    }
  });

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});


// Rotas

// Metodo para Listar todos os usuários
server.get('/all', (req, res, next) => {

    knex('usuario').then((dados)=>{
        res.send(dados);
    }, next)
   
  }); 

   // Metodo para listar todos
   const getAll = ('/', (req, res, next) => {
    app.db('cadastro')
        .then((dados) => {
            res.send(dados);
        }, next)
})

  //Metodo para adicionar usuário
  server.post('/create', (req, res, next) => {

    knex('usuario')
    .insert(req.body)
    .then((dados)=>{
        res.send(dados);
    }, next)
   
  }); 

    //Busca por Id
  server.get('/show/:id', (req, res, next) => {
    const {id} = req.params;
    knex('usuario')
    .where('id', id)
    .first()
    .then((dados)=>{
        if(!dados)return res.send(new err.BadRequestError('Nada foi encontrado'))
        res.send(dados);
    }, next)
   
  }); 

 // Metodo para Alterar
  server.put('/update/:id', (req, res, next) => {

    const {id} = req.params;

    knex('usuario')

    .where('id', id)

    .update(req.body)

    .then((dados)=>{
        if(!dados)return res.send(new err.BadRequestError('Erro!!!'))
        res.send('Alterado com sucesso!!!');
    }, next)
   
  }); 

  // Metodo para Apagar
  server.del('/delete/:id', (req, res, next) => {

    const {id} = req.params;

    knex('usuario')

    .where('id', id)

    .delete()

    .then((dados)=>{
        if(!dados)return res.send(new err.BadRequestError('Nada foi encontrado'))
        res.send('Excluido com sucesso!!!');
    }, next)
   
  }); 