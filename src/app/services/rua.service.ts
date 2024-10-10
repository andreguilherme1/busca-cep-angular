import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRuaResponse } from '../interfaces/busca-rua-response';

@Injectable({
  providedIn: 'root'
})
export class RuaService {

  constructor(private readonly _http: HttpClient) { }

  buscaRua(idEstado: number, cidade: string, rua: string): Observable<IRuaResponse[]> {
    return this._http.get<IRuaResponse[]>(`https://viacep.com.br/ws/${idEstado}/${cidade}/${rua}/json/`)
  }
}
