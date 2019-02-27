import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  /**
   * Welcome, login, register, restore
   */
  { path: 'welcome',    loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'login',     loadChildren: './login/login.module#LoginPageModule' },
  /**
   * Menu
   */
  { path: 'home',       loadChildren: './home/home.module#HomePageModule'},
  { path: 'library',    loadChildren: './library/library.module#LibraryPageModule' },
  { path: 'profile',    loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'evaluation', loadChildren: './evaluation/evaluation.module#EvaluationPageModule' },
  { path: 'result',     loadChildren: './result/result.module#ResultPageModule' },
  /**
   * Other
   */
  { path: 'list',       loadChildren: './list/list.module#ListPageModule'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
