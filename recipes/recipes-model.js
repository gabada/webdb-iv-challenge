const db = require('../data/dbConfig.js');

module.exports = {
  getRecipes,
  addRecipe
};

function findById(id) {
  return db('recipes')
    .where({ id })
    .first();
}

function addRecipe(recipe) {
  return db('recipes')
    .insert(recipe)
    .then(ids => {
      return findById(ids[0]);
    });
}

function getRecipes() {
  return db('recipes');
}
