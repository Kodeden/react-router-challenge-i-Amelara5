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
it("updates a user", () => {
  cy.intercept("GET", "/users", { fixture: "contacts.json" });
  cy.intercept("PATCH", "/users/9abe94e6-4639-4305-a630-1a8d53792fd2").as(
    "updateUser",
  );

  cy.visit("http://localhost:5173");

  cy.findByRole("link", { name: "Leigh Ernser" }).as("userProfile");
  cy.get("@userProfile").click();

  cy.findByRole("link", { name: /Edit/i }).as("userInformation");
  cy.get("@userInformation").click();

  cy.findByLabelText(/Name/i).clear();
  cy.findByLabelText(/Name/i).type("John Doe");

  cy.findByLabelText(/Phone number/i).clear();
  cy.findByLabelText(/Phone number/i).type("987-654-3219");

  cy.findByRole("button", { name: /Save/i }).click();

  //  FOR THE WAIT TO WORK THE URL HAS TO BE THE ONE THAT IS CALLED. IN THE EDIT CASE BECAUSE WE NEED THE .../users/ID# WE CAN'T USE THE .../users AS IN THE ADD CONTACT.
  cy.wait("@updateUser").then(({ request }) => {
    console.log(request.body);
    const { name, tel, email } = request.body;
    expect(name).to.equal("John Doe");
    expect(tel).to.equal("987-654-3219");
    expect(email).to.equal("Leigh_Ernser@hotmail.com");
  });
  // cy.findAllByRole("listitem").as("list");
  // cy.get("list").first().click();

  // {
  //   "id": "9abe94e6-4639-4305-a630-1a8d53792fd2",
  //   "name": "Leigh Ernser",
  //   "tel": "076-812-5005",
  //   "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1212.jpg",
  //   "email": "Leigh_Ernser@hotmail.com"
  // }
});
