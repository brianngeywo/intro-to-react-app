import ToDoComponent from "./todo";

const ToDoList = ({ todos }) => {
  return (
    <div>
      <ul className="my-4">
        {todos.map((todo) => (
          <li key={todo.id} className="my-2">
            <ToDoComponent todo={todo} key={todo.id}/>
          </li>
        ))}
      </ul>
      <div>Todos page</div>
    </div>
  );
};


export default ToDoList