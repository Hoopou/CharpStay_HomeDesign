import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        pathMatch: 'prefix',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
      }
    ]
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'/' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
