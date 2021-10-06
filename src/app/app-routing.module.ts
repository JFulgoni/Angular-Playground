import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DbActionsComponent } from './db-actions/db-actions.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { StepperExampleComponent } from './stepper-example/stepper-example.component';
import { WowRaidsComponent } from './wow-raids/wow-raids.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'actions',
    component: DbActionsComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'raids',
    component: WowRaidsComponent
  },
  {
    path: 'stepper',
    component: StepperExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }