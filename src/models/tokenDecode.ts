
export type TokenDecode = {
    email: string, 
    exp: number, 
    iat: number, 
    sub: string, 
    tipo: "Cliente" | "Estabelecimento"
}