import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  @Input() Task;
  constructor() { }

  ngOnInit() {
  }
  toggle(): void {
    this.Task.complete = !this.Task.complete;
  }
}

