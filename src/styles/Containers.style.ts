import { StatusBar } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import styled from "styled-components/native";

export const PageContainer = styled.View`
    flex: 1;
    padding-top: ${StatusBar.currentHeight}px;
    padding-left: ${scale(20)}px;
    padding-right: ${scale(20)}px;
`

export const DivContainer = styled.View`
    padding-left: ${moderateScale(6)}px;
`

export const GroupInputContainer = styled.View`
    display: flex;
    gap: ${moderateScale(10)}px;
    width: 100%;
    align-items: center;
`

export const FormContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${moderateScale(20)}px;
    width: 80%;
`


export const InputContainer = styled.View`
    background-color: #FFFFFF20;
    display: flex;
    flex-direction: row;
    padding: ${verticalScale(3)}px ${scale(10)}px;
    align-items: center;
    gap: ${moderateScale(8)}px;
    width: 100%;
    border-radius: ${moderateScale(10)}px;
`