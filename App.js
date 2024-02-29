import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.flexHol}>
        <TextInput style={styles.input} placeholder="Enter your Goal" />
        <Button style={styles.btn} title="Submit" />
      </View>
      <View>
        <Text> List of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  flexHol: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 0,
  },
  btn: { flex: 0 },
});
