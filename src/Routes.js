import React from "react";

import { Router, Scene, Stack } from "react-native-router-flux";

import Login from "components/Login";
import Projects from "components/Projects";
import Project from "components/Project";
import GlobalInformation from "components/GlobalInformation";
import GlobalDoubts from "components/GlobalDoubts";

export default props => (
  <Router>
    <Stack key="root" hideTabBar titleStyle={{ alignSelf: "center" }}>
      <Scene
        hideNavBar
        key="Login"
        component={Login}
        title="eAgro::Projects"
        initial
      />
      <Scene
        hideNavBar
        key="Projects"
        component={Projects}
        title="Meus Projetos"
      />
      <Scene
        hideNavBar
        key="Project"
        component={Project}
        title="Detalhes do Projeto"
      />
      <Scene
        hideNavBar
        key="GlobalInformation"
        component={GlobalInformation}
        title="Informações"
      />
      <Scene
        hideNavBar
        key="GlobalDoubts"
        component={GlobalDoubts}
        title="Dúvidas?"
      />
    </Stack>
  </Router>
);
