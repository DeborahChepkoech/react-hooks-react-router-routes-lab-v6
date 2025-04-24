// src/__tests__/Home.test.jsx
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes";

const router = createMemoryRouter(routes, {
  initialEntries: ["/"], // Ensure that this points to the root route
  initialIndex: 0,
});

test("renders 'Home Page' inside of the <h1 />", async () => {
  render(<RouterProvider router={router} />);

  // Use findByRole for better query
  const h1 = await screen.findByRole("heading", { name: /Home Page/i });
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});
