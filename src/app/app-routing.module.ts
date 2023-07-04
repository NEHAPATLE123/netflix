import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { MovieDetailsComponent } from './shared/components/movie-details/movie-details.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'movieDetails/:movieId', component:MovieDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
