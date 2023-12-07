import { Api } from "../config/Api";
import { EstabelecimentoContract } from "./contracts/estabelecimentos.contract";
import { EstabelecimentosProximosRequest } from "./contracts/interfaces";

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

    async proximos({lat, long} : EstabelecimentosProximosRequest) {
        const response = await this.apiInstance.get(`/estabelecimentos/proximos?lat=${lat}&long=${long}`,)

        return response.data
    }

}