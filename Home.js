import React, { useState } from 'react';
import {
    Alert,
    FlatList,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome5';

function HomeUi({ navigation, route }) {
    const categoriesList = ['All', 'Study', 'Work', 'Travel'];
    const [selectedCategory, setSelectedCategory] = useState('');

    const [todos, setTodos] = useState([
        {
            title: 'Do homework',
            date: '28/03/2023',
        },
        {
            title: 'Go to Gym',
            date: '28/03/2023',
        },
        {
            title: 'Do homework',
            date: '28/03/2023',
        },
        {
            title: 'Go to Gym',
            date: '28/03/2023',
        },
        {
            title: 'Do homework',
            date: '28/03/2023',
        },
        {
            title: 'Go to Gym',
            date: '28/03/2023',
        },
        {
            title: 'Do homework',
            date: '28/03/2023',
        },
        {
            title: 'Go to Gym',
            date: '28/03/2023',
        },
    ]);

    const ui = (
        <SafeAreaView style={style.SafeAreaView}>
            <View style={style.topView}>
                <Text style={style.heading}>My Notes</Text>
                <Text style={style.heading1}>{route.params.firstName + " " + route.params.lastName}</Text>
                <FlatList
                    data={categoriesList}
                    renderItem={categoriesListRenderItem}
                    horizontal={true}
                    style={style.categoryFlatlist}
                />
            </View>

            <FlatList
                data={todos}
                renderItem={todoListRenderItem}
                ItemSeparatorComponent={todoListItemSeperator}
                style={style.todoListFlatlist}
            />

            <View style={style.bottomView}>
                <Pressable onPress={goToCreateNote}>
                    <Icon
                        name="pluscircle"
                        size={40}
                        color="rgba(100, 144, 166, 1)"
                        style={style.addTodoIcon}
                    />
                </Pressable>
                <Pressable onPress={goToProfile}>
                    <Icon1
                        name="user-alt"
                        size={40}
                        color={'rgba(100, 144, 166, 1)'}
                        style={style.profileIcon}
                    />
                </Pressable>
            </View>
        </SafeAreaView>
    );

    function goToCreateNote(){
        navigation.navigate('CreateNote');
    }
    function goToProfile(){
        navigation.navigate('Profile');
    }
    return ui;

// Category Render
    function categoriesListRenderItem({ item }) {
        const ui = (
            <Pressable onPress={setCategory}>
                <Text style={style.categoriesText}>{item}</Text>
            </Pressable>
        );
        return ui;

        function setCategory(item) {
            setSelectedCategory(item);
        }
    }


    // Todo Render
    function todoListRenderItem({ item }) {
        const ui = (
            <Pressable onPress={gotoTodoItem}>
                <View style={style.todoListItemView}>
                    <Text style={style.todoListItemTitle}>{item.title}</Text>
                    <Text style={style.todoListItemDate}>{item.date}</Text>
                </View>
            </Pressable>
        );

        return ui;

        function gotoTodoItem() {
            Alert.alert("ok");
        }
    }

    function todoListItemSeperator() {
        const ui = <View style={style.todoListItemSeperator}></View>;
        return ui;
    }

   
}



export default HomeUi;

const style = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        alignItems: 'center',
    },
    topView: {
        height: '30%',
        backgroundColor: 'rgba(100, 144, 166, 1)',
        width: '100%',
        alignItems: 'center',
    },
    heading: {
        fontSize: 32,
        color: 'white',
        marginTop: 16,
    },
    heading1: {
        fontSize: 25,
        color: 'white',
        marginTop: 16,
    },
    categoriesText: {
        color: 'white',
        fontSize: 20,
        marginHorizontal: 20,
    },
    categoryFlatlist: {
        position: 'absolute',
        bottom: 30,
    },
    todoListItemTitle: {
        fontSize: 20,
        color: 'white',
    },
    todoListItemDate: {
        fontSize: 14,
        color: 'white',
    },
    todoListItemView: {
        backgroundColor: 'rgba(111, 160, 184, 0.68)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
    },
    todoListItemSeperator: {
        height: 15,
    },
    todoListFlatlist: {
        width: '90%',
        marginTop: 10,
        marginBottom: 30,
        paddingRight: 10,
    },
    addTodoIcon: {
        marginBottom: 10,
        position: 'relative',
    },
    profileIcon: {
        marginBottom: 10,
        position: 'relative',
        
    },
    bottomView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent:'center',
        gap:50,
    },
});