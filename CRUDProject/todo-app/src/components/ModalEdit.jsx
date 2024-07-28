import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
export default function ModalEdit({ children, todo, handleEdit }) {
  const [task, setTask] = useState(todo.task);
  const handleChangeTask = (e) => {
    setTask(e.target.value);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = (val) => {
    setOpen(val);
    setTask(todo.task);
  };
  const handleEditTask = () => {
    handleEdit(todo.todo_id, task);
  };
  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogTrigger asChild>
        <Button>{children}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
              Enter task
            </Label>
            <Input
              id="task"
              value={task}
              className="col-span-3"
              onChange={handleChangeTask}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={handleEditTask}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
