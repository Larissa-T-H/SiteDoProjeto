import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarteiraComponent } from './components/carteira/carteira.component';
import { InvestimentoComponent } from './components/investimento/investimento.component';
import { MovimentacaoComponent } from './components/movimentacao/movimentacao.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'nav-bar', component: NavBarComponent},
  {path: 'carteira', component: CarteiraComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'investimento', component: InvestimentoComponent},
  {path: 'movimentacao', component: MovimentacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
