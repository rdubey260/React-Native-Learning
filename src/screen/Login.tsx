import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { saveCredentials } from '../redux/actions/ActionCreators';

interface Iprops {
  navigation: any;
}

const LoginScreen = (props: Iprops) => {
  const dispatch = useDispatch();
  const { navigation } = props;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigateToHome = () => {
    dispatch(saveCredentials({ userName: email, password: password }));
    navigation.navigate('MyTabs');
  };

  const handleEmailText = (text: string) => {
    setEmail(text);
  };

  const handlePasswordText = (text: string) => {
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20, fontSize: 20 }}>Login user</Text>
      <View style={styles.inputContainer}>
        <Text>User Name</Text>
        <TextInput
          testID="input-email"
          style={styles.input}
          value={email}
          onChangeText={handleEmailText}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <TextInput
          testID="input-password"
          style={styles.input}
          value={password}
          onChangeText={handlePasswordText}
        />
      </View>
      <TouchableOpacity
        testID="login-button"
        style={styles.button}
        onPress={navigateToHome}>
        <Text style={{ color: 'white' }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  button: {
    backgroundColor: 'green',
    width: 120,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  input: { borderColor: 'blue', borderWidth: 2, width: 350 },
  inputContainer: { flexDirection: 'column', marginTop: 10 },
});

export default LoginScreen;
