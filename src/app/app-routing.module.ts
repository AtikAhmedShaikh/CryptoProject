import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoricalComponent } from './historical/historical.component';
import { OhlcvComponent } from './ohlcv/ohlcv.component';

const routes: Routes = [
  {path : "Dashboard", component : DashboardComponent}, 
  {path : "Ohlvc",component : OhlcvComponent},
  {path : "Historical",component : HistoricalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
