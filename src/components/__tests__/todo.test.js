import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../todo";

afterEach(() => {
    cleanup()
})

test("should render todo component for strike", () => {
  const todo = { id: 1, title: "wash dish", completed: false };
  render(<Todo todo={todo} />);
  const linkElement = screen.getByTestId("todo-1");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent("wash dish");
  expect(linkElement).not.toContainHTML("<strike>");
});

test("should render todo component", () => {
  const todo = { id: 2, title: "wash car", completed: true };
  render(<Todo todo={todo} />);
  const linkElement = screen.getByTestId("todo-2");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent("wash car");
  expect(linkElement).toContainHTML('<div data-testid="todo-2"><strike><h1>wash car</h1></strike></div>');
});
