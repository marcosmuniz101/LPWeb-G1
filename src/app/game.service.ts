import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {


tela = 1;
jogadores = [];
daVez = null;
id=1;
contJogadas = 0;
Stark = {nome: "Stark", membros: ["Benjen", "Eddard", "Catelyn", "Lyanna", "Robb", "Arya", "Bran", "Sansa" ]}
Targaryen = {nome: "Targaryen", membros: ["Danerys", "Viserys", "Rhaegar", "Aegon"]}

ListaCasas = [ this.Stark, this.Targaryen ]


  constructor() { }


RetornaTela(){
  return this.tela;

}



salvaNome(nome: string){
  const jogador= {
    id : this.id,
    nome : nome,
    tempo : null,
    jogada1: null,
    jogada2: null,
    jogada3: null,
    acertos: 0,
    
  }
  
  
  this.jogadores.push(jogador);
  localStorage.setItem("jogadores", JSON.stringify(this.jogadores));
  localStorage.setItem("id",JSON.stringify(this.id));
  this.id ++;
  this.tela = 2;
};

JogadorDaVez(){
  let jogadores = JSON.parse(localStorage.getItem("jogadores"));
  let id = JSON.parse(localStorage.getItem("id"));
  for (let jogado of jogadores ){
    if (id == jogado.id){
      return jogado;
    }

  }


  
}
RetornaPersonagens(){
  
  let lista = [];
for (const casa of this.ListaCasas){
  for (const personagem of casa.membros){
    lista.push(personagem);
  }
}
  return lista;
}

casas(){
  return this.ListaCasas
}

salvaJogada(casa: String, personagem: String){

  let jogadores = JSON.parse(localStorage.getItem("jogadores"));
  let id = JSON.parse(localStorage.getItem("id"));

  if (this.contJogadas < 3) {

  for (let jogado of jogadores ){
    if (id == jogado.id){
      for ( const casaX of this.ListaCasas){
        if (casaX.nome == casa){
          for ( const personagemX of casaX.membros){
            if (personagem == personagemX){
              jogado.acertos ++

            }
          }
        }
      }


      if (this.contJogadas == 0){
        jogado.jogada1 ={casa, personagem}
        this.contJogadas = 1;
      }
      if (this.contJogadas == 1){
        jogado.jogada2 ={casa, personagem}
        this.contJogadas = 2;
      }
      if (this.contJogadas == 2){
        jogado.jogada1 ={casa, personagem}
        this.contJogadas = 3;
      }
    }
    
  }           }
  else{
    this.tela = 3;
    this.contJogadas = 0

  }
}



}

