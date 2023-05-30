import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/modules/shared/tasks/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  taskForm!: FormGroup;
  selectedValue!: string;
  
  constructor(
    private taskService: TasksService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.onTaskForm();
  }

  onTaskForm() {
    this.taskForm = this.formBuilder.group({
      subject: [''],
      title: [''],
      description: [''],
      deadline: [''],
      class: [''],
    });
  }

  onSubmit() {
    this.taskService.addTask(this.taskForm.value).subscribe(() => {
      this.router.navigate(['/teacher/tasks']).then(() => {
        window.location.reload();
      });
      alert('Task was successfully added!');
    });
  }
}
