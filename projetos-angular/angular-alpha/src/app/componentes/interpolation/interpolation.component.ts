import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent{
  // criando as propriedades para o interpolation data binding
  public x: number = 10
  public umArray: Array<number> = [10, 21, 45]
  public dataHoje: Date = new Date()
  public statusBooleano: boolean = false
  
  public exibirTexto(): string{
    return 'Texto retornado a partir de uma função!'
  }
}
