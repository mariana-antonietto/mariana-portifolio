import { Component, OnInit } from "@angular/core";
import { Cliente } from '../../clientes/shared/cliente';
import { FormGroup, FormControl } from '@angular/forms';

@Component(
  {
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    selector: 'form'
  }
)

export class Form implements OnInit {
  formCliente: FormGroup

  constructor() { }

  ngOnInit() {
    this.createForm(new Cliente());
}
createForm(cliente: Cliente) {
  this.formCliente = new FormGroup({
    nome: new FormControl(cliente.nome),
    tipo: new FormControl(cliente.tipo),
    genero: new FormControl(cliente.genero),
    dataNascimento: new FormControl(cliente.dataNascimento),
    observacao: new FormControl(cliente.observacao),
    inativo: new FormControl(cliente.inativo)
  })
}
onSubmit() {
  console.log(this.formCliente.value);
  this.formCliente.reset(new Cliente());
}
}
