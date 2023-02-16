/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("pantryItems", (table) => {
    table.bigIncrements("id")
    table.bigInteger("ingredientId").notNullable().unsigned().index().references("ingredients.id")
    table.bigInteger("userId").notNullable().unsigned().index().references("users.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExits("pantryItems")
}
