import ToDoList from "@/components/to-do-list";
import db from "@/utils/db";

const getData = async () => {
  const todos = await db.toDo.findMany({});
  return todos;
};

const ToDosPage = async () => {
  const data = await getData();
  return (
    <div>
      <ToDoList todos={data} />
    </div>
  );
};

export default ToDosPage;
