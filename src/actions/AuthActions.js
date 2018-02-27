import axios from "axios";
import { AsyncStorage, Alert } from "react-native";
import { Actions } from "react-native-router-flux";

import Constants from "Constants";

export const changeUserEmail = text => {
  return { type: "change_user_email", payload: text };
};

export const changeUserPassword = text => {
  return { type: "change_user_password", payload: text };
};

export const changeName = text => {
  return { type: "change_user_name", payload: text };
};

export const logoutUser = () => {
  Alert.alert('Sucesso', 'Para acessar o sistema novamente digite suas credenciais');
  AsyncStorage.removeItem("auth_token");
  Actions.Login();
};

export const loginUser = ({ email, password }) => {
  axios
    .post(Constants.WEB_ADDRESS + "/sessions", {
      session: {
        email: email,
        password: password
      }
    })
    .then(async response => {
      if (response.status >= 200 && response.status < 203) {
        try {
          let auth_token = response.data.auth_token;
          AsyncStorage.setItem("auth_token", auth_token);
          Actions.Projects();
        } catch (e) {
          Alert.alert("Erro", 'Verifique suas credenciais');
        }
      }
    })
    .catch(error => {
      Alert.alert("Erro", 'Verifique suas credenciais');
    });
  return true;
};
