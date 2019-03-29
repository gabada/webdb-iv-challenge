exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { name: 'Dash onion powder' },
    { name: 'Grams Pizza Dough' },
    { name: 'Grams of Pepperoni' },
    { name: 'Cup of Mozzarella Cheese' },
    { name: 'Cup of Ravioli' },
    { name: 'Cup of Spaghetti' },
    { name: 'Tomato' },
    { name: 'Nori Sheet' },
    { name: 'Grams of Salmon' },
    { name: 'Grams of Tuna' },
    { name: 'Avocado' }
  ]);
};
