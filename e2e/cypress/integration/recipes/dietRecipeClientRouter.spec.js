/// <reference types="cypress" />

context("api/v1/dietRecipeClientRouter", () => {

  describe("GET /diets", () => {
    const initialDiets = [{ title: "Chop Chop Beef Stir Fry" }, { title: "Classes Stuffing" }]

    beforeEach(() => {
      cy.task("db:truncate", "Recipe")
      cy.task("db:insert", { modelName: "Recipe", json: initialDiets })
    })

    it("has the correct response type", () => {
      cy.request("/api/v1/diets")
        .its("headers")
        .its("content-type")
        .should("include", "application/json")
    })

    it("return the correct status code", () => {
      cy.request("/api/v1/diets")
        .its("status")
        .should("be.equal", 200)
    })
  })
})