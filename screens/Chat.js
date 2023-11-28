import React, { useState , useEffect} from 'react';
import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { CheckBox, FlatList, TextInput } from 'react-native-web';
import { Linking } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'; 

function Chat({navigation}){
  const [data1, setData] = useState([])
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


  useEffect(()=>{
    fetch('https://655fec4a83aba11d99cff98f.mockapi.io/user')
  .then(response => response.json())
  .then((json)=>{
    setData(json);
  })
}, [])
const Item = ({image})=>(
    <View style = {{width: '100%', height: 74, flexDirection: 'row', alignItems: 'center', paddingRight: 10, marginVertical: 10, backgroundColor:'white'}}>
        
        <Image source={{uri: image.img}} style={{width: '80%', height: "80%", flex: 1, borderRadius: 4, borderRadius: 140,}}></Image>

        <View style={{flex: 4, padding: 20}}>
            <Text style = {{flex: 1,fontSize: 20, lineHeight: 26, top: -5}}>{image.name}</Text>
            <View style = {{flex:1,flexDirection: 'row', alignItems: 'center', bottom: -5 , borderBottomWidth: 1, borderColor: 'lightgray', paddingBottom: 25}}>
                <Text style={{color: '#565E6C', fontSize: 12, lineHeight: 20}}>{image.content}</Text>
            </View>
        </View>  
        
    </View>
);

    return(
        
      <View style={styles.container}>
        <View style = {{height: 55, width: '100%',  flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={goBack}>
             <Ionicons name="arrow-back" size={30} color="orange" />
            </TouchableOpacity>
            <Text style={{fontSize: 25, justifyContent: 'center', alignItems: 'center', marginHorizontal: 30}}>Chat</Text>
        </View>

        <View style = {{backgroundColor: 'lightgray', height: 40, width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: 5}}>
          <Feather name="search" size={24} color="black" style = {{margin: 10}}/>
          <TextInput style = {{flex: 1, height: '100%', width: '100%', padding: 10}} placeholder='Tìm kiếm'></TextInput>
        </View>
        <View style = {{flex: 1}}>
        <FlatList
                    data = {data1}
                    renderItem={({item}) => <Item image={item}/>}
                    scrollEnabled={true}
            />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 15,
        backgroundColor: '#FFFFFF'

    },
   
  
})

export default Chat;