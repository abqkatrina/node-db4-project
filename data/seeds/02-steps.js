exports.seed = function(knex) {
  return knex("steps").insert([
      {
          recipe_id: 1,
          step_number: 1,
          instructions: "Put water in a pot.",
      },
      { 
        recipe_id: 1, 
        step_number: 2, 
        instructions: "Apply high heat" 
      },
      {
          recipe_id: 1,
          step_number: 3,
          instructions: "Remove from heat when water is bubbling",
      },
      {
          recipe_id: 2,
          step_number: 1,
          instructions: "Get two slices of bread",
      },
      { 
        recipe_id: 2, 
        step_number: 4, 
        instructions: "Put the slices together" 
      },
      {
          recipe_id: 2,
          step_number: 2,
          instructions: "Put jelly/jam/preserves/marmalade on one slice",
      },
      { 
        recipe_id: 2, 
        step_number: 3, 
        instructions: "Put peanut/almond/sunflower/cashew butter on the other slice" 
      },
      { 
        recipe_id: 3, 
        step_number: 2, 
        instructions: "Open the can with a can opener" 
      },
      {
          recipe_id: 3,
          step_number: 4,
          instructions: "sApply heat while stirring",
      },
      {
          recipe_id: 3,
          step_number: 1,
          instructions: "Buy a can of soup concentrate",
      },
      {
          recipe_id: 3,
          step_number: 3,
          instructions: "Put contents of can plus can's worth of water into a pot",
      }
  ]);
};
