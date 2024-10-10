import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILocalidadeResponse } from '../interfaces/localidade/localidade-response.interface';
import { IEstadoResponse } from '../interfaces/estados/estado-response.interface';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private readonly _http: HttpClient) { }

  buscaUF(): Observable<IEstadoResponse[]> {
    return this._http.get<IEstadoResponse[]>(`http://servicodados.ibge.gov.br/api/v1/localidades/estados`)
  }

  buscaLocalidades(idEstado: number): Observable<ILocalidadeResponse[]> {
    return this._http.get<ILocalidadeResponse[]>(`http://servicodados.ibge.gov.br/api/v1/localidades/estados/${idEstado}/municipios`)
  }
}
