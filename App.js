import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInUi from './SignIn';
import SignUpUi from './SignUp';
import HomeUi from './Home';
import CreateNoteUi from './CreateNote';
import ProfileUi from './Profile';



const Stack = createNativeStackNavigator();

function App() {
  const ui = (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='SignIn' component={SignInUi} />
        <Stack.Screen name='SignUp' component={SignUpUi} />
        <Stack.Screen name='Home' component={HomeUi} />
        <Stack.Screen name='CreateNote' component={CreateNoteUi} />
         <Stack.Screen name='Profile' component={ProfileUi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  return ui;
}

export default App;