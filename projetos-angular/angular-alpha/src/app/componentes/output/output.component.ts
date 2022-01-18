import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent{
  // criar um "anunciador" do envetno que
  // enviará um dataset para o componente-pai
  @Output() anunciador = new EventEmitter<any>()

  // criar um objeto literal para receber o conjunto de dados
  public objDados: any = {}

  // criar uma função para - usando o anunciador - enviar dados
  public enviarDados(): void{
    this.anunciador.emit(this.objDados)
  }

}
