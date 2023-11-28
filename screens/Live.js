import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import React, {useEffect, useRef, useState} from 'react';
import {Ionicons} from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { FlatList } from 'react-native';



function Live({navigation}){
  const goiY = [
    
    {
        id: '7',
        img: require('../assets/giaytaynam.png'),
        img: require('../assets/giaytaynam.png'),
        name: 'Giày Nam anh',
        like: 120, 
        comment: 999,
        share: 123, 
        view: 2345
    },
    {
        id: '8',
        img: require('../assets/suahop.png'),
        img: require('../assets/suahop.png'),
        
        name: 'Sữa Nam anh',
        like: 3450, 
        comment: 9949,
        share: 12323,
        view: 456
    }, 
    {
        id: '9',
        img: require('../assets/mubaohiem.png'),
        img: require('../assets/mubaohiem.png'),
        name: 'Mũ Nam anh',
        like: 1203, 
        comment: 6999,
        share: 1236,
        view: 2123
    },  
    {
        id: '10',
        img: require('../assets/aovest.png'),
        img: require('../assets/aovest.png'),
        name: 'ÁoNam anh',
        like: 12012, 
        comment: 9993,
        share: 1238,
        view: 23121
    },   
]

const Item = ({item})=>(
  <View style = {{width: '100%'}}>
      <Image source={item.img} style= {{width: 600, height: 666}}></Image>
      <View style = {{ position: 'absolute', top: 0, padding: 20}}>

              <View style = {{position: 'absolute', flexDirection: 'row', top: 60}}>
                <Ionicons name='ellipse-outline' size={50} color='white'></Ionicons><Image source={item.img} style= {{width: 30, height: 30, top: 10, left: -43, borderRadius: 50}}></Image>
                <View style= {{left: -30}}>
                <Text style = {{fontSize: 20, fontWeight: 'bold', color: 'white', padding: 3, alignItems: 'center'}}>@{item.name}</Text>
                  <View style = {{flexDirection: 'row', alignItems: 'center',  left: 7}}>
                    <Ionicons name='eye-outline' size={20} color='white' ></Ionicons>
                    <Text style = {{fontSize: 15, color: 'white', top: -1,}}>{item.view} người xem</Text>
                  </View>
                </View>
              </View>

              <View style = {{position: 'absolute', flexDirection: 'row' , alignItems: 'center', bottom: 110}}>
                <Fontisto name="shopping-bag" size={40} color="#ffad0a" onPress={()=>{navigation.navigate('Cart')}}/>
                <TextInput style = {{marginLeft: 10, height: 40, width: 170, borderRadius: 20, backgroundColor: 'rgba(48, 48, 48, 20)', color: 'lightgray', padding: 5}} placeholder='Bạn đang nghĩ gì...'></TextInput>
                <View style = {{marginLeft: 10, borderRadius: 20, backgroundColor: 'rgba(48, 48, 48, 20)', justifyContent: 'center', alignItems: 'center', padding: 5}}>
                <Ionicons name='ellipsis-vertical' size={30} color='white' ></Ionicons>
                </View>
                <View style = {{marginLeft: 5, borderRadius: 20, backgroundColor: 'rgba(48, 48, 48, 20)', justifyContent: 'center', alignItems: 'center', padding: 5}}>
                <Ionicons name='arrow-redo-outline' size={30} color='white' ></Ionicons>
                </View>
                <View style = {{marginLeft: 5, borderRadius: 20, backgroundColor: 'rgba(48, 48, 48, 20)', justifyContent: 'center', alignItems: 'center', padding: 5}}>
                <Ionicons name='heart-outline' size={30} color='white' ></Ionicons>
                </View>
              </View>
            </View>
            

            
  </View>
);


    
    return(
        <View style = {styles.container}>

            <View style = {{flex: 30, padding: 20 }}>
            </View>
            
            <View style = {{position:'absolute',width: '100%', height: '100%'}}>
             <FlatList
                    data = {goiY}
                    pagingEnabled
                    renderItem={({item}) => <Item item={item}/>}      
            />
            </View>

              <View style = {{position: 'absolute', top: 0}}> 
                    <View style = {{padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style = {{left: 80}}>
                        <Text style = {{color: 'white', fontSize: 17, lineHeight: 30,}}>Đang theo dõi</Text>
                      </View>
                      <View style = {{ right: -90}}>
                        <Text style = {{color: 'white', fontSize: 17, lineHeight: 30,}}>Xu hướng</Text>
                      </View>
                    </View>
              </View>
            



            
             
            
            <View style={{height: 30, flexDirection: 'row', alignItems: 'center', paddingBottom: 35, paddingTop: 35, backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                  <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} onPress={()=>{navigation.navigate('Home')}}>
                  <Ionicons name='home-outline' size={30} color='#bfbfbf'></Ionicons>
                  <Text style = {{color: '#bfbfbf',  fontSize: 13}}>Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{navigation.navigate('Mall')}} style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
                    <Feather name='shopping-bag' size={30} color='#bfbfbf'></Feather>
                    <Text style = {{color: '#bfbfbf',  fontSize: 13}}>Mall</Text>
                  </TouchableOpacity>  
                  <TouchableOpacity onPress={()=>{navigation.navigate('Live')}} style={{flex: 1,alignItems: 'center', justifyContent: 'center'}} >
                  <Ionicons name='videocam' size={30} color='white'></Ionicons>
                  <Text style = {{color: 'white',  fontSize: 13}}>Live</Text>
                    </TouchableOpacity> 
                  <TouchableOpacity onPress={()=>{navigation.navigate('Video')}} style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
                  <Ionicons name='play-outline' size={30} color='#bfbfbf'></Ionicons>
                  <Text style = {{color: '#bfbfbf', fontSize: 13}}>Video</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{navigation.navigate('Notify')}}  style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
                  <Ionicons name='newspaper-outline' size={30} color='#bfbfbf'></Ionicons>
                  <Text style = {{color: '#bfbfbf', fontSize: 13}}>Thông báo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}} style = {{flex: 1,}}>
                      <View style={{alignItems: 'center', justifyContent: 'center', }}>
                      <Ionicons name='person-outline' size={30} color='#bfbfbf'></Ionicons>
                  <Text style = {{color: '#bfbfbf',  fontSize: 13}}>Tôi</Text>
                      </View>
                  </TouchableOpacity>
            </View> 
            
        </View>
    );
  };

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: 'lightgray',
      
    }
})

export default Live;