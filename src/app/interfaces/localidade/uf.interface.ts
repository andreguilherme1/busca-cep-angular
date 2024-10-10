import { Regiao } from "./regiao.interface";

export interface UF {
    id: number;
    sigla: string;
    nome: string;
    regiao: Regiao;
}