import { StyleSheet } from "react-native";
import { myColors } from "./Colors"; 

export const Styles = StyleSheet.create({
    // Button
    btnPurple: {
        width: '20%',
        aspectRatio: 1,
        borderRadius: 100,
        backgroundColor: myColors.purple,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnWhite: {
        width: '20%',
        aspectRatio: 1,
        borderRadius: 100,
        backgroundColor: myColors.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGray: {
        width: '20%',
        aspectRatio: 1,
        borderRadius: 100,
        backgroundColor: myColors.btnGray,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    smallTextLight: {
        fontSize: 32,
        color: myColors.white,
    },
    smallTextDark: {
        fontSize: 32,
        color: myColors.black,
    },
    // Keyboard
    row: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    viewBottom: {
        position: 'absolute',
        width: "95%", 
        bottom: 30,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: myColors.black,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: myColors.black,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
})