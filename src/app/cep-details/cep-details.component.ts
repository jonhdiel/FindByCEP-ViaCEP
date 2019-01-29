import { Component, Input } from '@angular/core';

import { Endereco } from '../models/address.model';

@Component({
  selector: 'app-cep-details',
  templateUrl: './cep-details.component.html'
})
export class CepDetailsComponent {

  @Input() endereco: Endereco;

  constructor() { }

}
