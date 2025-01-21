import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css',
})
export class TaskAddComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  inputTitle = '';
  inputSummary = '';
  inputDueDate = '';
  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSummit() {
    this.tasksService.addTask(
      {
        title: this.inputTitle,
        summary: this.inputSummary,
        date: this.inputDueDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
