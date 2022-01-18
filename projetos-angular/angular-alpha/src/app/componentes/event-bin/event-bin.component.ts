import { Component} from '@angular/core';

@Component({
  selector: 'app-event-bin',
  templateUrl: './event-bin.component.html',
  styleUrls: ['./event-bin.component.css']
})
export class EventBinComponent {
//implementando um função para ser vinculada via evento
  public exibirAlerta(): void{
    console.log('Evento disparado...')
    alert('Evento disparado...')
  }
}
