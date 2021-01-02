import { Component, Input, OnInit } from '@angular/core';
import { INewItem } from '../../core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {

  @Input() Item: INewItem;
  constructor() { }

  ngOnInit(): void {
  }

}
