import { Text, StyleSheet, View, ScrollView, Pressable } from "react-native";
import React, { Component } from "react";
export default class AnswerList extends Component {
  render() {
    return (
      <ScrollView>
        {this.props.possibleAnswers
          ? this.props.possibleAnswers.map((answer, key) => {
              return (
                <Pressable
                  key={key}
                  onPressIn={() => {
                    this.props.answerCallback(answer);
                  }}
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed
                        ? "rgb(210, 230, 255)"
                        : "#93F2A3",
                    },
                    styles.button,
                  ]}
                >
                  {({}) => (
                    <Text style={styles.buttonText}>{answer.itemName}</Text>
                  )}
                </Pressable>
              );
            })
          : null}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: { alignSelf: "center", padding: 5, margin: 10 },
  buttonText: { fontSize: 30 },
});
