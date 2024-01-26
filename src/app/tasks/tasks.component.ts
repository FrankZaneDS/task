import { Component } from '@angular/core';
import { Task, DataServices } from '../data.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = this.dataServices.tasks;
  title: string = '';
  disc: string = '';
  doneTask(index: number) {
    this.tasks[index].done = true;

    console.log(this.tasks.length);
  }

  deleteItem(index: number) {
    const task = this.tasks[index];
    this.tasks.splice(index, 1);
    console.log(task.id);
  }
  constructor(private dataServices: DataServices) {}
}
