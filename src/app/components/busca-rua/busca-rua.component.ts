import { Component, OnInit } from '@angular/core';
import { RuaService } from '../../services/rua.service';
import { IRuaResponse } from '../../interfaces/busca-rua-response';
import { RegionService } from '../../services/region.service';
import { IEstadoResponse } from '../../interfaces/estados/estado-response.interface';
import { ILocalidadeResponse } from '../../interfaces/localidade/localidade-response.interface';

@Component({
  selector: 'app-busca-rua',
  templateUrl: './busca-rua.component.html',
  styleUrl: './busca-rua.component.scss'
})
export class BuscaRuaComponent implements OnInit {
  ruaResponse: IRuaResponse[] = []
  ufs: IEstadoResponse[] = []
  localidades: ILocalidadeResponse[] = []
  idLocalidade: string = ''
  idRua: string = ''
  uf: string = ''
  cidade: string = ''
  rua: string = ''
  haveRua: boolean = false

  constructor(
    private readonly _rua: RuaService,
    private readonly _region: RegionService
  ) {}

  ngOnInit() {
      this.buscaUF()
  }

  buscaLocalidades(uf: any) {
      return this._region.buscaLocalidades(uf.id).subscribe((localidade) => {
        this.localidades = localidade
      })
  }

  buscaUF() {
    return this._region.buscaUF().subscribe((ufs) => {
      this.ufs = ufs
    })
  }

  buscaRua(uf: any, cidade: string, rua: string) {
    return this._rua.buscaRua(uf.sigla, cidade, rua).subscribe((ruas)=> {
      this.ruaResponse = ruas
      this.haveRua = true
    })
  }
}
