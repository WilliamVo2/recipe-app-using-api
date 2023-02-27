///<reference types="cypress"/>

context("/api/v1/ingredientRouter", () => {
  describe("Get /ingredients", () => {
    const initialIngredients = [{ name: "Chicken broth"}, { name: "eggs"}]

    beforeEach(() => {
      cy.task("db:truncate", "Ingredient")
      cy.task("db:insert", { modelName: "Ingredient", json: initialIngredients})
    })

    it.only("has the correct response type", () => {
      cy.request("/api/v1/ingredients")
        .its("headers")
        .its("content-type")
        .should("include", "application/json")
    })

    it("return the correct status code", () => {
      cy.request("/api/v1/ingredients")
        .its("status")
        .should("be.equal", 200)
    })
    
    it("load 2 ingredients", () => {
      cy.request("/api/v1/ingredients")
        .its("body")
        .its("ingredients")
        .should("have.length", 2)
    })

    it("has right property name and value", () => {
      ct.request("/api/v1/ingredients")
        .its("body")
        .its("ingredients")
        .should((ingredients) => {
        expect(ingredients[0]).to.have.property("name", )
      })
    })
  })
})