import { Component, OnInit } from '@angular/core';
import { ITask, TASK_MOCK_DATA } from './book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  books: ITask[] = TASK_MOCK_DATA;
  constructor() { }

  ngOnInit(): void {
  }
}
