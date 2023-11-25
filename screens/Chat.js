import React, { useState } from 'react';
import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { CheckBox, FlatList, TextInput } from 'react-native-web';
import { Linking } from 'react-native';

function Chat({navigation}){
  const goBack = () => {
    navigation.goBack();
  }
  const goHome = () => {
      navigation.navigate('Home');
  }
  const [text, setText] = useState('');

  const onChangeText = (inputText) => {
    setText(inputText);
  };


    



    

    return(
        
      <View style={styles.container}>
        <View style={styles.top}>
             <TouchableOpacity onPress={goBack}>
                <Image source={require('../assets/back.png')} style={{width: 40, height: 40, marginRight: 30}}></Image>
            </TouchableOpacity>
            <Text style={{fontSize: 25, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', marginHorizontal: 30}}>Chat</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
              <Text style={{fontSize: 20}}>Xong</Text>
            </TouchableOpacity >
          </View>
        <View style={{flex: 0.05, backgroundColor: '#C4C4C4'}}></View>
        <View style={{ flex: 1 }}>
        <View style={{flex:1, flexDirection: 'row', justifyContent: 'center',}}>
          <TouchableOpacity >
            <Image source={require('../assets/look.png')} style={{width: 35, height: 35,marginTop: 10}}></Image>
          </TouchableOpacity>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 8, margin: 10, width:340}}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search"/>
          
        </View>
        
      </View>
      </View>
        

    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF'

    },
    top:{
    
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff7f3',
     
    },
  
})

export default Chat;