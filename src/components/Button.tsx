import { DimensionValue, TouchableHighlightProps, TouchableOpacity } from "react-native"
import { TextBase } from "../styles/Texto.style"
import styled from "styled-components/native"
import { scale, verticalScale } from "react-native-size-matters"

interface ButtonProps extends TouchableHighlightProps {
    texto: string
    width?: DimensionValue
}

const ButtonStyled = styled.TouchableOpacity`
    background-color: #008C72;
    padding: 10px 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    height: ${verticalScale(42)}px;
`

export const Button = ({ texto, width, ...props}:ButtonProps) => {

    return (
        <ButtonStyled 
        style={{width: width ?? `auto`}}
        {...props}>
            <TextBase $color="#fff">{texto}</TextBase>
        </ButtonStyled>
    )
}