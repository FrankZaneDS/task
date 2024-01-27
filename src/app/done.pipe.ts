import { Pipe, PipeTransform } from '@angular/core';
import {Task} from './data.service';

@Pipe({
  name: 'done',
  pure: false,
})
export class DonePipe implements PipeTransform {

  transform(tasks: Task[], done: boolean): Task[] {
    console.log(tasks);
    console.log(tasks.filter(task => task.done === done));
    return tasks.filter(task => task.done === done);
  }

}
