import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebServiceRoutingModule } from './web-service-routing.module';
import { WebServiceComponent } from './web-service.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TaskListComponent } from './task-list/task-list.component';



@NgModule({
  declarations: [WebServiceComponent,
    NavbarComponent,
    FooterComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    WebServiceRoutingModule
  ]
})
export class WebServiceModule { }
