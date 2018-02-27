import React, {Component} from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from "native-base";

import Moment from "moment";
import styles from 'styles';

class TodoList extends Component {
  componentWillMount() {
    Moment.locale("pt-BR");
  }

  render() {
    return <View style={styles.todoListView}>
        <Text>
          Tarefa:
          <Text style={styles.bold}>#{this.props.todo_list.id}</Text>
        </Text>
        <Text>
          Agendada para:
          <Text style={styles.bold}>
            {Moment(this.props.todo_list.scheduled_to).format(
              "DD/MM/YYYY - HH:mm"
            )}
          </Text>
        </Text>
        <Text>
          Descrição:
          <Text style={styles.bold}>
            {this.props.todo_list.description}
          </Text>
        </Text>
        <Text>
          Realizada?:
          <Text style={styles.bold}>
            {this.props.todo_list.is_checked ? "Sim" : "Não"}
          </Text>
        </Text>
      </View>;
  }
};

export default TodoList;
