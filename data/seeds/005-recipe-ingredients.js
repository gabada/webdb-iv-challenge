exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    { quantity: '2.5', ingredient_id: '1', recipe_id: '1' },
    { quantity: '5', ingredient_id: '2', recipe_id: '2' },
    { quantity: '1', ingredient_id: '3', recipe_id: '3' },
    { quantity: '2.5', ingredient_id: '4', recipe_id: '4' },
    { quantity: '3.78', ingredient_id: '5', recipe_id: '5' },
    { quantity: '6.2', ingredient_id: '6', recipe_id: '6' },
    { quantity: '8.5', ingredient_id: '7', recipe_id: '7' },
    { quantity: '3.33', ingredient_id: '8', recipe_id: '8' },
    { quantity: '10', ingredient_id: '9', recipe_id: '9' },
    { quantity: '15', ingredient_id: '9', recipe_id: '1' }
  ]);
};
