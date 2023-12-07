import styled from "styled-components/native"
import { PageContainer } from "../../styles/Containers.style"
import { RouteProp, useRoute } from "@react-navigation/native"
import { AppRoutesParams } from "../../routes/app.routes"
import { useContext, useEffect, useState } from "react"
import { EstabelecimentoComplete, EstabelecimentoWithServices } from "../../models/User"
import { Estabelecimentos } from "../../services/estabelecimentos"
import { AuthContext } from "../../contexts/Auth.context"
import { urlPadrao } from "../../components/ItemCard"
import { moderateScale, verticalScale } from "react-native-size-matters"
import { SubTitulo, TextBase, Titulo } from "../../styles/Texto.style"
import { ItemTipoServico } from "../../components/ItemTipoServico"
import { View } from "react-native"
import dayjs from "dayjs"
import weekday from "dayjs/plugin/weekday"
import { DiaSemana } from "../../models/HorarioFuncionamento"
dayjs.extend(weekday)

const ImagePerfil = styled.Image`
  width: 40%;
  aspect-ratio: 1;
  height: auto;
  border-radius: ${moderateScale(8)}px;

`
const Header = styled.View`

  display: flex;
  flex-direction: row;
`

const Secao = styled.View`

`

const Description = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: ${moderateScale(8)}px;
`

export const PerfilEstabelecimento = () => {

  const route = useRoute<RouteProp<AppRoutesParams, 'PerfilEstabelecimento'>>()
  const {token} = useContext(AuthContext)

  const [item, setItem] = useState<EstabelecimentoComplete>()

  useEffect(() => {
    const id = route.params.id;

    (async () => {
      const esta = await new Estabelecimentos(token!).findOne(id)
      setItem(esta)
    })()

  }, [setItem])



  return (
    <PageContainer style={{paddingTop: verticalScale(32)}}>
      <Header>
        <ImagePerfil source={{uri: item?.fotoPerfil ?? urlPadrao}} />
        <Description>
          <Titulo>{item?.nomeEmpresa}</Titulo>
          <TextBase>{item?.descricao}</TextBase>
          <TextBase>{item?.email}</TextBase>
        </Description>
      </Header>
      <Secao>
        <SubTitulo>Serviços</SubTitulo>
        {item?.servicos.map(servico => {
          return (
            <ItemTipoServico nome={servico.nome} preco={servico.preco} key={servico.id} duracao={servico.duracao} />
          )
        })}
      </Secao>
      <Secao>
        <SubTitulo>Horarios de Funcionamento</SubTitulo>
        {item?.horariosFuncionamento.map(horario => {
          return (
            <View key={horario.id}>
              <TextBase>{DiaSemana[horario.diaSemana]}</TextBase>
              <TextBase>{horario.horaAbertura} - {horario.horaFechamento}</TextBase>
            </View>
          )
        })}
      </Secao>
      <Secao>
        <SubTitulo>Nossos Profissionais</SubTitulo>
        {item?.profissionais.map(prof => {
          return (
            <View key={prof.id}>
              <TextBase>{prof.primeiroNome} {prof.segundoNome}</TextBase>
              <TextBase>"{prof.descricao}"</TextBase>
            </View>
          )
        })}
      </Secao>
    </PageContainer>
  )
}
