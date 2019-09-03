
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { recipe_id: 1, directions: 'Trim the green beans: In a large saucepan, bring water to a boil and add 1 tablespoon kosher salt. You want the water to be salty like the sea. While the water is coming to a boil, wash and trim the stem ends of your green beans.'},
        { recipe_id: 1, directions: ' Blanch the green beans: Add trimmed beans to water. Let boil for about 3 to 4 minutes. The color of the beans should be bright, and the texture cooked, but firm tender. Taste a bean to make sure it has the right texture. Strain the beans and run under cold water to slow the cooking process. Shake off excess water, and pat them dry with a towel.'},
        { recipe_id: 1, directions: 'Make the dressing and toss to coat: In the bottom of your serving bowl, whisk together dill, minced onion, Dijon mustard, olive oil, lemon zest, lemon juice and 1/2 teaspoon salt, and pepper. Add beans. Toss to coat. Serve at room temperature alongside a main meal, or be like my daughter and just eat a heaping plateful. No judgment here.'},
        { recipe_id: 2, directions: '1 Salt the tomatoes: Sprinkle salt lightly over the tomato slices.'},
        { recipe_id: 2, directions: ' Assemble the salad: Assemble the salad by arranging alternating slices of tomatoes, basil leaves, and mozzarella slices.'},
        { recipe_id: 2, directions: ' Dress the salad: Drizzle extra virgin olive oil over the salad. Add a dash of balsamic vinegar, if using. Sprinkle lightly with pepper.'},
        { recipe_id: 3, directions: 'Chop eggs with a fork as rough or as fine as you choose.'},
        { recipe_id: 3, directions: 'Mix in mayonnaise until you reach a smooth consistency'},
        { recipe_id: 3, directions: 'Add salt to taste'},
        { recipe_id: 3, directions: 'Place in the refrigerator until chilled.'},
        { recipe_id: 3, directions: 'Enjoy'},
      
      ]);
    });
};
