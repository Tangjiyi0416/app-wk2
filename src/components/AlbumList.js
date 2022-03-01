import { ScrollView, Text } from "react-native";
import React from "react";
import AlbumDetail from "./AlbumDetail";
import albumData from "../json/albums.json";

export default function AlbumList() {
  return (
    <ScrollView>
      {albumData.map((data, key) => {
        return (
          <AlbumDetail
            title={data.title}
            artist={data.artist}
            thumbnail_image={data.thumbnail_image}
            image={data.image}
            key={key}
          />
        );
      })}
    </ScrollView>
  );
}
