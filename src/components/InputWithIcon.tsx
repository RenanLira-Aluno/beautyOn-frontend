import { Icon, MagnifyingGlass } from "phosphor-react-native"
import { TextInput, TextInputProps, View } from "react-native"
import { InputContainer } from "../styles/Containers.style"
import { moderateScale } from "react-native-size-matters"
import { InputBase } from "../styles/Input.style"

interface InputWithIconProps extends TextInputProps {
    Icon: Icon
}
export const InputWithIcon = ({Icon, ...props} : InputWithIconProps) => {

    return (
        <InputContainer>
            <Icon color="#fff" size={24} />
            <InputBase {...props} cursorColor={'#fff'} />
        </InputContainer>
    )
}