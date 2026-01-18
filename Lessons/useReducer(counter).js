import React, { useReducer } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};
//state == {count:0}
//action == {type:'increment' || type:'decrement', payload}

export default function App() {
  //const [counter, setCounter] = useState(0)
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View style={styles.container}>
      <Text style={{ padding: 25 }}>Sayı: {state.count} </Text>
      <Button
        title="Arttır"
        onPress={() => {
          //setCounter(counter + 1)
          dispatch({ type: "increment", payload: 1 });
        }}
      />
      <Button
        title="Azalt"
        onPress={() => {
          //setCounter(counter - 1);
          dispatch({ type: "decrement", payload: 1 });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5c5c5c",
  },
});
