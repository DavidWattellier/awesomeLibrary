/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("books", function (table) {
        table.increments("id").primary(); // Set this column as the primary key
        table.string("title", 32).notNullable();
        table.string("author_first", 32);
        table.string("author_last", 32).notNullable();
        table.string("genre", 32);
        table.integer("pages");
        table.string("description", 256);
        table.string("publisher", 32);
        table.string("ISBN", 32);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTable("books");
};
