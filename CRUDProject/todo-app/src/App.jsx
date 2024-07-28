import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Todo from "./components/Todo";
import { Card } from "./components/ui/card";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import axios from "axios";

function App() {
  const baseURL = "http://localhost:5000";
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");
  const handleChangeTask = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    axios
      .post(`${baseURL}/task`, {
        task: task,
      })
      .then((res) => {
        location.reload();
      });
  };

  const handleEdit = (id, task) => {
    axios
      .put(`${baseURL}/task/${id}`, {
        task: task,
      })
      .then((res) => {
        location.reload();
      });
  };
  const handleDelete = (id) => {
    axios.delete(`${baseURL}/task/${id}`).then((res) => {
      location.reload();
    });
  };

  useEffect(() => {
    axios.get(`${baseURL}/task`).then((res) => {
      setTodoList(res.data);
    });
  }, []);
  return (
    <>
      <Card className="w-[800px] mt-5 mx-auto p-3">
        <div className="flex items-center space-x-2 mb-5">
          <Input
            id="task"
            value={task}
            className="col-span-3 border-gray-400"
            onChange={handleChangeTask}
          />
          <Button onClick={handleAdd}>Add Task</Button>
        </div>
        {todoList.length !== 0 ? (
          todoList.map((todo) => {
            return (
              <Todo
                key={todo.todo_id}
                todo={todo}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            );
          })
        ) : (
          <div className="flex justify-center">Add a todo</div>
        )}
      </Card>
    </>
  );
}

export default App;
