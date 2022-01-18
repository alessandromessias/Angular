import { Component} from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent{
  // criando as propriedades para vincular com a diretiva ngClass
  cssAlteradoViaVar: string = ' color size'
  //fazendo a instancia da classe
  objCSS: PropsCss = new PropsCss()
}

//criando uma classe com propriedades CSS
class PropsCss{
  color: boolean = true
  size: boolean = true
}
