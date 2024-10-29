import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

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
}
