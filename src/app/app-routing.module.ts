import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent,
  },
  {
    path: 'movies',
    component: MainComponent,
  },
  {
    path: 'series',
    component: MainComponent,
  },
  {
    path: 'music',
    component: MainComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
