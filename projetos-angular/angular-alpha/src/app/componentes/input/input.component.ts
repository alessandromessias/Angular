import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent{
  // definição dos elementos que serão as propriedades de entrada de dados
  @Input() public mensagem: string = ''
  @Input() public outraMensagem: string = ''

  // definindo a função
  public exibirMensagemAlerta(): void{
    alert(this.outraMensagem)
  }
}
