import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebServiceRoutingModule } from './web-service-routing.module';
import { WebServiceComponent } from './web-service.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { NewsComponent } from './news/news.component';



@NgModule({
  declarations: [WebServiceComponent,
    NavbarComponent,
    FooterComponent,
    TaskListComponent,
    TaskListItemComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    WebServiceRoutingModule
  ]
})
export class WebServiceModule { }
