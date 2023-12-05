import { PixelRatio } from "react-native";
import styled from "styled-components/native";

export const Titulo = styled.Text<{$color?: string}>`
    font-family: 'NunitoSans_10pt-Bold';
    font-size: 30px;
    color: ${({$color}) => ($color ?? '#fff')};
`

export const TextBase = styled.Text<{$color?: string}>`
    font-family: 'NunitoSans_10pt-Regular';
    font-size: ${PixelRatio.getFontScale() * 14}px;
    color: ${({$color}) => ($color ?? '#fff')};
`