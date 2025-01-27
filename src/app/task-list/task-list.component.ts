import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  filter: string = 'all';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  toggleCompletion(task: any): void {
    task.completed = !task.completed;
  }

  filterTasks(): any[] {
    if (this.filter === 'all') {
      return this.tasks;
    } else if (this.filter === 'completed') {
      return this.tasks.filter(task => task.completed);
    } else if (this.filter === 'pending') {
      return this.tasks.filter(task => !task.completed);
    } else {
      return [];
    }
  }
}
