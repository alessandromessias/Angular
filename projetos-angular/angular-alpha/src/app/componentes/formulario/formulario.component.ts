import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  //criando propriedades para auxiliar no controle do form
  dadosForm: any;
  email:  any;
  //chamando o hook para priorizar a instancia de classe  
  ngOnInit():void {
    this.dadosForm = new FormGroup({
      email: new FormControl('', Validators.compose ([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      senha: new FormControl('', this.validacaoSenha)
      
    });
  }
  //criar uma função para exibir o resultado do "controle" do form pela camada lógica
  exibidoraDados(umDado:any){
    this.email = umDado.email
  }
}

/*
  //criando a função para receber os dados
  recebedorDados(dadosRecebidos:any){
  alert(' O email recebido foi : ' + dadosRecebidos.email)
}

*/ 