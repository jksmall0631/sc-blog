exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("user", function(table) {
      table.increments("id").primary();
      table.string("username");
      table.string("password");

      table.timestamps();
    }),

    knex.schema.createTable("posts", function(table) {
      table.increments("id").primary();
      table.string("photo");
      table.string("title");
      table.string("date");
      table.text("content");

      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("user"),
    knex.schema.dropTable("posts")
  ]);
};
