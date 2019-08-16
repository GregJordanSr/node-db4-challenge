
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipeName: 'Green Bean Salad with Lemon and Dill Recipe'},
        {id: 2, recipeName: 'Chicken Salad'},
        {id: 3, recipeName: 'Caprese Salad with Tomatoes, Basil, and Mozzarella'}
      ]);
    });
};
