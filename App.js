import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import useGetQuestions from './getQuestions';

export default function App() {
  const { questions, getNewQuestions } = useGetQuestions();

  return (
    <View style={styles.container}>
      <Text>yo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
