it("adds a contact", () => {
  cy.visit("http://localhost:5173")

  cy.findByRole("link", {name: /Add Contact/i}).click()

  cy.findByLabelText(/Name/i).type("Jane Doe")
  cy.findByLabelText(/Phone number/i).type("123-456-7891")
  cy.findByLabelText(/Email/i).type("jane@doe.com")

  // cy.findByRole("button", {name: /Save/i}.click())
})