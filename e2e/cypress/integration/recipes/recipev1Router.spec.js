/// <reference types="cypress" />
//server/src/routes/api/v1/recipesv1Router.js
context("api/v1/recipesv1Router", () => {
  
  describe("GET /recipes", () => {
      const initialRecipes = [{ title: "Chicken Stew" }, { title: "Roast Beef" }]
    
      beforeEach(() => {
        cy.task("db:truncate", "Recipe")
        cy.task("db:insert", { modelName: "Recipe", json: initialRecipes})
      })
    
      it.only("has the correct response type", () => {
        cy.request("/api/v1/recipes")
          .its("headers")
          .debug()
          .its("content-type")
          .should("include", "application/json")
      })
    
      it("return the correct status code", () => {
        cy.request("/api/v1/recipes")
          .its("status")
          .should("be.equal", 200)
      })
    
      it("loads 2 recipes", () => {
        cy.request("api/v1/recipes")
          .its("body")
          .its("recipes")
          .should("have.length", 2)
      })
    
      it("has the right property name and value", () => {
        cy.request("api/v1/recipes")
          .its("body")
          .its("recipes")
          .should((recipes[0]).to.have.property("title", "Chicken Stew"))
      })
    })
  })

  describe("GET /recipes/:id", () => {
    const initialRecipes = { title: "ChickenStew" }
    let showUrl

    beforeEach(() => {
      cy.task("db:truncate", "Recipe")
      cy.task("db:insert", {modelName: "Recipe", json: initialRecipes })
      cy.task("db:find", { modelName: "Recipe", conditions: { title: "ChickenStew"}}).then((recipes) => {
        showUrl = `/api/v1/recipes/${recipes[0].id}`
      })
    })

    it("has the correct response type", () => {
      cy.request(showUrl)
        .its("headers")
        .its("content-type")
        .should("include", "application/json")
    })

    it("return the correct status code", () => {
      cy.request(showUrl)
        .its("status")
        .should("be.equal", 200)
    })

    it("return the correct data", () => {
      cy.request(showUrl)
        .its("body")
        .its("recipe")
        .should("have.property", "title", "ChickenStew")
    })
  })