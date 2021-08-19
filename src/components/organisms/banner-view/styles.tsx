import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  notification: {
    borderTopWidth: 1,
    borderTopColor: '#CCC',
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '15%',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
    zIndex: 999,
    flex: 1,
  },
  message: {
    flex: 1,
    marginRight: 5,
  },
  inModal: {
    marginLeft: -20,
    marginBottom: -20,
  },
});

export default styles;
