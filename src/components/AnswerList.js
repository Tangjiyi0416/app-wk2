import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { Component } from "react";
export default class AnswerList extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{ height: 900 }}>
        {this.props.possibleAnswers
          ? this.props.possibleAnswers.map((answer, key) => {
              return (
                <Pressable
                  key={key}
                  onPress={() => {
                    this.props.answerCallback(answer);
                  }}
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed
                        ? "rgb(210, 230, 255)"
                        : "#F2F2F2",
                    },
                    styles.button,
                  ]}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      style={styles.image}
                      source={{ uri: answer.thumbnail_image }}
                    />
                    <Text style={styles.buttonText}>{answer.itemName}</Text>
                  </View>
                </Pressable>
              );
            })
          : null}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: { padding: 5, margin: 10 },
  buttonText: { fontSize: 30, textAlignVertical: "center" },
  image: {
    height: 50,
    width: 50,
    margin: 5,
  },
});
