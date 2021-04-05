import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full',
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./pages/news/news.module').then(
        (m) => m.NewsModule
      ),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./pages/news/news.module').then(
        (m) => m.NewsModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes

    )

  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }