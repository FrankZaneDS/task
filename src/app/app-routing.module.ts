import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  // {
  //   path: 'new-task',
  //   component: NewTaskComponent,
  // },
  // {
  //   path: 'tasks',
  //   component: TasksComponent,
  // },
  // {
  //   path: '',
  //   component: HomeComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
