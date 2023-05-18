import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#131016',
    flex: 1,
  },
  eventName: {
    marginTop: 48,
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  form: {
    marginTop: 36,
    marginBottom: 42,
    flexDirection: 'row',
  },
  input: {
    height: 56,
    padding: 16,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: '#1F1E25',
    color: '#FFFFFF',
    flex: 1,
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  listEmptyText: {
    padding: 10,
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
  },
});
