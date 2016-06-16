exports.up = function(knex, Promise) {
  return knex.schema.createTable("posts", function(table){
  	table.increments().primary();
    table.string("title");
  	table.text("post", "longtext");
    table.integer('user_id').unsigned().index().references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
