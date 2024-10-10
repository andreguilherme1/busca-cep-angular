import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICepResponse } from '../interfaces/busca-cep-response';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private readonly _http: HttpClient) { }

  buscaCep(cep: string): Observable<ICepResponse> {
    return this._http.get<ICepResponse>(`https://viacep.com.br/ws/${cep}/json/`)
  }
}
