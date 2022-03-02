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
import AnswerList from "./src/components/AnswerList";
import answers from "./src/json/albums.json";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assumptions: [],
      isModalVisible: false,
      correctAnswer: answers[Math.floor(Math.random() * answers.length)],
    };
    this.toggleModal = this.toggleModal.bind();
    this.makeAssumption = this.makeAssumption.bind();
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  makeAssumption = (answer) => {
    if (answer.itemName === this.state.correctAnswer.itemName)
      answer.correct = true;
    this.setState({ assumptions: [...this.state.assumptions, answer] });
    this.toggleModal();
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
        <AssumptionList items={this.state.assumptions} />
        <Pressable
          onPressIn={this.toggleModal}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "#93F2A3",
            },
            styles.button,
          ]}
        >
          {({ pressed }) => (
            <Text style={styles.buttonText}>
              {pressed ? "Waiting..." : "Make a Guess!"}
            </Text>
          )}
        </Pressable>

        <Modal isVisible={this.state.isModalVisible} useNativeDriver={true}>
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View>
              <Text style={styles.answerModalTitle}>Choose One</Text>
              <AnswerList
                answerCallback={this.makeAssumption}
                possibleAnswers={answers}
              />
            </View>
            <Pressable
              onPressIn={this.toggleModal}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "rgb(210, 230, 255)" : "#F293A3",
                },
                styles.button,
              ]}
            >
              {({ pressed }) => (
                <Text style={styles.buttonText}>
                  {pressed ? "Canceld" : "Cancel"}
                </Text>
              )}
            </Pressable>
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
  button: { alignSelf: "center", padding: 5, margin: 10 },
  buttonText: { fontSize: 30 },
  answerModal: {},
  answerModalTitle: {
    fontSize: 30,
    color: "#FFF",
    textAlign: "center",
    margin: 13,
  },
});
