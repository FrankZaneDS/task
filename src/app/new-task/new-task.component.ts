import { Component, OnInit } from '@angular/core';
import { Task } from '../data.service';
import { DataServices } from '../data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent implements OnInit {
  tasks = this.dataServices.tasks;
  // editTitle: string = '';
  // editDisc: string = '';
  reactiveForm: FormGroup;
  i = 0;
  index: any;

  // task: Task = {
  //   title: '',
  //   disc: '',
  //   done: false,
  //   id: this.i,
  // };
  replaceTask(index, task: Task) {
    this.tasks.splice(this.index, 1, task);
  }
  onSubmit() {
    let task: Task = {
      title: '',
      disc: '',
      done: false,
      id: this.i,
    };

    if (this.index === this.reactiveForm.value.id) {
      task.title = this.reactiveForm.value.title;
      task.disc = this.reactiveForm.value.disc;
      task.done = false;
      task.id = this.index;
      this.replaceTask(this.index, task);
      this.reactiveForm.reset();
    } else {
      console.log(this.reactiveForm);
      task.title = this.reactiveForm.value.title;
      task.disc = this.reactiveForm.value.disc;

      task.id = this.i++;
      console.log(task.title, task.disc);
      this.tasks.push(task);
      this.i++;
      this.reactiveForm.reset();
      console.log(task.id);
    }

    // = {
    //   title: '',
    //   disc: '',
    //   done: false,
    //   id: this.i,
    // };
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.index = +this.activatedRoute.snapshot.params['id'];
    if (Number.isFinite(this.index) === true) {
      this.reactiveForm = new FormGroup({
        title: new FormControl(
          this.tasks[this.index].title,
          Validators.required
        ),
        disc: new FormControl(this.tasks[this.index].disc, Validators.required),
        done: new FormControl(false),
        id: new FormControl(this.index),
      });
    } else {
      this.reactiveForm = new FormGroup({
        title: new FormControl('', Validators.required),
        disc: new FormControl('', Validators.required),
        done: new FormControl(false),
        id: new FormControl(this.i),
      });
      this.reactiveForm.reset();
    }
  }

  constructor(
    private dataServices: DataServices,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    router.events.subscribe((ev) => {
      if (ev.constructor.name === 'NavigationStart') {
        this.reactiveForm.reset();
      }
    });
  }
}
