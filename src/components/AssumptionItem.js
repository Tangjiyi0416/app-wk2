import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

export default class AssumptionItem extends Component {
  render() {
    return (
      <View
        style={[
          styles.item,
          {
            borderColor:
              this.props.correctItemName === this.props.itemName
                ? "#048548"
                : "#888",
          },
        ]}
      >
        <Text style={styles.itemName}>{this.props.itemName || ""}</Text>
        <View style={styles.itemTagsContainer}>
          {this.props.tags
            ? this.props.tags.map((tag, key) => {
                // console.warn(`${tag}, ${this.props.correctTags}`);
                return (
                  <Text
                    style={[
                      styles.itemTag,
                      {
                        borderColor: this.props.correctTags.includes(tag)
                          ? "#048548"
                          : "#888",
                      },
                    ]}
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
