import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
// criando as propriedades para o property-binding
  public x: number = 10
  public umArray: Array<number> = [10, 21, 45]
  public dataHoje: Date = new Date()
  public statusBooleano: boolean = false
  
  public exibirTexto(): string{
    return 'Texto retornado a partir de uma função!'
  }

}
