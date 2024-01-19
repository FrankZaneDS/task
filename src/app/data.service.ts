import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServices {
  tasks: Task[] = [
    {
      title: 'Task1',
      disc: 'Be Smarter, sfgiadfljgapodigjadpigljadkfg',
      id: 1,
      done: false,
    },
    {
      title: 'Task2',
      disc: 'Be Smarter, sfgiadfljgapodigjadpigljadkfg',
      id: 2,
      done: false,
    },
    {
      title: 'Task3',
      disc: 'Be Smarter, sfgiadfljgapodigjadpigljadkfg',
      id: 3,
      done: false,
    },
    {
      title: 'Task4',
      disc: 'Be Smarter, sfgiadfljgapodigjadpigljadkfg',
      id: 4,
      done: false,
    },
    {
      title: 'Task5',
      disc: 'Be Smarter, sfgiadfljgapodigjadpigljadkfg',
      id: 5,
      done: false,
    },
  ];
}
export interface Task {
  title: string;
  disc: string;
  id: number;
  done: boolean;
}
