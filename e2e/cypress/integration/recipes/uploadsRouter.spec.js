/// <reference types="cypress" />

context("api/v1/uploadsRouter", () => {

  describe("GET /uploads", () => {
    const initialUploads = [{ image: "Picture.jpeg"}, { image: "two.jpeg" }]
  
    beforeEach(() => {
      cy.task("db:truncate", "Upload")
      cy.task("db:insert", {modelName: "Upload", json: initialUploads})
    })
  
    it("has the correct response type", () => {
      cy.request("/api/v1/uploads")
        .its("headers")
        .debug()
        .its("content-type")
        .should("include", "application/json")
    })
  
    it("return the correct status code", () => {
      cy.request("/api/v1/uploads")
        .its("status")
        .should("be.equal", 200)
    })
  
    it("load 2 uploads", () => {
      cy.request("/api/v1/uploads")
        .its("body")
        .its("uploads")
        .should("have.length", 2)
    })
  })

  describe("POST /uploads", () => {
    beforeEach(() => {
      cy.task("db:truncate", "Upload")
    })

    context("when posting successfully", () => {
      it("return the correct", () =>{
        cy.request("/api/v1/uploads")
        .its("status")
        .should("be.equal", 200)
      })
    })

    context("when posting unsuccessfully", () => {
      it("return a 500 for not provided all field", () => {
        cy.request({
          method: "POST", 
          url: "/api/v1/uploads",
          body: { image: "" },
          failOnStatusCode: false
        })
          .its("status")
          .should("be.equal", 500)
      })
     })
   })
})