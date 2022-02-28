import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AlbumDetail from "./AlbumDetail";

export default function AlbumList() {
  const contents = [
    {
      artistName: "awdawd",
      albumName: "awdawda",
      thumbnailImageUri:
        "https://i.picsum.photos/id/193/300/300.jpg?hmac=PuL4l65PxJnJLUsAHZvha_pLcSnrgn6yDHDcUhgcTWc",
      imageUri:
        "https://i.picsum.photos/id/193/300/300.jpg?hmac=PuL4l65PxJnJLUsAHZvha_pLcSnrgn6yDHDcUhgcTWc",
    },
  ];
  return (
    <View>
      <Image
        style={styles.imgStyle}
        source={{ uri: contents[0].thumbnailImageUri }}
      />
      {contents.map((ctn) => {
        <AlbumDetail
          artistName={ctn.artistName}
          albumName={ctn.albumName}
          thumbnailImageUri={ctn.thumbnailImageUri}
          imageUri={ctn.imageUri}
        />;
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  imgStyle: { height: 300, width: 300 },
});
