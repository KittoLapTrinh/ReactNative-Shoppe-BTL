import { StyleSheet, Text, View, Image, TextInput, ViewBase } from 'react-native';
import React from 'react'
import { Button } from 'react-native-web';





import Screen1 from './components/screen1';
import Screen2 from './components/screen2';
import Screen3 from './components/screen3';
import Screen4 from './components/screen4';

export default function App()  {
    return (
        <View style={styles.container}>
            
            

            {/* <Screen1/> */}
            {/* <Screen2/> */}
            {/* <Screen3/> */}
            <Screen4/>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
  },
        
})
    

    

    

   

    