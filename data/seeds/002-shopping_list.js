
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shopping_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('shopping_list').insert([
        {id: 1, ingredients_Name: 'fresh green beans', recipe_id: 1, amounts: '1 1/2 pounds'},
        {id: 2, ingredients_Name: 'fresh dill minced', recipe_id: 1, amounts: '3 Tbsp'},
        {id: 3, ingredients_Name: 'red onion minced', recipe_id: 1, amounts: '3 Tbsp'},
        {id: 4, ingredients_Name: 'Dijon mustard', recipe_id: 1, amounts: '1 1/2 Tbsp'},
        {id: 5, ingredients_Name: 'olive oil', recipe_id: 1, amounts: '1 1/2 Tbsp'},
        {id: 6, ingredients_Name: 'zest of lemon', recipe_id: 1, amounts: '1'},
        {id: 7, ingredients_Name: 'kosher salt, divided', recipe_id: 1, amounts: '1 Tbsp + 1/2 tsp'},
        {id: 8, ingredients_Name: 'juice from 1/2 lemon', recipe_id: 1, amounts: '1 1/2 Tbsp'},
        {id: 9, ingredients_Name: 'freshly ground pepper', recipe_id: 1, amounts: '1 tsp'},
        {id: 10, ingredients_Name: 'heirloom tomatoes', recipe_id: 2, amounts: 'rowValue1'}
        {id: 11, ingredients_Name: 'rowValue1', recipe_id: 2, amounts: 'rowValue1'}
        {id: 12, ingredients_Name: 'rowValue1', recipe_id: 2, amounts: 'rowValue1'}
        {id: 13, ingredients_Name: 'rowValue1', recipe_id: 2, amounts: 'rowValue1'}
        {id: 14, ingredients_Name: 'rowValue1', recipe_id: 2, amounts: 'rowValue1'}
        {id: 15, ingredients_Name: 'rowValue1', recipe_id: 2, amounts: 'rowValue1'}
        {id: 16, ingredients_Name: 'rowValue1', recipe_id: 2, amounts: 'rowValue1'}
        {id: 17, ingredients_Name: 'rowValue1', recipe_id: 2, amounts: 'rowValue1'}
        {id: 18, ingredients_Name: 'rowValue1', recipe_id: 2, amounts: 'rowValue1'}
        {id: 19, ingredients_Name: 'rowValue1', recipe_id: 2, amounts: 'rowValue1'}

      ]);
    });
};
