import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  tasks = [
    {
      title: 'Tran Mau Tri Tam',
      description: 'Like',
      image: '/assets/images/web-service/task-item-file-1.png'
    },
    {
      title: 'Anastasia',
      description: 'Comment',
      image: '/assets/images/web-service/task-item-file-2.png'
    },
    {
      title: 'Martin David',
      description: 'Like',
      image: '/assets/images/web-service/task-item-file-3.png'
    },
    {
      title: 'Dwinawan',
      description: 'Followers',
      image: '/assets/images/web-service/task-item-file-4.png'
    },
    {
      title: 'Anton Tkachev',
      description: 'Views',
      image: '/assets/images/web-service/task-item-file-5.png'
    },
    {
      title: 'Adam Anderson',
      description: 'Followers',
      image: '/assets/images/web-service/task-item-file-6.png'
    },
    {
      title: 'Taras Migulko',
      description: 'Like',
      image: '/assets/images/web-service/task-item-file-7.png'
    },
    {
      title: 'Brent Schoepf',
      description: 'Comment',
      image: '/assets/images/web-service/task-item-file-8.png'
    }
  ];

  ngOnInit(): void {
  }

}
