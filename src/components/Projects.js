import React, { Component } from "react";
import axios from "axios";
import { View, ScrollView, ImageBackground, Alert, AsyncStorage } from "react-native";
import { Container } from "native-base";

import styles from "styles";
import CommonHeaderOnlyCenter from "components/CommonHeaderOnlyCenter";
import CommonFooterWithLogout from "components/CommonFooterWithLogout";
import ProjectCard from "components/ProjectCard";
import Constants from "Constants";

class Projects extends Component {
  state = { projects: [] };

  async componentDidMount() {
    const auth_token = await AsyncStorage.getItem("auth_token");
    this.getProjects(auth_token);
  }

  getProjects = auth_token => {
    let projectsUrl = Constants.WEB_ADDRESS + "/projects";
    // console.tron.log(projectsUrl);
    axios
      .get(projectsUrl, {
        headers: {
          'Accept': 'application/vnd.eagro.v1',
          'Content-Type': 'application/json',
          'Authorization': auth_token
        }
      })
      .then(async response => {
        if (response.status >= 200 && response.status < 203) {
          try {
            this.setState({
              projects: this.convertProjectsToJson(response.data)
            });
          } catch (e) {
            // console.tron.log(e.message);
            Alert.alert("Erro", e.message);
          }
        }
      })
      .catch(error => {
        // console.tron.log(error.message);
        Alert.alert("Erro", error.message);
      });
  };

  convertProjectsToJson = projects => {
    const convertedProjects = [];
    projects.map(project => {
      convertedProjects[project.id] = project;
    });
    return convertedProjects;
  };

  render() {
    return (
      <ImageBackground style={styles.bgApp} source={require("imgs/bg.png")}>
        <CommonHeaderOnlyCenter icon="home" title="Painel de Projetos" />
        <Container>
          <View style={styles.generalContainer}>
            <ScrollView style={styles.generalScrollView}>
              { this.state.projects.map(project => <ProjectCard project={project} key={project.id} />) }
            </ScrollView>
          </View>
          <CommonFooterWithLogout />
        </Container>
      </ImageBackground>
    );
  }
}

export default Projects;
