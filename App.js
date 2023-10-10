import { StyleSheet, Text, View, Image, TextInput, ViewBase } from 'react-native';
import React from 'react'
import {NavigationContainer, useNavigation} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import { Button } from 'react-native-web';





import Screen1 from './components/screen1';
import Screen2 from './components/screen2';
import Screen3 from './components/screen3';
import Screen4 from './components/screen4';

import { registerRootComponent } from 'expo';

const Stack = createStackNavigator();
function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="screen1" component={Screen1}></Stack.Screen>
                <Stack.Screen name="screen2" component={Screen2}></Stack.Screen>
                <Stack.Screen name="screen3" component={Screen3}></Stack.Screen>
                <Stack.Screen name="screen4" component={Screen4}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
registerRootComponent(App, Screen1, Screen2, Screen3, Screen4);

// export default function App()  {
//     return (
//         <View style={styles.container}>
            
            

//             <Screen1/>
//             {/* <Screen2/> */}
//             {/* <Screen3/>
//              <Screen4/> */}
            
            
//         </View>
//     );
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
  },
        
})
    

    

    

   

    