import { Component, OnInit } from '@angular/core';
import { Task, DataServices } from '../data.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  tasks$ = this.dataServices.tasks$;
  // Map, Filter, Reduce, Find, FindIndex istraziti na array
  doneTasks$ = this.tasks$.pipe(
    map((tasks) => tasks.filter((task) => task.done))
  );
  toDoTasks$ = this.tasks$.pipe(
    map((tasks) => tasks.filter((task) => !task.done))
  );

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

  ngOnInit(): void {}
}
