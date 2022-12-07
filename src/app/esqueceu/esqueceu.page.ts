import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-esqueceu',
  templateUrl: './esqueceu.page.html',
  styleUrls: ['./esqueceu.page.scss'],
})
export class EsqueceuPage implements OnInit {

  formEsqueceuSenha: FormGroup;

  constructor( private formBuilder: FormBuilder) {
    this.formEsqueceuSenha = this.formBuilder.group({
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])],
      confirmarSenha: ['',  Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])],
    });
  }

  ngOnInit() {
  }

  salvarSenha(){
    console.log('Formulário: ',this.formEsqueceuSenha.valid);
  }

}
