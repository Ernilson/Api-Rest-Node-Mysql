module.exports = app => {

  //Atenticação
  app.get('/getAll', app.api.users.getAllUsers)
  app.post('/signup', app.api.users.gravar)  
  app.post('/signin', app.api.auth.signin)
  
  // Cadastro
  app.route('/cadastro')  
  //.all(app.config.passport.authenticate())
  .post(app.api.cadastro.save)
  .get(app.api.cadastro.getAll)

  app.route('/getById/:id')
  .get(app.api.cadastro.getById)

  app.route('/update/:id')
  //.all(app.config.passport.authenticate())
  .put(app.api.cadastro.put)

  app.route('/cadastro/:id')
  .delete(app.api.cadastro.del) 

 
}