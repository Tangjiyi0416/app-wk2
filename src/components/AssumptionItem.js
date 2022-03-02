import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

export default class AssumptionItem extends Component {
  render() {
    return (
      <View style={styles.item}>
        <Text style={styles.itemName}>{this.props.itemName || ""}</Text>
        <View style={styles.itemTagsContainer}>
          {this.props.tags ? (
            this.props.tags.map((tag, key) => {
              return (
                <Text style={styles.itemTag} key={key}>
                  {tag}
                </Text>
              );
            })
          ) : (
            <Text></Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#000",
    margin: 10,
    padding: 5,
  },
  itemName: {
    fontSize: 20,
  },
  itemTagsContainer: {
    flexDirection: "row",
  },
  itemTag: {
    fontSize: 14,
  },
});
