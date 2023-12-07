import { Api } from "../config/Api";
import { EstabelecimentoComplete, EstabelecimentoWithServices } from "../models/User";
import { EstabelecimentoContract } from "./contracts/estabelecimentos.contract";
import { EstabelecimentosAllRequest, EstabelecimentosProximosRequest } from "./contracts/interfaces";

export class Estabelecimentos implements EstabelecimentoContract {
    constructor(
        private readonly token: string,
        private readonly apiInstance = Api.instance,
    ) {
        apiInstance.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${this.token}`

            return config
        })
    }

    async findAll({porNome, tipoServico} : EstabelecimentosAllRequest): Promise<EstabelecimentoWithServices[]> {
        const response = await this.apiInstance.get<EstabelecimentoWithServices[]>(
            `/estabelecimentos?tipoServico=${tipoServico?.join(',')}`)

        return response.data
    }

    async findOne(id: string): Promise<EstabelecimentoComplete> {
        const response = await this.apiInstance.get<EstabelecimentoComplete>(`/estabelecimentos/${id}`)

        return response.data
    }

    async proximos({lat, long} : EstabelecimentosProximosRequest) {
        const response = await this.apiInstance.get(`/estabelecimentos/proximos?lat=${lat}&long=${long}`,)

        return response.data
    }

}
