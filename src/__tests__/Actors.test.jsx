// src/__tests__/Actors.test.jsx
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes";

const router = createMemoryRouter(routes, {
  initialEntries: ["/actors"],
  initialIndex: 0,
});

test("renders without any errors", () => {
  const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

  render(<RouterProvider router={router} />);

  expect(errorSpy).not.toHaveBeenCalled();
  errorSpy.mockRestore();
});

test("renders 'Actors Page' inside of the <h1 />", async () => {
  render(<RouterProvider router={router} />);
  const h1 = await screen.findByRole("heading", { name: /Actors Page/i });
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("renders each actor's name", async () => {
  const actorNames = [
    "Benedict Cumberbatch",
    "Justin Timberlake",
    "Anna Kendrick",
    "Tom Cruise",
  ];

  render(<RouterProvider router={router} />);

  for (const name of actorNames) {
    const nameEl = await screen.findByText(name);
    expect(nameEl).toBeInTheDocument();
  }
});

test("renders each movie in a <li />", async () => {
  const movies = [
    "Doctor Strange",
    "The Imitation Game",
    "Black Mass",
    "Trolls",
    "Friends with Benefits",
    "The Social Network",
    "Pitch Perfect",
    "Into The Wood",
    "Jack Reacher: Never Go Back",
    "Mission Impossible 4",
    "War of the Worlds",
  ];

  render(<RouterProvider router={router} />);

  for (const movie of movies) {
    const movieEl = await screen.findByText(movie);
    expect(movieEl.tagName).toBe("LI");
  }
});
