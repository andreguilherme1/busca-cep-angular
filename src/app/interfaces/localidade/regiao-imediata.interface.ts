import { Mesorregiao } from "./mesoregiao.interface";

export interface Regiaoimediata {
    id: number;
    nome: string;
    'regiao-intermediaria': Mesorregiao;
}