/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("quantities", (table) => {
    table.bigIncrements("id")
    table.integer("count").notNullable()
    table.bigInteger("recipeId").notNullable().unsigned().index().references("recipes.id")
    table.bigInteger("ingredientId").notNullable().unsigned().index().references("ingredients.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExits("quantities")
}
