import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#CCC',
    position: 'absolute',
    paddingRight: 6,
    paddingLeft: 6,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'rgba(42, 41, 40, 0.7)',
    flexDirection: 'row',
    alignSelf: 'center',
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 25,
    marginTop: 5,
    borderRadius: 5,
    elevation: 10,
  },
  message: {
    flex: 1,
    marginRight: 5,
    color: 'white',
  },
  messageContainer: {
    alignItems: 'baseline',
  },
});

export default styles;
