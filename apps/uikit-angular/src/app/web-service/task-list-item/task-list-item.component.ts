import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IWebServiceItem } from '../../core';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskListItemComponent implements OnInit {

  @Input() Item: IWebServiceItem;
  constructor() { }

  ngOnInit(): void {
  }

}
