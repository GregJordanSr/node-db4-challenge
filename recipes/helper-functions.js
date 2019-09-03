const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
};


function getRecipes() {
    return db('recipes');
};

function getShoppingList(recipe_id) {
    return db('recipes')
        .where({ recipe_id })
        .from('shopping_list')
        .select('ingredients_Name', 'amounts')
        .innerJoin('recipes', 'shopping_list.id', '=', 'recipes.recipe.id')
}