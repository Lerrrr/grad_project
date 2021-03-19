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
    }
  ];

@NgModule({
    imports: [
      RouterModule.forRoot(routes
        
        )
      
    ],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}