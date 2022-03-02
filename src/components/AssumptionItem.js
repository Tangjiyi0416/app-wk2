import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

export default class AssumptionItem extends Component {
  render() {
    return (
      <View style={styles.item}>
        <Text
          style={
            ({ borderColor: this.props.correct ? "#048548" : "#888" },
            styles.itemName)
          }
        >
          {this.props.itemName || ""}
        </Text>
        <View style={styles.itemTagsContainer}>
          {this.props.tags
            ? this.props.tags.map((tag, key) => {
                return (
                  <Text
                    style={
                      ({ borderColor: this.props.correct ? "#048548" : "#888" },
                      styles.itemTag)
                    }
                    key={key}
                  >
                    {tag}
                  </Text>
                );
              })
            : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#888",
    margin: 10,
    padding: 5,
  },
  itemName: {
    fontSize: 20,
    marginRight: 5,
  },
  itemTagsContainer: {
    flexDirection: "row",
  },
  itemTag: {
    fontSize: 14,
    marginHorizontal: 5,
    padding: 3,
    borderColor: "#888",
    borderWidth: 2,
    textAlignVertical: "center",
    textAlign: "center",
  },
});
