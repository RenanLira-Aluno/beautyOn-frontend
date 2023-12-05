import { User } from "./User"


export type Endereco = {
    logradouro: string,
    numero: string,
    complemento?: string,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string,
    latitude: number,
    longitude: number,
}