import { render, screen, cleanup } from "@testing-library/react";
import Employee from "../Employee";
import { describe } from "yargs";

test("should render todo component for strike", () => {
  const data = [
    {
      id: 1,
      employee_name: "Tiger Nixon",
      employee_salary: 320800,
      employee_age: 61,
      profile_image: "",
    },
    {
      id: 2,
      employee_name: "Garrett Winters",
      employee_salary: 170750,
      employee_age: 63,
      profile_image: "",
    },
    {
      id: 3,
      employee_name: "Ashton Cox",
      employee_salary: 86000,
      employee_age: 66,
      profile_image: "",
    },
  ];

  render(<Employee data={data} />);
  const linkElement = screen.getByTestId("employee-1");
  expect(linkElement).toHaveTextContent("Tiger Nixon");
  expect(linkElement).toBeInTheDocument();
});

