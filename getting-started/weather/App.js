import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    const style = { color: "red" };

    return (
      <View style={styles.container}>
        <Text style={styles.red}>
          Open up App.js to start working on your app!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  red: {
    color: "red"
  }
});
