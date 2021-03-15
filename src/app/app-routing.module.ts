import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AddPersonneComponent } from './add-personne/add-personne.component';
import { FavoriteComponent } from './favorite/favorite.component';

const routes: Routes = [
  {path: "personne",component:FormulaireComponent},
  {path: "add-personne",component:AddPersonneComponent},
  {path: "favorite",component:FavoriteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  


exports: [RouterModule]
})
export class AppRoutingModule { }
