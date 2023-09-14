import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Button, Text, TextInput, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

function SignUpUi() {

    const [users, setUsers] = useState([]);

    const [mobile, setMobile] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userType, setUserType] = useState('');
    const [password, setPassword] = useState('');

    const userTypeDropdownList = ['Select UserType','Employee', 'Student'];


    const saveUserData = async () => {
        try {
            const user = {
                mobile,
                firstName,
                lastName,
                userType,
                password,
            };

            const updatedUsers = [...users, user];

            setUsers(updatedUsers);

            const usersJSON = JSON.stringify(updatedUsers);

            await AsyncStorage.setItem('users', usersJSON);

            alert('User data saved successfully');
            clearData();
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    };

    function clearData() {
        setMobile('');
        setFirstName('');
        setLastName('');
        setUserType('Select User Type');
        setPassword('');

    }

    const ui = (
        <SafeAreaView style={styles.SafeAreaView}>
            <StatusBar />
            <Text style={styles.heading}>Register</Text>

            <View style={styles.view1}>
                <Text style={styles.text}>Mobile</Text>
                <TextInput style={styles.textInput} value={mobile} onChangeText={text => setMobile(text)} />
            </View>

            <View style={styles.view1}>
                <Text style={styles.text}>First Name</Text>
                <TextInput style={styles.textInput} value={firstName} onChangeText={text => setFirstName(text)} />
            </View>

            <View style={styles.view1}>
                <Text style={styles.text}>Last Name</Text>
                <TextInput style={styles.textInput} value={lastName} onChangeText={text => setLastName(text)} />
            </View>

            <View style={styles.view1}>
                <Text style={styles.text}>Usertype</Text>
                <SelectDropdown data={userTypeDropdownList} onSelect={text=>setUserType(text)} />
            </View>

            <View style={styles.view1}>
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.textInput} value={password} onChangeText={text => setPassword(text)} />
            </View>

            <Button onPress={saveUserData} title="Sign Up" />
        </SafeAreaView>

    );
    return ui;
}

export default SignUpUi;

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 15,
    },
    heading: {
        fontSize: 32,
        marginBottom: 40,
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

});