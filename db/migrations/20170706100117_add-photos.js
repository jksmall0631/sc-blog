exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("photos", function(table) {
      table.increments("id").primary();
      table.string("photo");

      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("photos")]);
};
