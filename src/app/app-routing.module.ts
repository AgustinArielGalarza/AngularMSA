import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Usuario/listar/listar.component';
import { RegisterComponent } from './Usuario/register/register.component';
import { EditComponent } from './Usuario/edit/edit.component';

const routes: Routes = [
  {path: "listar", component:ListarComponent},
  {path: "register", component:RegisterComponent},
  {path: "edit", component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
