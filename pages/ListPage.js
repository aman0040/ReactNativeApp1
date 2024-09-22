import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ListPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => alert(`You pressed ${item.title}`)}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "lightblue" : "aqua",
              },
              styles.item,
            ]}
          >
            <Text style={styles.itemText}>{item.title}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Home Page"
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          title="About Page"
          onPress={() => navigation.navigate("About")}
        />
      </View>
    </SafeAreaView>
  );
}

const data = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
  // Add the remaining items...
  { id: "20", title: "Item 20" },
  { id: "21", title: "Item 21" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  item: {
    padding: 16,
    margin: 2,
  },
  itemText: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
  },
});
