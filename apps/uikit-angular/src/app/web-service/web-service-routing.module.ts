import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { TaskListComponent } from './task-list/task-list.component';
import { WebServiceComponent } from './web-service.component';

const routes: Routes = [
  {
    path: '', component: WebServiceComponent,
    children: [
      { path: '', redirectTo: 'tasks', pathMatch: 'full' },
      { path: 'tasks', component: TaskListComponent },
      { path: 'news', component: NewsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebServiceRoutingModule { }
