import { StyleSheet, FlatList, View, Text } from "react-native";
import { useContext } from "react";
import { ToDoContext } from "./ToDoContext";

export default function FlatListView() {
  const { todos } = useContext(ToDoContext);
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Text style={styles.flatListItem}>{item.text}</Text>
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
