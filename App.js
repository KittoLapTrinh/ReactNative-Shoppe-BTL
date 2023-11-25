import { StyleSheet, Text, View } from 'react-native';


import Logo from './screens/Logo';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Mall from './screens/Mall';
import Live from './screens/Live';
import Notify from './screens/Notify';
import Login from './screens/Login';
import Register from './screens/Register';
import Cart from './screens/Cart';
import Chat from './screens/Chat';
import ProfileNoUser from './screens/ProfileNoUser';
import PurchaseOrder from './screens/PurchaseOrder';
import ChoXacNhan from './screens/ChoXacNhan';
import ChoLayHang from './screens/ChoLayHang';
import ChoGiaoHang from './screens/ChoGiaoHang';
import SearchProduct from './screens/SearchProduct';
import DaGiao from './screens/DaGiao';
import Video from './screens/Video';
import DanhGia from './screens/DanhGia';
import ShopeeXu from './screens/ShopeeXu';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    // <Logo/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Profile'> 
        <Stack.Screen name='Logo' component={Logo}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Mall' component={Mall}/>
        <Stack.Screen name='Live' component={Live}/>
        <Stack.Screen name='Video' component={Video}/>
        <Stack.Screen name='Notify' component={Notify}/>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='Cart' component={Cart}/>
        <Stack.Screen name='Chat' component={Chat}/>
        <Stack.Screen name='ProfileNoUser' component={ProfileNoUser}/>
        <Stack.Screen name='PurchaseOrder' component={PurchaseOrder}/>
        <Stack.Screen name='ChoXacNhan' component={ChoXacNhan}/>
        <Stack.Screen name='ChoLayHang' component={ChoLayHang}/>
        <Stack.Screen name='ChoGiaoHang' component={ChoGiaoHang}/>
        <Stack.Screen name='SearchProduct' component={SearchProduct}/>
        <Stack.Screen name='DaGiao' component={DaGiao}/>
        <Stack.Screen name='DanhGia' component={DanhGia}/>
        <Stack.Screen name='ShopeeXu' component={ShopeeXu}/>
      

        {/* <Stack.Screen name='Camera' component={Camera}/> */}

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



  
