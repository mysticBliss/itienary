"use client";

import { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Task = {
  id: string;
  title: string;
  itineraryName: string;
  dueDate: string;
  assignee: string;
};

const mockTasks: Task[] = [
  {
    id: "1",
    title: "Book flight tickets",
    itineraryName: "European Adventure",
    dueDate: "2023-11-15",
    assignee: "John Doe",
  },
  {
    id: "2",
    title: "Reserve hotel rooms",
    itineraryName: "Asian Explorer",
    dueDate: "2023-11-20",
    assignee: "Jane Smith",
  },
  {
    id: "3",
    title: "Arrange local transportation",
    itineraryName: "European Adventure",
    dueDate: "2023-11-18",
    assignee: "John Doe",
  },
];

export function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const getDayTasks = (date: Date) => {
    return mockTasks.filter(
      (task) => format(new Date(task.dueDate), "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          {format(currentDate, "MMMM yyyy")}
        </h3>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={previousMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-muted-foreground"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-4">
        {days.map((day, index) => {
          const dayTasks = getDayTasks(day);
          const isSelected = selectedDate && format(selectedDate, "yyyy-MM-dd") === format(day, "yyyy-MM-dd");

          return (
            <Card
              key={day.toString()}
              className={cn(
                "min-h-[120px] p-2 cursor-pointer hover:bg-accent transition-colors",
                isSelected && "border-primary"
              )}
              onClick={() => setSelectedDate(day)}
            >
              <div className="text-sm font-medium">{format(day, "d")}</div>
              <div className="mt-1 space-y-1">
                {dayTasks.map((task) => (
                  <div
                    key={task.id}
                    className="text-xs p-1 bg-primary/10 rounded truncate"
                    title={`${task.title} - ${task.itineraryName}`}
                  >
                    {task.title}
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      {selectedDate && (
        <Card className="p-4">
          <h4 className="font-semibold mb-2">
            Tasks for {format(selectedDate, "MMMM d, yyyy")}
          </h4>
          <div className="space-y-2">
            {getDayTasks(selectedDate).map((task) => (
              <div key={task.id} className="flex justify-between items-center p-2 bg-accent rounded">
                <div>
                  <div className="font-medium">{task.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {task.itineraryName}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {task.assignee}
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}