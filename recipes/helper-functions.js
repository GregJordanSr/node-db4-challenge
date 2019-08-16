const db = require('../data/db-config');

module.exports = {
    findRecipes,
};


function findRecipes() {
    return db('recipes');
};