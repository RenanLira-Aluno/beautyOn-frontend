import { View } from "react-native"
import { TextBase } from "../styles/Texto.style"
import styled from "styled-components/native"
import { moderateScale } from "react-native-size-matters"
import { theme } from "../styles/theme"



interface ItemTipoServicoProps {
  nome: string
  preco: number
  duracao: number
}

const Container = styled.View`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${moderateScale(12)}px;
  border-radius: 4px;
  background-color: ${theme.colors.secondary};
`

const Line = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;

`


export const ItemTipoServico = ({...props} : ItemTipoServicoProps) => {

  return (
    <Container>
      <Line>
        <TextBase $size={18}>{props.nome}</TextBase>
        <TextBase $size={18}>R$ {props.preco}</TextBase>
      </Line>
      <Line>
        <TextBase $size={14}>{props.duracao} minutos</TextBase>
      </Line>
    </Container>
  )

}
