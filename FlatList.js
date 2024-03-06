import { StyleSheet, FlatList, View, Text, Pressable } from "react-native";
import { useToDoContext } from "./ToDoContext";

export default function FlatListView() {
  const { todos, setTodos } = useToDoContext();
  function handlePress(itemID) {
    setTodos((prevToDos) => {
      return prevToDos.filter((item) => item.id !== itemID);
    });
  }
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              handlePress(item.id);
            }}
          >
            <Text style={styles.flatListItem}>{item.text}</Text>
          </Pressable>
        )}
        keyExtractor={(item, index) => item.id} // Use the UUID as the key
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContainer: { flex: 1, marginTop: 20 },
  flatListItem: { marginBottom: 10, color: "purple" },
});
