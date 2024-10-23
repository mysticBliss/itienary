import { CalendarView } from "@/components/calendar/calendar-view";
import { CreateTaskDialog } from "@/components/tasks/create-task-dialog";

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Calendar</h2>
        <CreateTaskDialog />
      </div>
      <CalendarView />
    </div>
  );
}