
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('user', function(table) {
      table.increments('id').primary();
      table.string('username');
      table.string('password');

      table.timestamps();
    }),

    knex.schema.createTable('posts', function(table) {
      table.increments('id').primary();

      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {

};
