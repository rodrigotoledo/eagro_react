import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { Actions, Router } from "react-native-router-flux";
import { connect } from "react-redux";
import axios from "axios";

import { Container, Form, Item, Input, Content, Button, Text, Icon, H3 } from 'native-base';

import styles from 'styles';
import HeaderImage from 'components/HeaderImage';
import CommonHeaderOnlyCenter from 'components/CommonHeaderOnlyCenter';
import CommonFooter from 'components/CommonFooter';
import { changeUserEmail, changeUserPassword, loginUser } from 'actions/AuthActions';

class Login extends Component {
  render() {
    return <ImageBackground style={styles.bgApp} source={require("imgs/bg.png")}>
        <CommonHeaderOnlyCenter icon="md-key" title="Faça seu Login" />
        <Container>
          <View style={styles.generalContainer}>
            <HeaderImage />
            <Content contentContainerStyle={styles.contentCenter}>
              <H3>Para acessar o sistema preencha os dados abaixo</H3>
              <Form>
                <Item>
                  <Icon active name="md-person" style={styles.defaultBlueColor} />
                  <Input placeholder="E-mail" style={[styles.label, styles.input]} keyboardType="email-address" value={this.props.user_email} onChangeText={text => this.props.changeUserEmail(text)} returnKeyType="next" />
                </Item>
                <Item style={styles.lastInput}>
                  <Icon active name="md-lock" style={styles.defaultBlueColor} />
                  <Input placeholder="Senha" style={[styles.label, styles.input]} secureTextEntry returnKeyType="go" value={this.props.user_password} onChangeText={text => this.props.changeUserPassword(text)} />
                </Item>
                <Item style={styles.itemWithoutBorder}>
                  <View>
                    <Button style={styles.submitButton} small iconLeft primary onPress={() => loginUser(
                          {
                            email: this.props.user_email,
                            password: this.props.user_password
                          }
                        )}>
                      <Icon active name="md-log-in" />
                      <Text>Acessar</Text>
                    </Button>
                  </View>
                </Item>
              </Form>
            </Content>
          </View>
          <CommonFooter />
        </Container>
      </ImageBackground>;
  }
}

const mapStateToProps = state => ({
  user_email: state.AuthReducer.user_email,
  user_password: state.AuthReducer.user_password
});

export default connect(mapStateToProps, {
  changeUserEmail,
  changeUserPassword
})(Login);
