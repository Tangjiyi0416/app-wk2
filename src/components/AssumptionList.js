import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import AssumptionItem from "./AssumptionItem";
export default class AssumptionList extends Component {
  render() {
    return (
      <View>
        <AssumptionItem
          itemName={this.props.items[0] ? this.props.items[0].itemName : null}
          tags={this.props.items[0] ? this.props.items[0].tags : null}
          correctItemName={
            this.props.correctAnswer ? this.props.correctAnswer.itemName : null
          }
          correctTags={
            this.props.correctAnswer ? this.props.correctAnswer.tags : null
          }
        />
        <AssumptionItem
          itemName={this.props.items[1] ? this.props.items[1].itemName : null}
          tags={this.props.items[1] ? this.props.items[1].tags : null}
          correctItemName={
            this.props.correctAnswer ? this.props.correctAnswer.itemName : null
          }
          correctTags={
            this.props.correctAnswer ? this.props.correctAnswer.tags : null
          }
        />
        <AssumptionItem
          itemName={this.props.items[2] ? this.props.items[2].itemName : null}
          tags={this.props.items[2] ? this.props.items[2].tags : null}
          correctItemName={
            this.props.correctAnswer ? this.props.correctAnswer.itemName : null
          }
          correctTags={
            this.props.correctAnswer ? this.props.correctAnswer.tags : null
          }
        />
        <AssumptionItem
          itemName={this.props.items[3] ? this.props.items[3].itemName : null}
          tags={this.props.items[3] ? this.props.items[3].tags : null}
          correctItemName={
            this.props.correctAnswer ? this.props.correctAnswer.itemName : null
          }
          correctTags={
            this.props.correctAnswer ? this.props.correctAnswer.tags : null
          }
        />
        <AssumptionItem
          itemName={this.props.items[4] ? this.props.items[4].itemName : null}
          tags={this.props.items[4] ? this.props.items[4].tags : null}
          correctItemName={
            this.props.correctAnswer ? this.props.correctAnswer.itemName : null
          }
          correctTags={
            this.props.correctAnswer ? this.props.correctAnswer.tags : null
          }
        />
        <AssumptionItem
          itemName={this.props.items[5] ? this.props.items[5].itemName : null}
          tags={this.props.items[5] ? this.props.items[5].tags : null}
          correctItemName={
            this.props.correctAnswer ? this.props.correctAnswer.itemName : null
          }
          correctTags={
            this.props.correctAnswer ? this.props.correctAnswer.tags : null
          }
          correct={this.props.correct ? true : false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
