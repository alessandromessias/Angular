import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  // implementando uma função para ser vinculada via evento
  public exibirAlerta():void{
    console.log('Evento disparado...')
    alert('Evento disparado...')
  }

}
