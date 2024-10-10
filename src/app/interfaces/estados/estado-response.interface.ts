import { Regiao } from "./regiao.interface";

export interface IEstadoResponse {
    id: number;
    sigla: string;
    nome: string;
    regiao: Regiao;
}