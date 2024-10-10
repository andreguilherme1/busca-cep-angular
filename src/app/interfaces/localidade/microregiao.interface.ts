import { Mesorregiao } from "./mesoregiao.interface";

export interface Microrregiao {
    id: number;
    nome: string;
    mesorregiao: Mesorregiao;
}