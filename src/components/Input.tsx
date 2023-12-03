import { MagnifyingGlass } from "phosphor-react-native"
import { TextInput, View } from "react-native"
import { InputContainer } from "../styles/Containers.style"
import { moderateScale } from "react-native-size-matters"
import { InputBase } from "../styles/Input.style"


export const Input = () => {

    return (
        <InputContainer>
            <MagnifyingGlass color="#000" size={24} />
            <InputBase />
        </InputContainer>
    )
}