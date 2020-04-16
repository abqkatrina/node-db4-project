const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

//recipes
// Id(Auto), recipe_NAME (req)

//Steps
//Id(Auto), recipe_ID(req), STEP_NUMBER(req), INSTRUCTIONS(req)

module.exports =
{
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

//works
function find() {
    return db('recipes');
};

//works
function findById(id) {
    return db('recipes')
    .where({ id })
    .first();
};

function findSteps(id) {
    return db('recipes')
    .where({ id });
};

//works BUT doesn't return recipe
function add(recipe){
    return db('recipes')
    .insert(recipe)
    .then(recipe => {
        return(recipe)
    });
};

//works BUT doesn't return recipe
function update(changes, id) {
    return db('recipes')
    .where({ id })
    .update(changes);
};

//works
function remove(id){
    return db('recipes')
    .where({ id })
    .del();
};