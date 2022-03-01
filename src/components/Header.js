import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.headerTextStyle}>Albums</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#F8F8F8",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  headerTextStyle: {
    fontSize: 20,
  },
});

export default Header;
