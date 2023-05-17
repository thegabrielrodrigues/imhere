import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#1F1E25',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginLeft: 16,
    color: '#FFFFFF',
    fontSize: 16,
    flex: 1,
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: '#E23C44',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
});
