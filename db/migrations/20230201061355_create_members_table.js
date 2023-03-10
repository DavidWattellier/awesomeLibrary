/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("members", function (table) {
        table.increments("id").primary(); // Set this column as the primary key
        table
          .string("email", 32)
          .unique() // This is a constraint that prevents duplicate emails in the table
          .notNullable()
          .index(); // Adding an index makes searching by email faster
        table.string("first_name", 32);
        table.string("last_name", 32).notNullable();
        table.string("address", 64);
        table.string("city", 32);
        table.string("region", 32);
        table.string("postal_code", 16);
        table.string("phone_number", 16).notNullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("members");
  
};
