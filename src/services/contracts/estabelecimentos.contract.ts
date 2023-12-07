import { EstabelecimentoWithServices } from "../../models/User";
import { EstabelecimentosProximosRequest } from "./interfaces";


export interface EstabelecimentoContract {
    proximos({lat, long}: EstabelecimentosProximosRequest) : Promise<EstabelecimentoWithServices[]>
}