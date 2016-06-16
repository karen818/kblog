
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({full_name: 'Karen Kelly', username: 'partyb00b', img_url: 'https://s-media-cache-ak0.pinimg.com/736x/6d/fe/2f/6dfe2f1bd9348c92d6bec03bc19d7385.jpg'}),
    knex('users').insert({full_name: 'Patrick Kelly', username: 'badcop1096', img_url: 'http://orig04.deviantart.net/b014/f/2015/078/7/8/finn_s_sword_by_terahfrancisco0207-d8mdj9f.png'}),
    knex('users').insert({full_name: 'Bernie Sanders', username: 'bernBabybern', img_url: 'http://twitchy.com/wp-content/uploads/2016/03/birdie-sanders-sticker.jpg'})
  );
};
