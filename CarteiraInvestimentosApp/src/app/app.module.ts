import { UsuarioComponent } from './components/usuario/usuario.component';
import { MovimentacaoComponent } from './components/movimentacao/movimentacao.component';
import { Login } from './Models/Login';
import { InvestimentoComponent } from './components/investimento/investimento.component';
import { CarteiraComponent } from './components/carteira/carteira.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialComponent } from './components/initial/initial.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    CarteiraComponent,
    FooterComponent,
    InvestimentoComponent,
    LoginComponent,
    MovimentacaoComponent,
    UsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
