exports.seed = function(knex, Promise) {
  return knex('dishes').insert([
    { name: 'Pizza' },
    { name: 'Pasta' },
    { name: 'Sushi' }
  ]);
};
