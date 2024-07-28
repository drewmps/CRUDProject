import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import ModalEdit from "./ModalEdit";
import { useEffect, useState } from "react";

function Todo({ todo, handleDelete, handleEdit }) {
  const handleDeleteTodo = () => {
    handleDelete(todo.todo_id);
  };
  return (
    <Card className="mb-3">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>{todo.task}</span>
          </div>
          <div className="flex items-center gap-2">
            <ModalEdit todo={todo} handleEdit={handleEdit}>
              Edit
            </ModalEdit>
            <Button onClick={handleDeleteTodo}>Delete</Button>
          </div>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}

export default Todo;
