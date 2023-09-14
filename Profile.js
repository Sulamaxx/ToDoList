import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function ProfileUi() {
  const [mobile, setMobile] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userType, setUserType] = useState('');
  const [password, setPassword] = useState('');

  const ui = (
    <ScrollView>
      <SafeAreaView style={style.safeareview}>
        <Text style={style.heading}>Profile</Text>

        <View style={style.view1}>
          <Text style={style.text}>Mobile</Text>
          <TextInput style={style.textInput} onChangeText={setMobile} />
        </View>

        <View style={style.view1}>
          <Text style={style.text}>First Name</Text>
          <TextInput style={style.textInput} onChangeText={setFirstName} />
        </View>

        <View style={style.view1}>
          <Text style={style.text}>Last Name</Text>
          <TextInput style={style.textInput} onChangeText={setLastName} />
        </View>

        <View style={style.view1}>
          <Text style={style.text}>Usertype</Text>
          <TextInput style={style.textInput} onChangeText={setUserType} />
        </View>

        <View style={style.view1}>
          <Text style={style.text}>Password</Text>
          <TextInput style={style.textInput} onChangeText={setPassword} />
        </View>

        <View style={style.buttonView}>
          <Button title="Edit Details" color={'rgba(111, 160, 184, 1)'} />
          <Button title="Save Details" color={'rgba(67, 96, 110, 1)'} />
          <Button title="Logout" color={'rgba(50, 72, 83, 1)'} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
  return ui;
}

export default ProfileUi;

const style = StyleSheet.create({
  safeareview: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  heading: {
    fontSize: 32,
    color: 'black',
    marginVertical: 10,
  },
  view1: {
    marginStart: 40,
    marginBottom: 24,
    width: '100%',
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
  text: {
    marginBottom: 10,
    fontSize: 20,
  },
  buttonView: {
    rowGap: 10,
    marginBottom: 20,
  },
});