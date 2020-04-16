
exports.up = function(knex) {
    return knex.recipes
      .createTable('recipes', tbl => {
        tbl.increments();
        tbl.text('Recipe', 128)
          .unique()
          .notNullable();
        tbl.integer('name')
            .unsigned()
            .notNullable()
            .references('ingredient')
            .inTable('ingredients');
        tbl.integer('quantity')
            .unsigned()
            .notNullable();
      })
      .createTable('steps', tbl => {
        tbl.increments();
        tbl.integer('step_number')
          .unsigned()
          .notNullable();
        tbl.text('instructions')
            .unsigned
            .notNullable();
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      })
      .createTable('ingredients', tbl => {
          tbl.increments();
          tbl.text('ingredient')
            .unsigned()
            .notNullable;
          tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('quantity')
            .unsigned()
            .notNullable()
            .references('quantity')
            .inTable('recipes')
      })
  };
  
  exports.down = function(knex) {
    return knex.recipes
      .dropTableIfExists('steps')
      .dropTableIfExists('recipes');
  };
  