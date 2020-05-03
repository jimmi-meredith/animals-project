exports.up = knex =>
  knex.schema.createTable('animals', table => {
    table.increments('id').primary()
    table.string('species')
    table.string('name')
  })

exports.down = knex => knex.schema.dropTable('animals')
