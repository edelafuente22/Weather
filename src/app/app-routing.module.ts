import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';

const routes: Routes = [
  { path: '', component: BurbankComponent },
  { path: 'burbank', component: BurbankComponent },
  { path: 'seattle', component: SeattleComponent },
  { path: 'san-jose', component: SanJoseComponent },
  { path: 'dallas', component: DallasComponent },
  { path: 'washington', component: WashingtonComponent },
  { path: 'chicago', component: ChicagoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
