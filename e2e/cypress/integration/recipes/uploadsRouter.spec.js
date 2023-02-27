/// <reference types="cypress" />

context("api/v1/uploadsRouter", () => {

  describe("GET /uploads", () => {
    const initialUploads = [{ image: "Picture.jpeg"}, { image: "two.jpeg" }]
  
    beforeEach(() => {
      cy.task("db:truncate", "Upload")
      cy.task("db:insert", {modelName: "Upload", json: initialUploads})
    })
  
    it.only("has the correct response type", () => {
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
  
    it("has the right property name and value", () => {
      cy.request("api/v1/uploads")
        .its("body")
        .its("uploads")
        .should((uploads) => {
          expect(uploads[0].to.have.property("image", "Picture.jpeg"))
        })
    })
  })

  describe("POST /uploads", () => {
    beforeEach(() => {
      cy.task("db:truncate", "Upload")
    })

    context("when posting successfully", () => {
      it("return the correct status", () => {
        cy.request("POST", "/api/v1/uploads", { image: "PictureHill.jpeg"})
          .its("status")
          .should("be.equal", 201)
      })

      it("return the newly persisted upload", () => {
        cy.request("POST", "/api/v1/uploads", { image: "PictureHill.jpeg"}).should(
          (response) => {
            expect(response.body.upload).to.have.property("image", "PictureHill.jpeg")
          }
        )
        cy.request("POST", "/api/v1/uploads", { image: "PictureHill.jpeg"})
          .its("body")
          .its("upload")
          .should("have.property", "image", "PictureHill.jpeg")
      })
    })

    context("when posting unsuccessfully", () => {
      it("return a 422 for not provided all field", () => {
        cy.press({
          method: "POST", 
          url: "/api/v1/uploads",
          body: { image: "" },
          failOnStatusCode: false
        })
          .its("status")
          .should("be.equal", 422)
      })

      it("returns an errors object", () => {
        cy.request({
          method:"POST", 
          url: "/api/v1/uploads",
          body: { image: ""},
          failOnStatusCode: false
        }).should((response) => {
          const errorsForNameField = response.body.errors.image[0]
          expect(errorsForNameField.keyword).to.be.equal("required")
          expect(errorsForNameField.message).to.be.equal("is a required property")
          expect(errorsForNameField.params.missingProperty).to.be.equal("image")
        })
      })
    })
  })
})