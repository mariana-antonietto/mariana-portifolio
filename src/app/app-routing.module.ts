import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form } from './components/form/form.component';
import { PaginaInicial } from './components/pagina inicial/pagina-inicial.component';

const routes: Routes = [
  {path: '', component:PaginaInicial},
  {path: 'form', component:Form}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
