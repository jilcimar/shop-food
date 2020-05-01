
exports.up = function(knex) {
    return knex.schema.createTable('produtos', function(table){
        table.increments();
        table.string('name').notNullable();
        table.string('descricao').notNullable();
        table.decimal('value').notNullable();
        
        table.string('estabelecimento_id').notNullable();
        table.foreign('estabelecimento_id').references('id').inTable('estabelecimentos');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('produtos');
};
