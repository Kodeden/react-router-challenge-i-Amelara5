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

// it("shows the alphabetical order", async () => {
//   const appRender = render(<App />);
// });

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
