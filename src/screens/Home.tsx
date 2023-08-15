import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#a0a0f0",
      }}
    >
      <Text style={{ fontSize: 32, fontWeight: "bold", color: "#fff" }}>
        Home
      </Text>
    </View>
  );
}
