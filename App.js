import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Header />
        {/*
        AssumptionList
          AssumptionItem:albumName,thumbnail
            tag
        Guess button
          AnswerList
            AnswerItem:albumName,thumbnail

        */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
