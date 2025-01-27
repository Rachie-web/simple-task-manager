import { Component } from '@angular/core';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.css']
})
export class AddNewTaskComponent {
  showForm = false;

  openTaskForm() {
    this.showForm = true;
  }
}
