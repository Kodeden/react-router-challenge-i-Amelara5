it("displays the contacts", () => {
  cy.intercept("GET", "/users", { fixture: "contacts.json" });
  cy.visit("http://localhost:5173");

  cy.findAllByRole("listitem").should("have.length", 15);
});
