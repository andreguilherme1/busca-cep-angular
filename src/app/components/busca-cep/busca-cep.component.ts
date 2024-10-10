import { Component } from '@angular/core';
import { CepService } from '../../services/cep.service';
import { ICepResponse } from '../../interfaces/busca-cep-response';

@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrl: './busca-cep.component.scss'
})
export class BuscaCepComponent {
  cepResponse = {} as ICepResponse;
  cep: string = '';
  haveCep: boolean = false;
  cepVazio: boolean = true;

  constructor(private readonly _cep: CepService) {}

  buscaCep() {
    this._cep.buscaCep(this.cep).subscribe((data)=> {
      this.cepResponse = data
      this.haveCep = true
      this.cepVazio = true;
      if (!this.cepResponse.uf) {
        this.cepVazio = false;
        this.haveCep = false
        return;  
      }
    })
  }
}
