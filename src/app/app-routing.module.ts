import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { EnderecoComponent } from './components/endereco/endereco.component';

const routes: Routes = [
  {
    path: 'cadastro', 
    component: CadastroComponent, 
    children: 
    [
      {path: 'endereco', component: EnderecoComponent}
    ]
  },
  {path: 'lista', component: ListaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
