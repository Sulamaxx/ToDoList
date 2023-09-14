import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";

function SignInUi({ navigation }) {

  const [users, setUsers] = useState([]);

  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    loadUsersFromStorage();
  }, []);

  const ui = (
    <SafeAreaView style={style.SafeAreaView}>
      <StatusBar hidden={true} />
      <Text style={style.heading}>Sign In</Text>

      <View style={style.componentView}>
        <View style={style.view1}>
          <Text style={style.text}>Mobile</Text>
          <TextInput style={style.textInput} value={mobile} onChangeText={text => setMobile(text)} />
        </View>
        <View style={style.view1}>
          <Text style={style.text}>Password</Text>
          <TextInput style={style.textInput} value={password} onChangeText={text => setPassword(text)} />
        </View>
      </View>


      <Button onPress={checkData} title='Sign In' />
      <Button onPress={goToSignUp} title='New User? Sign Up' />
    </SafeAreaView>
  );

  function goToSignUp() {
    navigation.navigate("SignUp");
  }

  const loadUsersFromStorage = async () => {
    try {
      const usersJSON = await AsyncStorage.getItem('users');
      if (usersJSON) {
        const loadedUsers = JSON.parse(usersJSON);
        setUsers(loadedUsers);
      }
    } catch (error) {
      console.error('Error loading users data:', error);
    }
  };
  let isFound = false;

  function checkData() {
    // Alert.alert(users.length);

    if (users.length > 0) {
      users.forEach((user, index) => {
        //  Alert.alert(`User ${index + 1}:`, user.mobile);
        Alert.alert(user.mobile);
        Alert.alert(user.password);
        if (mobile == user.mobile && password == user.password) {
          // Home
          // Alert.alert("Done");
          isFound = true;
          navigation.navigate("Home", user);
          clear();
        }
        //  else {
        //   Alert.alert("Warining", "Invalid Username Or Password");
        // }
      });
      if (!isFound) {
        Alert.alert("Warining", "Invalid Username Or Password");
        clear();
      }
    } else {
      Alert.alert('No users found');
      clear();
    }
  };

  function clear(){
    setMobile('');
    setPassword('');
  }

  return ui;
}

export default SignInUi;

const style = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 15,
  },
  heading: {
    fontSize: 32,
  },
  textInput: {
    width: '80%',
    height: 26,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'black',
    fontSize: 16,
    padding: 0,
    paddingStart: 10,
  },
  componentView: {
    width: '100%',
    marginTop: 160,
  },
  view1: {
    marginStart: 30,
    marginBottom: 24
  },
  text: {
    marginBottom: 10,
    fontSize: 20,
  },

});