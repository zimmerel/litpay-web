import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppLayoutComponent,
        children: [
          { path: 'dashboard', loadChildren: '../../dashboard/dashboard.module#DashboardModule' }
        ]
      }
    ])
  ],
  declarations: [AppLayoutComponent]
})
export class AppLayoutModule { }
