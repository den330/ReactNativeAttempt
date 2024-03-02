import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { v4 as uuidv4 } from "uuid"; // Import UUID

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
      <FlatList
        style={styles.flatList}
        data={todos}
        renderItem={({ item }) => <Text>{item.text}</Text>}
        keyExtractor={(item, index) => item.id} // Use the UUID as the key
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30 },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "black",
    width: "80%",
  },
  flatList: { flex: 5 },
});
