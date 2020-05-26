import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HelloComponent } from "./hello/hello.component";
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [  
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'hello',
    component: HelloComponent
  }
]

@NgModule({
  declarations: [
    HelloComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
