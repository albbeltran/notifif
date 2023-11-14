import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container_login}>
        <Text style={styles.title}>Inicia sesión</Text>

        <TextInput
          style={styles.input}
          placeholder='Expediente'
        >
        </TextInput>

        <TextInput
          style={styles.input}
          placeholder='NIP'
          secureTextEntry={true}
        >
        </TextInput>

        <TouchableOpacity style={styles.btn}>
          <Text style={{ fontSize: 18, color: 'white' }}>Iniciar</Text>
        </TouchableOpacity>
      </View>
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
  container_login: {
    display: 'flex',
    rowGap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#F3F3F2',
    padding: 20,
    borderRadius: 10
  },
  title: {
    marginBottom: 3,
    fontSize: 28,
    textAlign: 'center',
    color: '#612165'
  },
  input: {
    width: '90%',
    backgroundColor: '#DFDEDF',
    textAlign: 'center',
    padding: 15,
    fontSize: 14,
    color: '#612165',
    borderRadius: 17.5,
  },
  btn: {
    marginTop: 5,
    backgroundColor: '#082D73',
    width: '90%',
    height: 55,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17.5,
  }
});
