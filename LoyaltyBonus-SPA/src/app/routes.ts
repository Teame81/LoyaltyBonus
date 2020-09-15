import { Routes } from '@angular/router';
import { CalculateBonusComponent } from './calculate-bonus/calculate-bonus.component';
import { EditConsultatComponent } from './edit-consultat/edit-consultat.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRouts: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'calculate', component: CalculateBonusComponent },
      { path: 'edit', component: EditConsultatComponent },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
