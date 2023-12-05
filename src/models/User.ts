import { Endereco } from "./Endereco"


export type User = {
    id: string,
    email: string,
    telefone: string,
    endereco?: Endereco
    fotoPerfil?: string,
}

export interface Cliente extends User {
    primeiroNome: string,
    segundoNome: string,
    lat?: number,
    long?: number,
}

export interface Estabelecimento extends User {
    nomeEmpresa: string,
    descricao: string,
    
    cnpj?: string,
}