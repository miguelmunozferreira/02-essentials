import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, TaskAddComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userName!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get userTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
