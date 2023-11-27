import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isPurple?: boolean;
    isGray?: boolean;
    isWhite?: boolean;
}

export default function Button({onPress, title, isPurple, isGray, isWhite} : ButtonProps) {

    return(
        <TouchableOpacity 
        style={
            isPurple 
            ? Styles.btnPurple 
            : isGray
            ? Styles.btnGray
            : isWhite
            ? Styles.btnWhite
            : Styles.btnGray //this is there only so the code compiles. fix the code later and remove it.
        }
        onPress={onPress}
        >
            

            <Text 
            style={
                    isPurple || isGray 
                    ? Styles.smallTextLight
                    : Styles.smallTextDark
                }
                >
                {title}
            </Text>


        </TouchableOpacity>
    )


}