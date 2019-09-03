
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments();
    tbl
        .string('recipeName', 255)
        .notNullable();
  })
  .createTable('shopping_list', tbl => {
    tbl.increments();
    tbl
        .string('ingredients_Name', 255)
        .notNullable();
        
    tbl
        .integer('recipe_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
    tbl
        .string('amounts', 255)
        .notNullable();
  })
  .createTable('instructions', tbl => {
    tbl.increments();

    tbl
        .integer('recipe_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

      
    tbl
        .string('directions', 4000)
        .notNullable();

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('instructions')
  .dropTableIfExists('shopping_list')
  .dropTableIfExists('recipes');
};
