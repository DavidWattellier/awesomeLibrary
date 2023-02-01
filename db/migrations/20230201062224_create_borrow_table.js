/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("borrows", function (table) {
        table
          .integer("members_id")
          .notNullable()
          .references("id")
          .inTable("members")
          .onDelete("cascade");
        table
          .integer("books_id")
          .notNullable()
          .references("id")
          .inTable("books")
          .onDelete("cascade");
        table.date("borrow_date").notNullable();
        table.date("due_date").notNullable();
        table.boolean("returned").notNullable();
        table.unique(["members_id", "books_id"], {
          indexName: "borrow_index",
        });
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("borrows");
};
