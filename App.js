import { StyleSheet, Text, View } from 'react-native';


import Logo from './screens/Logo';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Mall from './screens/Mall';
import Live from './screens/Live';
import ScreenVideo from './screens/ScreenVideo';
import Notify from './screens/Notify';
import Login from './screens/Login';
import Register from './screens/Register';
import Cart from './screens/Cart';
import Chat from './screens/Chat';
import ProfileNoUser from './screens/ProfileNoUser';



import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();


export default function App() {
  
  return (
    // <Logo/>
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Logo'> 
      <Stack.Screen name='Logo' component={Logo}/>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Mall' component={Mall}/>
      <Stack.Screen name='Live' component={Live}/>
      <Stack.Screen name='ScreenVideo' component={ScreenVideo}/>
      <Stack.Screen name='Notify' component={Notify}/>
      <Stack.Screen name='Profile' component={Profile}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Register' component={Register}/>
      <Stack.Screen name='Cart' component={Cart}/>
      <Stack.Screen name='Chat' component={Chat}/>
      <Stack.Screen name='ProfileNoUser' component={ProfileNoUser}/>

    </Stack.Navigator>
  </NavigationContainer>
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



  
