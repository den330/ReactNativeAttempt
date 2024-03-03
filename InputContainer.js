import { Button, TextInput, View, StyleSheet } from "react-native";
import { useContext } from "react";
import { ToDoContext } from "./ToDoContext";

export default function InputContainer() {
  const { inputText, setInputText, handleSubmit } = useContext(ToDoContext);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter todo"
        style={styles.input}
        onChangeText={setInputText}
        value={inputText}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
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
