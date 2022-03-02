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
      isAnswerModalVisible: false,
      isGameEndedModalVisible: false,
      won: false,
      correctAnswer: answers[Math.floor(Math.random() * answers.length)],
    };
    this.toggleAnswerModal = this.toggleAnswerModal.bind();
    this.toggleGameEndedModal = this.toggleGameEndedModal.bind();
    this.makeAssumption = this.makeAssumption.bind();
    this.restartGame = this.restartGame.bind();
    console.warn(this.state.correctAnswer);
  }
  toggleGameEndedModal = () => {
    this.setState({
      isGameEndedModalVisible: !this.state.isGameEndedModalVisible,
    });
  };
  toggleAnswerModal = () => {
    this.setState({ isAnswerModalVisible: !this.state.isAnswerModalVisible });
  };
  makeAssumption = (answer) => {
    this.toggleAnswerModal();
    this.setState({ assumptions: [...this.state.assumptions, answer] });
    if (
      answer.itemName === this.state.correctAnswer.itemName ||
      this.state.assumptions.length >= 6
    ) {
      this.setState({ won: true });
      this.toggleGameEndedModal();
    }
  };
  restartGame = () => {
    this.setState({
      assumptions: [],
      isAnswerModalVisible: false,
      isGameEndedModalVisible: false,
      won: false,
      correctAnswer: answers[Math.floor(Math.random() * answers.length)],
    });
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
        <AssumptionList
          items={this.state.assumptions}
          correctAnswer={this.state.correctAnswer}
        />
        <Pressable
          onPressIn={this.toggleAnswerModal}
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

        <Modal
          isVisible={this.state.isAnswerModalVisible}
          useNativeDriver={true}
        >
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View>
              <Text style={styles.answerModalTitle}>Choose One</Text>
              <AnswerList
                answerCallback={this.makeAssumption}
                possibleAnswers={answers}
              />
            </View>
            <Pressable
              onPressIn={this.toggleAnswerModal}
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
        <Modal
          isVisible={this.state.isGameEndedModalVisible}
          useNativeDriver={true}
        >
          <View style={{ flex: 1, justifyContent: "space-around" }}>
            <Text
              style={{
                fontSize: 40,
                textAlign: "center",
                color: this.state.won ? "#93F2A3" : "#93F2A3",
              }}
            >
              {this.state.won ? "You Win." : "You Lose."}
            </Text>
            <Pressable
              onPressIn={this.restartGame}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "rgb(210, 230, 255)" : "#93F2A3",
                },
                styles.button,
              ]}
            >
              {({ pressed }) => (
                <Text style={styles.buttonText}>
                  {pressed ? "Restarting..." : "Restart"}
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
