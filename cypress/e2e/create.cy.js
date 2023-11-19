const NEW_NAME = "Jane Doe";
const NEW_EMAIL = "jane@doe.com";
const NEW_PHONE = "123-456-7891";

it("adds a contact", () => {
  cy.intercept("GET", "/users", { fixture: "contacts.json" });
  cy.intercept("POST", "/users", (req) => {
    console.log(req.body);
  }).as("createContact");
  cy.visit("http://localhost:5173");

  cy.findByRole("link", { name: /Add Contact/i }).click();

  cy.findByLabelText(/Name/i).type(NEW_NAME);
  cy.findByLabelText(/Phone number/i).type(NEW_PHONE);
  cy.findByLabelText(/Email/i).type(NEW_EMAIL);

  cy.findByRole("button", { name: /Save/i }).click();
  cy.wait("@createContact").then(({ request }) => {
    const { name, email, tel } = request.body;
    expect(name).to.equal(NEW_NAME);
    expect(email).to.equal(NEW_EMAIL);
    expect(tel).to.equal(NEW_PHONE);
  });
});
