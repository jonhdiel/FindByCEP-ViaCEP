import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ViaCepService} from '../services/via-cep.service';
import {Endereco} from '../models/address.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent {

  cepMask = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  enderecoData: Endereco;

  constructor(private toastr: ToastrService, private viaCepService: ViaCepService) { }

  onClick(cep: string) {
    cep = cep.replace('-', '');

    if (this.verificarCEP(cep)) {
      this.viaCepService.fazerRequisicaoParaViaCEP(cep)
        .subscribe(
          endereco => {
            if (endereco.erro === true) {
              this.enderecoData = undefined;
              this.toastr.error('CEP não encontrado.', 'Etcha...');
            } else {
              this.enderecoData = endereco;
            }
          },
          error => {
            this.toastr.error('Erro: ${error.message}.', 'Etcha...');
            this.enderecoData = undefined;
          }
        );
    } else {
      this.toastr.error('Informe um CEP válido.', 'Etcha...');
      this.enderecoData = undefined;
    }
  }

  verificarCEP(cep: string): boolean {
    if (cep.length === 8) {
      return true;
    }

    return false;
  }
}
