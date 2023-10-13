import { render, screen } from "@testing-library/react";
import App from "../app";
import { expect } from "vitest";
import databaseList from "../../db.json";

it("loads data", async () => {
  render(<App />);

  await screen.getByRole("navigation");
  await screen.findByText("Contacts");

  const webPageList = await screen.findAllByRole("listitem");
  expect(webPageList).toHaveLength(databaseList.users.length);
});

it("adds a contact", async () => {
  render(<App />);
  const user = userEvent.setup();

  const addContactButton = await screen.getByRole("link", {
    name: /Add Contact/i,
  });

  user.click(addContactButton);

  //  I have to check why 'form' alone doesn't work. Or try using "" as the name
  // await screen.getByRole("form", { name: /userInformation/i });
  //  For 'textbox' to be reachable and have a name. I have to add a label to it.
  const userName = await screen.getByRole("textbox", { name: /name/i });
  const userPhone = await screen.getByRole("textbox", {
    name: /phone number/i,
  });
  const userEmail = await screen.getByRole("textbox", { name: /email/i });

  await user.type(userName, "John Doe");
  await user.type(userPhone, "2257-7777");
  await user.type(userEmail, "jd@email.com");

  // Check why once the button is pressed it keeps repeating itself
  // await user.click(await screen.getByRole("button", { name: /save/i }));
});

// it("adds a contac", async () => {
//   const appRender = render(<App />);
// });

// it("deletes a contact", async () => {
//   const appRender = render(<App />);
// });

// it("searches a user", async () => {
//   const appRender = render(<App />);
// });

// it("loads a user profile", async () => {
//   const appRender = render(<App />);
// });

// it("edits a contact", async () => {
//   const appRender = render(<App />);
// });

// it("can go back to home page", async () => {
//   const appRender = render(<App />);
// });
