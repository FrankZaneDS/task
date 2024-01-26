import { Component } from '@angular/core';
import { DataServices, Task } from '../../data.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  tasks: Task[] = this.dataServices.tasks;

  constructor(private dataServices: DataServices) {}
}
