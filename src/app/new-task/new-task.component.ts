import { Component, OnInit } from '@angular/core';
import { Task } from '../data.service';
import { DataServices } from '../data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent implements OnInit {
  tasks = this.dataServices.tasks;
  reactiveForm: FormGroup;
  task: Task = {
    title: '',
    disc: '',
    done: false,
    id: this.tasks.length + 1,
  };
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.reactiveForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      disc: new FormControl(null, Validators.required),
      done: new FormControl(false),
      id: new FormControl(this.tasks.length + 1),
    });
  }
  onSubmit() {
    console.log(this.reactiveForm);
    this.task.title = this.reactiveForm.value.title;
    this.task.disc = this.reactiveForm.value.disc;
    console.log(this.task.title, this.task.disc);
    this.tasks.push(this.task);
  }
  constructor(private dataServices: DataServices) {}
}
