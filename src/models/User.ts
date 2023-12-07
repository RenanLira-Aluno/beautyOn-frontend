import { Endereco } from "./Endereco"
import { HorarioFuncionamento } from "./HorarioFuncionamento"
import { Servico } from "./Servico"


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

export interface Profissional extends User {

    descricao: string,
    primeiroNome: string,
    segundoNome: string,
}

export interface Estabelecimento extends User {
    nomeEmpresa: string,
    descricao: string,

    cnpj?: string,
}

export interface EstabelecimentoWithServices extends Estabelecimento {
    servicos: Servico[]
    endereco: Endereco
}

export interface EstabelecimentoComplete extends EstabelecimentoWithServices {
    horariosFuncionamento: HorarioFuncionamento[]
    profissionais: Profissional[]
}
