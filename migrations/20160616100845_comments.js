exports.up = function(knex, Promise) {
  return knex.schema.createTable("comments", function(table){
  	table.increments().primary();
  	table.text("comment", "longtext");
    table.integer('user_id').unsigned().index().references('users.id');
    table.integer('post_id').unsigned().index().references('posts.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
