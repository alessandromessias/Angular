import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent{
//criando as propriedades para vincular via ngStyle
cores: string = '#380F6C'
tamanho: number = 12
//instanciando a classe
objStyle: EstiloCss = new EstiloCss()

}

//criando uma classe para vincular
class EstiloCss{
  'color': string = '#33C9FF'
  'font-size.%': number = 80
  'font-weigth': string = 'bold'
}
