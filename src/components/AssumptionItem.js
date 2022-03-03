import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";

export default class AssumptionItem extends Component {
  render() {
    return (
      <View
        style={[
          styles.item,
          {
            borderColor:
              this.props.correctItem.itemName ===
              (this.props.item ? this.props.item.itemName : null)
                ? "#048548"
                : "#888",
          },
        ]}
      >
        <Image
          style={styles.itemThumbnail}
          source={{
            uri: this.props.item ? this.props.item.thumbnail_image : null,
          }}
        />
        <Text style={styles.itemName}>
          {this.props.item ? this.props.item.itemName : null}
        </Text>
        <View style={styles.itemTagsContainer}>
          {this.props.item
            ? this.props.item.tags.map((tag, key) => {
                // console.warn(`${tag}, ${this.props.correctTags}`);
                return (
                  <Text
                    style={[
                      styles.itemTag,
                      {
                        borderColor: this.props.correctItem.tags.includes(tag)
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
    textAlign: "center",
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
    height: 30,
  },
  itemThumbnail: {
    height: 50,
    width: 50,
    margin: 5,
  },
});
