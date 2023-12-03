import { StatusBar } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import styled from "styled-components/native";

export const PageContainer = styled.View`
    flex: 1;
    background-color: #fff;
    padding-top: ${StatusBar.currentHeight}px;
`

export const DivContainer = styled.View`
    padding-left: ${moderateScale(6)}px;
`

export const InputContainer = styled.View`
    background-color: #F9F6FA;
    display: flex;
    flex-direction: row;
    padding: ${verticalScale(3)}px ${scale(10)}px;
    align-items: center;
    width: 80%;
    border-radius: ${moderateScale(10)}px;
`