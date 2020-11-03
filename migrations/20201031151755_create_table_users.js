
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('Id').primary()
        table.string('nome').notNull()        
        table.string('email').notNull().unique()
        table.string('password').notNull()

    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
