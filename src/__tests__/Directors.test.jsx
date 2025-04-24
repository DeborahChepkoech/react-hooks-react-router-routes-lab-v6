// src/__tests__/Directors.test.jsx
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes";

const router = createMemoryRouter(routes, {
  initialEntries: ["/directors"],
  initialIndex: 0,
});

test("renders without any errors", () => {
  const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

  render(<RouterProvider router={router} />);

  expect(errorSpy).not.toHaveBeenCalled();
  errorSpy.mockRestore();
});

test("renders 'Directors Page' inside of the <h1 />", async () => {
  render(<RouterProvider router={router} />);
  const h1 = await screen.findByRole("heading", { name: /Directors Page/i });
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("renders each director's name", async () => {
  const directorNames = [
    "Steven Spielberg",
    "Christopher Nolan",
    "Quentin Tarantino",
  ];

  render(<RouterProvider router={router} />);

  for (const name of directorNames) {
    const nameEl = await screen.findByText(name);
    expect(nameEl).toBeInTheDocument();
  }
});

test("renders each movie in a <li />", async () => {
  const movies = [
    "Jaws", "E.T. the Extra-Terrestrial", "Jurassic Park",
    "Inception", "The Dark Knight", "Dunkirk",
    "Pulp Fiction", "Kill Bill", "Inglourious Basterds"
  ];

  render(<RouterProvider router={router} />);

  for (const movie of movies) {
    const movieEl = await screen.findByText(movie);
    expect(movieEl.tagName).toBe("LI");
  }
});
