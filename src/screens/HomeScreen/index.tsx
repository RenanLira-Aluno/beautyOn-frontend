import { Text, View } from "react-native"

import styled from "styled-components/native"
import { PageContainer } from "../../styles/Containers.style"
import { Titulo } from "../../styles/Texto.style"
import { Input } from "../../components/Input"




export const HomeScreen = () => {

    return (
        <PageContainer>
            <Titulo>BeautyOn</Titulo>
            <Input />
        </PageContainer>
    )
}