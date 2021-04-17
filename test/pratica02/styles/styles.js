import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#222428',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderColor: 'red',
  },
  titleArea: {
    width: '90%',
    marginBottom: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 15,
    color: '#fff',
    textAlign: 'left',
  },

  button: {
    width: '90%',
    height: 60,
    borderRadius: 6,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  textButton: {
    color: 'white',
    fontSize: 18,
  },
  inputArea: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    height: 50,
    marginBottom: 30,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
  label: {
    color: '#EEEEEE',
    width: '90%',
    letterSpacing: 4,
  },
  input: {
    width: '85%',
    padding: 8,
    fontSize: 18,
    color: '#fff',
  },
  icon: {
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '100%',
    height: '100%',
  },
  list_item: {
    padding: 15,

    borderBottomWidth: 1,
    borderBottomColor: '#4E4E4E',
  },
  list_item_position: {
    fontSize: 12,
    color: '#B2BEC3',
  },
  list_item_name: {
    fontSize: 15,
    color: '#FFFFFF',
  },
  plus: {
    color: '#fff',
    fontSize: 25,
    padding: 10,
  },
  header: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
  logo: {
    width: 300,
    height: 70,
  },
});

export default styles;
