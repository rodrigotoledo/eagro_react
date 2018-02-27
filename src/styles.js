import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
  // general containers
  bgApp: {
    flex: 1,
    width: null
  },
  generalContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10
  },
  betweenContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  generalScrollView: {
    flex: 1,
    paddingTop: 0
  },
  // modal
  contentCenter: {
    flex: 1,
    justifyContent: "center"
  },
  innerContainer: {
    alignItems: "center"
  },
  itemWithoutBorder: {
    borderBottomWidth: 0
  },

  // text styles
  h1: {
    marginBottom: 10
  },
  label: {
    color: "#083D86"
  },
  customHeader: {
    color: "#ffffff",
    fontSize: 14,
    marginTop: 5,
    marginLeft: 4
  },
  bold: {
    fontWeight: "bold"
  },
  defaultBlueColor: {
    color: "#009933"
  },
  blank: {
    color: "#ffffff"
  },

  // input styles
  input: {
    fontSize: 20,
    height: 45,
    color: "#009933"
  },
  lastInput: {
    marginBottom: 20
  },
  submitButtonText: {
    color: "#ffffff",
    textAlign: "center",
    justifyContent: "center",
    padding: 10
  },
  todoListView: {
    margin: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: "#009933"
  }
}));
