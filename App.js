import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Pressable,
  View,
  Button,
} from "react-native";
import Header from "./src/components/Header";
import Modal from "react-native-modal";
// import AlbumList from "./src/components/AlbumList";
import React from "react";
import AssumptionList from "./src/components/AssumptionList";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { assumptionCount: 0, isModalVisible: false };
    this.toggleModal = this.toggleModal.bind();
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
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
          AnswerModal
          AnswerList
            AnswerItem:albumName,thumbnail

        */}
        <AssumptionList />
        <Pressable
          onPress={this.toggleModal}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
            },
            styles.guessButton,
          ]}
        >
          {({ pressed }) => (
            <Text style={styles.guessButtonText}>
              {pressed ? "Pressed!" : "Press Me"}
            </Text>
          )}
        </Pressable>

        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>

            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  guessButton: {},
  guessButtonText: {},
});
