import { SafeAreaView, StatusBar } from "react-native";

function HomeUi(){
    const ui=(
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true}/>

        </SafeAreaView>
    );
    return ui;
}

export default HomeUi;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        fontSize: 24,
        fontWeight: "bold",
    }
});