import { Component } from '@angular/core';
import { GameService } from './game.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoT';

  nome = null;
  personagem = null;
  casa = null;




  constructor(private game: GameService) {
  }

  salvaNome(form) {
    this.game.salvaNome(this.nome);
    form.reset();
  }

  salvaJogada(form) {
    this.game.salvaJogada(this.casa, this.personagem);
    form.reset();
  }

  
  
}
