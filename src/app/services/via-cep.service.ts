import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Endereco } from './../models/address.model';

@Injectable()
export class ViaCepService {

  constructor(private httpClient: HttpClient) { }

  fazerRequisicaoParaViaCEP(cep: string): Observable<Endereco> {
    return this.httpClient.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);
  }

}
