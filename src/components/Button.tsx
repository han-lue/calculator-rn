import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isPurple?: boolean;
    isGray?: boolean;
}

export default function Button({onPress, title, isPurple, isGray} : ButtonProps) {
    const theme = useContext(ThemeContext);

    return(
        <TouchableOpacity 
        style={
            isPurple 
            ? Styles.btnPurple 
            : isGray
            ? Styles.btnGray
            : theme === "light"
            ? Styles.btnLight
            : Styles.btnDark
        }
        onPress={onPress}
        >
            

            <Text 
            style={
                    isPurple || isGray
                    ? Styles.smallTextLight
                    : theme === "dark"
                    ? Styles.smallTextLight
                    : Styles.smallTextDark
                }
                >
                {title}
            </Text>


        </TouchableOpacity>
    )


}