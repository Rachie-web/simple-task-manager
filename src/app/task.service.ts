import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private storageKey = 'tasks';

  constructor() { }

  getTasks(): Task[] {
    const tasks = localStorage.getItem(this.storageKey);
    return tasks ? JSON.parse(tasks) : [];
  }

  addTask(task: Task): void {
    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  updateTask(id: number, task: Task): void {
    const tasks = this.getTasks();
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      tasks[index] = task;
      localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    }
  }

  deleteTask(id: number): void {
    const tasks = this.getTasks();
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    }
  }

}