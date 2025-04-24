import { render, screen, fireEvent } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes";

const router = createMemoryRouter(routes, {
  initialEntries: ["/"], 
  initialIndex: 0,
});

test("renders a Home NavLink", async () => {
  render(<RouterProvider router={router} />);
  
 
  const homeLink = screen.getByRole('link', { name: /Home/i });

  
  expect(homeLink.classList).toContain("active");


  fireEvent.click(homeLink);

  
  expect(homeLink.classList).toContain("active");
});
