import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { TaskFormComponent } from './task-form/task-form.component';

const routes: Routes = [
  { path: 'task-list', component: TaskListComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent },
  { path: 'add-task', component: AddNewTaskComponent },
  { path: 'task-form', component: TaskFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


