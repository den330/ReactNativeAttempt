import React, { useState } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid"; // Import UUID
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import FlatListView from "./FlatList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleSubmit() {
    if (inputText.trim() !== "") {
      // Create a new todo object with a UUID
      const newTodo = { id: uuidv4(), text: inputText };
      setTodos([...todos, newTodo]);
      setInputText("");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter todo"
          style={styles.input}
          onChangeText={setInputText}
          value={inputText}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
      <FlatListView todos={todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, paddingTop: 60 },
  inputContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "black",
  },
});
