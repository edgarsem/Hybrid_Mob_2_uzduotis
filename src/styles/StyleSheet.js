import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
    borderColor: 'grey',
    backgroundColor: '#fff'
  },
  buttonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 5,
    height: 200
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  textStyle: {
    marginLeft: 30,
    fontSize: 20
  },
  sortButtonContainer: {
    marginRight: 20,
    height: 40, 
    width: 100, 
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
  });