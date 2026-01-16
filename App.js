import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const courses = [
    { name: "Angular", id: 1 },
    { name: "React JS", id: 2 },
    { name: "C#", id: 3 },
    { name: "C++", id: 4 },
    { name: "Bootstrap", id: 5 },
  ];
  return (
    <SafeAreaView>
      <FlatList
        data={courses}
        //showsHorizontalScrollIndicator = {false} // Kaydırma çubuğunu görünmez yapar
        keyExtractor={(item) => item.id} //itemlere id verir
        renderItem={({ item }) => {
          return <Text style={styles.content}>{item.name}</Text>; //arraydeki her itemi sırayla yazdırır
        }}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: 20,
    backgroundColor: "yellow",
    marginVertical: 5,
    padding: 10,
  },
});
