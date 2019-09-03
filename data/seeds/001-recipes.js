
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipeName: 'Green Bean Salad with Lemon and Dill Recipe'},
        { recipeName: 'Caprese Salad with Tomatoes, Basil, and Mozzarella'},
        { recipeName: 'Egg Salad'}
      ]);
    });
};
