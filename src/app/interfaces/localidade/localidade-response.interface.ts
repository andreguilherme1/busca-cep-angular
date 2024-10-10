import { Microrregiao } from "./microregiao.interface";
import { Regiaoimediata } from "./regiao-imediata.interface";

export interface ILocalidadeResponse {
    id: number;
    nome: string;
    microrregiao: Microrregiao;
    'regiao-imediata': Regiaoimediata;
}