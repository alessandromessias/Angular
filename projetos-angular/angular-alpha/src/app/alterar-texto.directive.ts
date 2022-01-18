import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAlterarTexto]'
})
export class AlterarTextoDirective {

  //fazer a referencia de instancia da classe ElemenRef
  constructor(elementoHTML: ElementRef) { 
    //observar se a referencia de instancia de Element Ref reconheço o elemeneto nativo HTML onde nossa diretiva está sendo aplicada.
    console.log (elementoHTML)
    elementoHTML.nativeElement.innerText = 'Texto inserido na view a partir da diretiva de componente!'
  }

}
