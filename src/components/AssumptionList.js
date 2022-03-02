import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import AssumptionItem from "./AssumptionItem";
const as = {
  name: "awdad",
  tags: ["awd", "aaa", "cccc"],
};
export default class AssumptionList extends Component {
  render() {
    return (
      <View>
        <AssumptionItem itemName={as.name} tags={as.tags} />
        <AssumptionItem itemName={as.name} tags={as.tags} />
        <AssumptionItem itemName={as.name} tags={as.tags} />
        <AssumptionItem itemName={as.name} tags={as.tags} />
        <AssumptionItem itemName={as.name} tags={as.tags} />
        <AssumptionItem itemName={as.name} tags={as.tags} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
