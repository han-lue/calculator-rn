import * as React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Colors";


export default function MyKeyboard() {
    const [firstNumber, setFirstNumber] = React.useState("");
    const [secondNumber, setSecondNumber] = React.useState("");
    const [operation, setOperation] = React.useState("");
    const [operationIcon, setOperationIcon] = React.useState("");
    const [result, setResult] = React.useState<any | null >(null);


    const firstNumberDisplay = () => {
      if (result !== null) {
          return <Text style={
            +result < 99999 
            ? [Styles.screenFirstNumber, {color: myColors.result}] 
            : [Styles.screenFirstNumber, {fontSize: 50, color: myColors.result}]}
          >
            {result?.toString()}
          </Text>; 
      }

      if (firstNumber && firstNumber.length < 6) {
        return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
      }

      if (firstNumber === "") {
        return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
      }

      if (firstNumber.length > 5 && firstNumber.length < 8) {
        return (
          <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
            {firstNumber}
          </Text>
        );
      }
      
      if (firstNumber.length > 7) {
        return (
          <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
            {firstNumber}
          </Text>
        );
      }
    };

    const handleNumberPress = (buttonValue: string) => {

      if (firstNumber.length < 10) {
        setResult(null);
        setFirstNumber(firstNumber + buttonValue);
      }
    
    };

    const handleOperationPress = (buttonValue: string) => {

      switch (buttonValue) {
        case "*":
          setOperationIcon("×");
          break;

        case "/":
          setOperationIcon("÷");  
          break;   

        default: 
            setOperationIcon(buttonValue);
      }
    
      if (firstNumber === "" && secondNumber === "" && result !== null){ 
        
        setOperation(buttonValue);
        setSecondNumber(result);
        setFirstNumber("");
        setResult(null);

      } else {

        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");

      }
    };
    
    const clearAll = () => {
      setFirstNumber("");
      setSecondNumber("");
      setOperation("");
      setOperationIcon("");
      setResult(null);
    };

    const getResult = () => {
      switch (operation) {
        case "+":
            clearAll();
            setResult(Math.round((parseFloat(secondNumber) + parseFloat(firstNumber)) * 100) / 100);
            break;
        case "-":
            clearAll();
            setResult(Math.round((parseFloat(secondNumber) - parseFloat(firstNumber)) * 100) / 100);
            break;
        case "*":
            clearAll();
            setResult(Math.round((parseFloat(secondNumber) * parseFloat(firstNumber)) * 100) / 100);
            break;
        case "/":
            clearAll();
            setResult(Math.round((parseFloat(secondNumber) / parseFloat(firstNumber)) * 100) / 100);
            break;
        case "+/-":
            clearAll();
            setResult(Math.round((parseFloat(secondNumber) * -1) * 100) / 100 );
            break;
        case "%":
            clearAll();
            setResult(Math.round((parseFloat(secondNumber) / 100) * 100) / 100);
            break;
        default: 
            clearAll();
            setResult(null);
            break;
        }
    };

    return(
      <View style={Styles.viewBottom}>
        <View
          style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
          }}
        >

        {
        <Text style={Styles.screenSecondNumber}> {secondNumber} 
          <Text style={{ color: "purple", fontSize: 40, fontWeight: '500' }}>{operationIcon}</Text>
        </Text>
        }
        
        {firstNumberDisplay()}
        </View>

        <View style={Styles.row}>
          <Button title="C" isGray onPress={clearAll} />

          <Button title="+/-" 
            isGray 
            onPress={() => {
              handleOperationPress("+/-")
            }}
          />

          <Button title="%" 
            isGray 
            onPress={() => {
              handleOperationPress("%")
            }}
          />

          <Button title="÷" 
            isPurple 
            onPress={() => {
              handleOperationPress("/")
            }} 
          />
        </View>

        <View style={Styles.row}>
          <Button title="7" isWhite onPress={() => handleNumberPress("7")} />
          <Button title="8" isWhite onPress={() => handleNumberPress("8")} />
          <Button title="9" isWhite onPress={() => handleNumberPress("9")} />
          
          <Button title="×" 
            isPurple 
            onPress={() => {
              handleOperationPress("*")
              }}
            />
        </View>

        <View style={Styles.row}>
          <Button title="4" isWhite onPress={() => handleNumberPress("4")} />
          <Button title="5" isWhite onPress={() => handleNumberPress("5")} />
          <Button title="6" isWhite onPress={() => handleNumberPress("6")} />
          
          <Button title="-" 
            isPurple 
            onPress={() => {
              handleOperationPress("-")
            }}
          />
        </View>

        <View style={Styles.row}>
            <Button title="1" isWhite onPress={() => handleNumberPress("1")} />
            <Button title="2" isWhite onPress={() => handleNumberPress("2")} />
            <Button title="3" isWhite onPress={() => handleNumberPress("3")} />
            
            <Button title="+" 
              isPurple 
              onPress={() => {
                handleOperationPress("+")
              }}
            />
        </View>

        <View style={Styles.row}>
            <Button title="0" isWhite onPress={() => handleNumberPress("0")} />
            <Button title="." isWhite onPress={() => handleNumberPress(".")} />
            <Button title="CE" isWhite onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
            <Button title="=" isPurple onPress={() => getResult()} />
        </View>
    </View>

    );

}