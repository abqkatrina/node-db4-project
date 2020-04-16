
exports.seed = function(knex) {
  return knex('recipes').insert([
    {
      Recipe: 'Hot Water',
      Shopping_List: "A pot to cook in"
    },
    {
      Recipe: 'PB&J',
      Shopping_List: "Bread, Seed or Nut Butter, Jam or Jelly"
    },
    {
      Recipe: 'Soup',
      Shopping_List: "Soup"
    }
  ]);
};
