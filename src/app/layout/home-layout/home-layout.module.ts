import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeLayoutComponent,
        children: [
          { path: '', loadChildren: '../../home/home.module#HomeModule' },
          { path: 'login', loadChildren: '../../login/login.module#LoginModule' }
        ]
      }
    ])
  ],
  declarations: [HomeLayoutComponent]
})
export class HomeLayoutModule { }
