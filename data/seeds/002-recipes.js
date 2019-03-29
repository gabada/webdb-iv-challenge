exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { name: 'Cheese', directions: 'Call the Pizza place!' },
    { name: 'Pepperoni', directions: 'Call the Pizza place!' },
    { name: 'Anchovies', directions: 'Call the Pizza place!' },
    { name: 'Florentine', directions: 'Go out for Italian' },
    { name: 'Tomato Basil', directions: 'Go out for Italian' },
    { name: 'Spaghetti', directions: 'Go out for Italian' },
    { name: 'Salmon Roll', directions: 'Grab some sushi!' },
    { name: 'Vegetable Roll', directions: 'Grab some sushi!' },
    { name: 'Tuna Avocado Roll', directions: 'Grab some sushi!' }
  ]);
};
