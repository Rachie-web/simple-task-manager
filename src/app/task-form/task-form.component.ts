import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private taskService: TaskService) { }

  onSubmit(): void {
    if (this.taskForm) {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title: this.taskForm.get('title')?.value ?? '',
        description: this.taskForm.get('description')?.value ?? '',
        completed: false
      };
      this.taskService.addTask(newTask);
      this.taskForm.reset();
    }
  }
}


