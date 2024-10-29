import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

// Remove the Injectable for another approach in the Main.ts and Tasks.component.ts
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  static addTask(arg0: { title: string; description: string }) {
    throw new Error('Method not implemented.');
  }
  private tasks = signal<Task[]>([]);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };

    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }
}
