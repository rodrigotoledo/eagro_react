import React, { Component } from "react";

import { View } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import { Header, Left, Body, Button, Icon, Text } from "native-base";

import styles from "styles";

class CommonHeader extends Component {
  render() {
    const icon = this.props.icon || "home";
    const headerTitle = this.props.title || "eAgro::Projects";
    const bgColor = this.props.bgColor || '#009933';

    return (
      <Header
        style={
          this.props.bgColor
            ? { backgroundColor: this.props.bgColor }
            : { backgroundColor: "#009933" }
        }
      >
        <Left>
          <Button transparent onPress={() => Actions.pop()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <View style={{ flexDirection: "row" }}>
            <Icon name={icon} style={{ color: "#ffffff" }} />
            <Text style={styles.customHeader}>{headerTitle}</Text>
          </View>
        </Body>
      </Header>
    );
  }
}

export default CommonHeader;
