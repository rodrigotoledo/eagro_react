import React, {Component} from 'react';
import axios from 'axios';
import { View, ScrollView, ImageBackground, AsyncStorage, Alert } from 'react-native';
import { Body, Container, Text, Card, CardItem } from 'native-base';

import styles from 'styles';
import CommonHeader from 'components/CommonHeader';
import CommonFooterWithLogout from 'components/CommonFooterWithLogout';
import TodoList from 'components/TodoList';
import Constants from 'Constants';

class Project extends Component {
  state = {
    todo_lists: []
  };

  async componentDidMount() {
    const auth_token = await AsyncStorage.getItem('auth_token');
    this.getTodoLists(auth_token);
  }

  getTodoLists = auth_token => {
    let projectsUrl = Constants.WEB_ADDRESS + '/projects/' + this.props.project.id + '/todo_lists';
    axios
      .get(projectsUrl, {
        headers: {
          Accept: 'application/vnd.eagro.v1',
          'Content-Type': 'application/json',
          Authorization: auth_token
        }
      })
      .then(async response => {
        if (response.status >= 200 && response.status < 203) {
          try {
            this.setState({
              todo_lists: response.data
            });
          } catch (e) {
            // console.tron.log('Erro ao obter as Tarefas');
            Alert.alert('Erro', 'Erro ao obter as Tarefas');
          }
        }
      })
      .catch(error => {
        // console.tron.log('Erro ao obter as Tarefas');
        Alert.alert('Erro', 'Erro ao obter as Tarefas');
      });
  };

  render() {
    return <ImageBackground style={styles.bgApp} source={require("imgs/bg.png")}>
        <CommonHeader icon="list" title="Lista de Tarefas" bgColor="#009933" />
        <Container>
          <View style={styles.generalContainer}>
            <ScrollView style={styles.generalScrollView}>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={styles.bold}>
                      Projeto #{this.props.project.id}: {this.props.project.title}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
              {this.state.todo_lists.map(todo_list => (
                <TodoList todo_list={todo_list} key={todo_list.id} />
              ))}
            </ScrollView>
          </View>
          <CommonFooterWithLogout />
        </Container>
      </ImageBackground>;
  }
};

export default Project;
