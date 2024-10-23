import { TaskBoard } from "@/components/tasks/task-board";
import { CreateTaskDialog } from "@/components/tasks/create-task-dialog";

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Tasks</h2>
        <CreateTaskDialog />
      </div>
      <TaskBoard />
    </div>
  );
}