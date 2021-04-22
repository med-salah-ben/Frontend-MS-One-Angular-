import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersPhyListComponent } from './Peronne-Physique/pers-phy-list/pers-phy-list.component';

const routes: Routes = [
  {path:'personne',component:PersPhyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
