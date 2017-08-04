exports.seed = function(knex, Promise) {
  return knex("user").del().then(function() {
    return knex("user").insert([
      { id: 1, username: "secleere", password: "password" }
    ]);
  });
};
