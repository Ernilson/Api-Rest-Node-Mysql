
exports.up = function(knex) {
    return knex.schema.createTable('cadastro', table => {
        table.increments('id').primary()
        table.string('nome').notNull()
        table.string('endereco').notNull()
        table.string('fone').notNull()
        table.string('email').notNull()
        table.integer('userId').unsigned()
        .references('id')
           .inTable('users').notNull()
    
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cadastro')
};
