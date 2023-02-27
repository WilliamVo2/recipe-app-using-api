/// <reference types="cypress"/>

context("New Review Form Page", () => {
  beforeEach(() => {
    cy.task("db:truncate", "Review")
    cy.visit(`/recipes/:id`)
  })
  context("on the new form review", () => {
    context("when the user fills out the form correctly", () => {
      it("creates a new list review", () =>{
        cy.get("#reviewer")
          .type("Tom Lee")
          .should("have.value", "Tom Lee")

        cy.get("#body")
          .type("The good recipe for dinner!")
          .should("have.value", "The good recipe for dinner!")

        cy.get("form")
          .contains("Submit")
          .click()

        cy.location("pathname").should("eq","/recipes/:id")      
       })
    })
  })
 })