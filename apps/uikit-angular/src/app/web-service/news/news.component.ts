import { Component, OnInit } from '@angular/core';
import { INewItem } from '../../core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  create = new Date();
  news: INewItem[] = [
    {
      titile: 'Incredible 3D illustrations of famous fictional places',
      thumbnail: '/assets/images/web-service/new-thumbnail-1.png',
      created: this.create
    },
    {
      titile: '7 reasons why now is the time to hire junior designers',
      thumbnail: '/assets/images/web-service/new-thumbnail-2.png',
      created: this.create
    },
    {
      titile: `The Beginner's Guide to Product Packaging`,
      thumbnail: '/assets/images/web-service/new-thumbnail-3.png',
      created: this.create
    },
    {
      titile: `Card Tricks: 5 Tips for Designing an Ace Deck of Playing Cards`,
      thumbnail: '/assets/images/web-service/new-thumbnail-4.png',
      created: this.create
    },
    {
      titile: `5 Different Paths to Becoming a Designer`,
      thumbnail: '/assets/images/web-service/new-thumbnail-5.png',
      created: this.create
    },
    {
      titile: `10 famous logos reimagined by another graphic designer`,
      thumbnail: '/assets/images/web-service/new-thumbnail-6.png',
      created: this.create
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
