import { EstabelecimentoComplete, EstabelecimentoWithServices } from "../../models/User";
import { EstabelecimentosAllRequest, EstabelecimentosProximosRequest } from "./interfaces";


export interface EstabelecimentoContract {
    proximos({lat, long}: EstabelecimentosProximosRequest) : Promise<EstabelecimentoWithServices[]>
    findOne(id: string): Promise<EstabelecimentoComplete>
    findAll({} : EstabelecimentosAllRequest): Promise<EstabelecimentoWithServices[]>
}
