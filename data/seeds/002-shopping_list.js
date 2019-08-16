
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shopping_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('shopping_list').insert([
        { ingredients_Name: 'fresh green beans', recipe_id: 1, amounts: '1 1/2 pounds'},
        { ingredients_Name: 'fresh dill minced', recipe_id: 1, amounts: '3 Tbsp'},
        { ingredients_Name: 'red onion minced', recipe_id: 1, amounts: '3 Tbsp'},
        { ingredients_Name: 'Dijon mustard', recipe_id: 1, amounts: '1 1/2 Tbsp'},
        { ingredients_Name: 'olive oil', recipe_id: 1, amounts: '1 1/2 Tbsp'},
        { ingredients_Name: 'zest of lemon', recipe_id: 1, amounts: '1'},
        { ingredients_Name: 'kosher salt, divided', recipe_id: 1, amounts: '1 Tbsp + 1/2 tsp'},
        { ingredients_Name: 'juice from 1/2 lemon', recipe_id: 1, amounts: '1 1/2 Tbsp'},
        { ingredients_Name: 'freshly ground pepper', recipe_id: 1, amounts: '1 tsp'},
        { ingredients_Name: 'heirloom tomatoes', recipe_id: 2, amounts: '1 1/2 lbs'},
        { ingredients_Name: 'sea salt', recipe_id: 2, amounts: '1 tsp'},
        { ingredients_Name: 'fresh basil', recipe_id: 2, amounts: '1 bunch torn'},
        { ingredients_Name: 'fresh mozzarella', recipe_id: 2, amounts: '8 oz'},
        { ingredients_Name: 'olive oil', recipe_id: 2, amounts: '1 Tsp'},
        { ingredients_Name: 'balsamic vinegar', recipe_id: 2, amounts: 'dash'},
        { ingredients_Name: 'ground pepper', recipe_id: 2, amounts: 'dash'},
        { ingredients_Name: 'boiled eggs', recipe_id: 3, amounts: '5'},
        { ingredients_Name: 'mayonnaise', recipe_id: 3, amounts: '1/4 cup'},
        { ingredients_Name: 'salt', recipe_id: 3, amounts: 'dash'},

      ]);
    });
};
