import { ScrollView, Text, View } from "react-native"

import styled from "styled-components/native"
import { PageContainer, SecaoContainer } from "../../styles/Containers.style"
import { TextBase, Titulo } from "../../styles/Texto.style"
import Geolocation from "@react-native-community/geolocation"
import { options } from "react-native-mmkv-storage/dist/src/utils"
import { Estabelecimentos } from "../../services/estabelecimentos"
import { EstabelecimentoWithServices } from "../../models/User"
import { useContext, useEffect, useMemo, useState } from "react"
import { AuthContext } from "../../contexts/Auth.context"
import { SectionScroll } from "../../components/SectionScroll"




export const HomeScreen = () => {

    const {token} = useContext(AuthContext)

    const [estabelecimentos, setEstabelecimentos] = useState<EstabelecimentoWithServices[]>([])
    const [cabelos, setCabelos] = useState<EstabelecimentoWithServices[]>([])

    useEffect(() => {
        Geolocation.getCurrentPosition(async (info) => {
            setEstabelecimentos(await new Estabelecimentos(token!).proximos({lat: info.coords.latitude, long: info.coords.longitude}))
        })
    }, [])

    useEffect(() => {
        (async () => {
            setCabelos(await new Estabelecimentos(token!).findAll({tipoServico: ['0001']}))
        })()
    }, [setCabelos])



    return (
        <ScrollView>
            <PageContainer>
                <SecaoContainer>
                    <Titulo>Locais Proximos de você</Titulo>
                    <SectionScroll data={estabelecimentos}  />
                </SecaoContainer>
                <SecaoContainer>
                    <Titulo>Salões de Cabelo</Titulo>
                    <SectionScroll data={cabelos} />
                </SecaoContainer>
            </PageContainer>
        </ScrollView>
    )
}
