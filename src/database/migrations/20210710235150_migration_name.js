const knex = require('knex');

 async function up(knex) {
  return knex.schema.createTable('dados', table => {
    table.uuid('id').primary();
    table.string('nome').notNullable();
    table.string('sobrenome').notNullable();
    table.string('email').notNullable();
    table.string('gender').notNullable();
    table.string('cidade').notNullable();
    table.string('data_criacao').notNullable();
  });
}


 async function down(knex){
  return knex.schema.dropTable('dados');
}

module.exports = { up, down }


