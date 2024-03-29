import { Button, TextInput, View, StyleSheet } from "react-native";
import { useToDoContext } from "./ToDoContext";

export default function InputContainer() {
  const { inputText, setInputText, handleSubmit } = useToDoContext();
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
