import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import React, {useEffect, useRef, useState} from 'react';
import {Ionicons} from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'; 
import { FlatList } from 'react-native-web';


function Video({navigation}){

  const goiY = [
    
    {
        id: '7',
        img: require('../assets/giaytaynam.png'),
        img: require('../assets/giaytaynam.png'),
        name: 'Giày Nam anh',
        like: 120, 
        comment: 999,
        share: 123, 
        view: 202
    },
    {
        id: '8',
        img: require('../assets/suahop.png'),
        img: require('../assets/suahop.png'),
        
        name: 'Sữa Nam anh',
        like: 3450, 
        comment: 9949,
        share: 12323,
        view: 202
    }, 
    {
        id: '9',
        img: require('../assets/mubaohiem.png'),
        img: require('../assets/mubaohiem.png'),
        name: 'Mũ Nam anh',
        like: 1203, 
        comment: 6999,
        share: 1236,
        view: 202
    },  
    {
        id: '10',
        img: require('../assets/aovest.png'),
        img: require('../assets/aovest.png'),
        name: 'ÁoNam anh',
        like: 12012, 
        comment: 9993,
        share: 1238,
        view: 202
    },   
]

const Item = ({item})=>(
  <View style = {{width: '100%'}}>
      <Image source={item.img} style= {{width: 600, height: 666}}></Image>

      <View style = {{position: 'absolute', right: 10, bottom: 80}}>
              <View style = {{flex: 1.2}}>
                              
                </View>
                <View style = {{flex: 2, alignItems:'flex-end', justifyContent: 'space-between'}}>
                  <Ionicons name='ellipse-outline' size={60} color='white' style={{right: -12}}></Ionicons>
                  <Image source={item.img} style= {{width: 30, height: 30, top: -48, right: 5, borderRadius: 50}}></Image>

                  <Ionicons name='heart' size={40} color='white'></Ionicons>
                  <Text style = {{fontSize: 14, color: 'white', right: 9}}>{item.like}</Text>
                  <Ionicons name='chatbox-ellipses' size={37} color='white'></Ionicons>
                  <Text style = {{fontSize: 14, color: 'white', right: 9}}>{item.comment}</Text>
                  <Ionicons name='arrow-redo' size={37} color='white'></Ionicons>
                  <Text style = {{fontSize: 14, color: 'white', right: 9}}>{item.share}</Text>
  
                </View>
                <View style = {{flex: 0.3, paddingBottom: 20, flexDirection: 'row', padding: 5, alignItems: 'center', left: -170}}>
                  <View style = {{flex: 1, justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>@{item.name}</Text>
                    <Text style={{fontSize: 15, color: 'white'}}>#Hastag</Text>
                  </View>
                  
                  <Ionicons name='musical-notes' size={30} color='white' style = {{top: 10, left: 170}}></Ionicons>
  
                </View>
              </View>
  </View>
);

    
    return(
        <View style = {styles.container}>
          <View style = {{flex: 30, padding: 20}}>
              
              </View>
  

<View style = {{position:'absolute',width: '100%', height: '100%'}}>
              <FlatList
                      data = {goiY}
                      pagingEnabled
                      renderItem={({item}) => <Item item={item}/>}
                      
              />
            </View>

            <View style = {{flex: 2, padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
              
            </View>

            <View style = {{position: 'absolute'}}>
            <Ionicons name='person-outline' size={30} color='white' style = {{left: 20, top: 20}} onPress={()=>{navigation.navigate('Profile')}}></Ionicons>
              <Text style = {{color: 'white', fontSize: 17, left: 90, top: -10}}>Đang theo dõi</Text>
              <Text style = {{color: 'white', fontSize: 17, left: 220, top: -33}}>Xu hướng</Text>
              <Ionicons name='videocam-outline' size={30} color='white' style = {{left: 350, top: -60}}></Ionicons>
            </View>

            
            




           
            
            <View style={{height: 30, flexDirection: 'row', alignItems: 'center', paddingBottom: 35, paddingTop: 35, backgroundColor: 'black'}}>
                  <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} onPress={()=>{navigation.navigate('Home')}}>
                  <Ionicons name='home-outline' size={30} color='#bfbfbf'></Ionicons>
                  <Text style = {{color: '#bfbfbf',  fontSize: 13}}>Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{navigation.navigate('Mall')}} style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
                    <Feather name='shopping-bag' size={30} color='#bfbfbf'></Feather>
                    <Text style = {{color: '#bfbfbf',  fontSize: 13}}>Mall</Text>
                  </TouchableOpacity>  
                  <TouchableOpacity onPress={()=>{navigation.navigate('Live')}} style={{flex: 1,alignItems: 'center', justifyContent: 'center'}} >
                  <Ionicons name='videocam-outline' size={30} color='#bfbfbf'></Ionicons>
                  <Text style = {{color: '#bfbfbf', fontSize: 13}}>Live</Text>
                    </TouchableOpacity> 
                  <TouchableOpacity onPress={()=>{navigation.navigate('Video')}} style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
                  <Ionicons name='play' size={30} color='white'></Ionicons>
                  <Text style = {{color: 'white', fontSize: 13}}>Video</Text>
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
        backgroundColor: 'lightgray'

    }
})

export default Video;