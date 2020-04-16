
exports.seed = function(knex) {
  return knex('recipes').insert([
    {Recipe: 'Hot Water'},
    {Recipe: 'PB&J'},
    {Recipe: 'Soup'}
  ]);
};
