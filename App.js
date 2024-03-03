import React from "react";
import "react-native-get-random-values";
import { StyleSheet, View } from "react-native";
import FlatListView from "./FlatList";
import InputContainer from "./InputContainer";
import { ToDoProvider } from "./ToDoContext";

export default function App() {
  return (
    <View style={styles.container}>
      <ToDoProvider>
        <InputContainer />
        <FlatListView />
      </ToDoProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, paddingTop: 60 },
});
