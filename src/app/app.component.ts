import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Gerenciador Escolar</h1>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Lista de Turmas</a>
      <a routerLink="/superheroes" routerLinkActive="active">Lista de Alunos</a>


      <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contato</a>
    </nav>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `
})
export class AppComponent {
}


//<a routerLink="/admin" routerLinkActive="active">Admin</a>
//<a routerLink="/login" routerLinkActive="active">Login</a>
