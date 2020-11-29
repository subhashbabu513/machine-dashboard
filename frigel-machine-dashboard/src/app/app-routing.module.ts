import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [{
  path: '',
  component: HomePageComponent,
  children: [{
    path: '',
    component: DashboardComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
