import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {
    Alert,
    Button,
    FlatList,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function CreateNoteUi({ navigation }) {
    const [notes, setNotes] = useState([]);
    const categoriesList = ['Study', 'Work', 'Travel'];
    const [selectedCategory, setSelectedCategory] = useState('');

    const [taskName, setTaskName] = useState('');
    const [category, setCategory] = useState(selectedCategory);
    const [dateTime, setDateTime] = useState('');
    const [description, setDescription] = useState('');

    const ui = (
        <ScrollView>
            <SafeAreaView style={style.SafeAreaView}>
                <Text style={style.heading}>Create New Note</Text>

                <View style={style.itemView}>
                    <Text style={style.text}>Task Name</Text>
                    <TextInput style={style.textInput} value={taskName} onChangeText={text => setTaskName(text)} />
                </View>

                <View style={style.itemView}>
                    <Text style={style.text}>Category</Text>
                    <FlatList
                        data={categoriesList}
                        renderItem={categoriesListRenderItem}
                        horizontal={true}
                        style={style.categoryFlatlist} 

                    />
                </View>

                <View style={style.itemView}>
                    <Text style={style.text}>Date & Time</Text>
                    <TextInput style={style.textInput} value={dateTime} onChangeText={text => setDateTime(text)} />
                </View>

                <View style={style.itemView}>
                    <Text style={style.text}>Description</Text>
                    <TextInput value={description} onChangeText={text => setDescription(text)}
                        style={style.descriptionTextField}
                        multiline={true}
                        rows={20}
                    />
                </View>

                <View style={style.buttonView}>
                    <Button onPress={createNewNote} title="Create Note" />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
    return ui;

    async function createNewNote() {
        try {
            const note = {
                taskName,
                category,
                dateTime,
                description,
            };

            const updatedNotes = [...notes, note];

            setNotes(updatedNotes);

            const notesJSON = JSON.stringify(updatedNotes);

            await AsyncStorage.setItem('note', notesJSON);

            alert('Note data saved successfully');
            clearData();
        } catch (error) {
            console.error('Error saving note data:', error);
        }
    }

    function clearData() {
        setTaskName('');
        setDateTime('');
        setDescription('');
        setCategory('')
    }

    // Render Category
    function categoriesListRenderItem({ item }) {
        const ui = (
            <Pressable onPress={setCategory} style={style.categoryView}>
                <Text style={style.categoriesText}>{item}</Text>
            </Pressable>
        );
        return ui;

        // function setCategory() {
        //     setSelectedCategory(item);
        //     Alert.alert("Info","Category Selected "+selectedCategoryUpdate);
        // }
    }
    
}

export default CreateNoteUi;

const style = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    heading: {
        fontSize: 32,
        color: 'black',
        marginVertical: 10,
    },
    text: {
        fontSize: 24,
        width: '80%',
    },
    itemView: {
        width: '100%',
        alignItems: 'center',
        rowGap: 10,
        marginTop: 20,
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        height: 30,
        width: '80%',
        borderRadius: 12,
        fontSize: 16,
        padding: 0,
        paddingHorizontal: 10,
    },
    descriptionTextField: {
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        borderRadius: 12,
        height: 100,
        fontSize: 16,
        padding: 0,
        paddingHorizontal: 10,
    },
    buttonView: {
        marginVertical: 10,
    },
    categoriesText: {
        fontSize: 20,
        marginHorizontal: 20,
    },
    categoryFlatlist: {},
    categoryView: {},
});