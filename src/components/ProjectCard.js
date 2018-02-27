import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';
import { Text } from 'react-native';
import { Body, Left, Button, Icon, Card, CardItem } from 'native-base';
import Moment from 'moment';
import styles from 'styles';

class ProjectCard extends Component {
  componentWillMount() {
    Moment.locale('pt-BR');
  }

  colorOfIcon(project){
    return "rgba(86,174,61," + project.todo_lists_evaluation + ")";
    if (project.acceptable) {
      return '#60B96B';
    }else{
      return "#8C873B";
    }
  };

  render() {
    return <Card>
        <CardItem>
          <Left>
            <Icon name="md-speedometer" style={{ color: this.colorOfIcon(this.props.project), fontSize: 50 }} />

            <Body>
              <Text style={styles.bold}>
                Projeto #{this.props.project.id}: {this.props.project.title}
              </Text>
              <Text>
                Total de Tarefas: <Text style={styles.bold}>
                  {this.props.project.count_todo_lists}
                </Text>
              </Text>
              <Button iconLeft small success onPress={() => Actions.Project({project: this.props.project})}>
                <Icon active name="ios-fastforward" />
                <Text style={styles.submitButtonText}>Ver detalhes</Text>
              </Button>
            </Body>
          </Left>
        </CardItem>
      </Card>;
  }
}

export default ProjectCard;
