import './App.css';
import Todo from "./components/todo"
import Employee from "./components/Employee";
function App() {
  const todos = [
    { id: 1, title: "wash dish", completed: false},
    {id: 2, title: "make dinner", completed: true }
  ]
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
  return (
    <div className="App">
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
      <h1>Employee Info</h1>
      <Employee data={data} />
    </div>
  );
}

export default App;
