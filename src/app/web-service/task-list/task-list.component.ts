import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  items = [
    {
      title: 'Tran Mau Tri Tam',
      description: 'Like',
      image: ''
    },
    {
      title: 'Anastasia',
      description: 'Comment',
      image: ''
    },
    {
      title: 'Martin David',
      description: 'Like',
      image: ''
    },
    {
      title: 'Dwinawan',
      description: 'Followers',
      image: ''
    },
    {
      title: 'Anton Tkachev',
      description: 'Views',
      image: ''
    },
    {
      title: 'Adam Anderson',
      description: 'Followers',
      image: ''
    },
    {
      title: 'Taras Migulko',
      description: 'Like',
      image: ''
    },
    {
      title: 'Brent Schoepf',
      description: 'Comment',
      image: ''
    }
  ];

  ngOnInit(): void {
  }

}
