import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function AlbumDetail(props) {
  const { title, artist, thumbnail_image, image } = props;

  return (
    <View style={styles.cardContainerStyle}>
      <View style={styles.thumbnailContainerStyle}>
        <Image
          style={styles.thumbnailStyle}
          source={{ uri: thumbnail_image }}
        />

        <View style={styles.headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </View>

      <View style={styles.cardSectionStyle}>
        <Image style={styles.imageStyle} source={{ uri: image }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5,
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1,
  },
  imageStyle: {
    height: 300,
    width: null,
  },
});
