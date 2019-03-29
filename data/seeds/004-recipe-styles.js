exports.seed = function(knex, Promise) {
  return knex('recipe_styles').insert([
    { name: 'cheese', dish_id: '1', recipe_id: '1' },
    { name: 'pepperoni', dish_id: '1', recipe_id: '2' },
    { name: 'anchovies', dish_id: '1', recipe_id: '3' },
    { name: 'florentine', dish_id: '2', recipe_id: '4' },
    { name: 'Italian', dish_id: '2', recipe_id: '5' },
    { name: 'salmon', dish_id: '3', recipe_id: '7' },
    { name: 'vegan', dish_id: '3', recipe_id: '8' },
    { name: 'tuna', dish_id: '3', recipe_id: '9' }
  ]);
};
