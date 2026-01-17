import React, {useState} from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0)
  return (
    <View style = {styles.container}>
      <Text style = {{padding: '25'}}>Sayı: {counter} </Text>
      <Button title = "Arttır" onPress={()=> {
        setCounter(counter + 1)
      }}/>
      <Button title = "Azalt" onPress={()=> {
        setCounter(counter - 1)
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#5c5c5c',
  },
});
