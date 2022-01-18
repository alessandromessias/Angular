import { Component } from '@angular/core';

@Component({
  selector: 'app-primario',
  templateUrl: './primario.component.html',
  styleUrls: ['./primario.component.css']
})
export class PrimarioComponent{
  // criar função para receber os dados e vincular na view do comp-pai
  public recebendoDados(dadosRecebidos:any){
    let receptora: string = 'Obrigado por se cadastrar ' + dadosRecebidos.nome + '.' + '\n';

    receptora = receptora + 'O email ' + dadosRecebidos.email + ' foi cadastrado com sucesso!'

    alert(receptora)
  }

}

/*
// aqui, vamos definir os conjuntos de dados que serão enviados para input component
  public texto: string = 'Este é o texto que será exibido no input.component.html'
  public outroTexto: string = 'Este texto será exibido na janela de alerta de input.component.html'
 */
