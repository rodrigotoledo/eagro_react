import React, { Component } from "react";
import { Actions } from "react-native-router-flux";

import { Footer, FooterTab, Button, Icon, Text } from "native-base";
import { logoutUser } from 'actions/AuthActions';

class CommonFooterWithLogout extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical onPress={() => Actions.GlobalInformation()}>
            <Icon name="chatboxes" />
            <Text>Info.</Text>
          </Button>
          <Button vertical onPress={() => Actions.GlobalDoubts()}>
            <Icon name="ios-help-circle" />
            <Text>Dúvidas?</Text>
          </Button>

          <Button vertical onPress={() => logoutUser()}>
            <Icon name="log-out" />
            <Text>Sair</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default CommonFooterWithLogout;
