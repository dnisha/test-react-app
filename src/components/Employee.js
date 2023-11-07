import React from "react";

function Employee({ data }) {
  return (
    <>
      {data.map((d) => {
        console.log(d);
        return (
          <div key={d.id}>
            <h2 data-testid={`employee-${d.id}`}>
              {d.id} {d.employee_name}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default Employee;
