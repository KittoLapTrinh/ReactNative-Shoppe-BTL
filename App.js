import { StyleSheet, Text, View } from 'react-native';


import Logo from './screens/Logo';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Mail from './screens/Mail';
import Live from './screens/Live';
import Video from './screens/Video';
import Notify from './screens/Notify';
import Login from './screens/Login';
import Register from './screens/Register';
import Cart from './screens/Cart';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();


export default function App() {
  
  return (
    // <Logo/>
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Cart'> 
      <Stack.Screen name='Logo' component={Logo}/>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Mail' component={Mail}/>
      <Stack.Screen name='Live' component={Live}/>
      <Stack.Screen name='Video' component={Video}/>
      <Stack.Screen name='Notify' component={Notify}/>
      <Stack.Screen name='Profile' component={Profile}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Register' component={Register}/>
      <Stack.Screen name='Cart' component={Cart}/>
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



  
