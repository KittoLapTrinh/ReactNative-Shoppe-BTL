import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import React, {useEffect, useRef, useState} from 'react';


function Video({navigation}){
    // const [clicked, setClicked] = useState(false);
    // const [puased, setPaused] = useState(false);
    // const [progress, setProgress] = useState(null);
    // const [fullScreen,setFullScreen]=useState(false)
    // const ref = useRef();
    // const format = seconds => {
    //   let mins = parseInt(seconds / 60)
    //     .toString()
    //     .padStart(2, '0');
    //   let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    //   return `${mins}:${secs}`;
    // };
   
    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://6540a7f045bedb25bfc245f4.mockapi.io/Video')
    //         .then((response) => response.json())
    //         .then((json) =>setData(json))
    // })
    return(
        <View style={{flex: 2}}>
          <View >
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
              <TouchableOpacity>
                <Image style={{width: 35, height: 35}} source={require('../assets/user1.png')}></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Đang theo dõi</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{fontWeight: 'bold'}}>Xu hướng</Text>
              </TouchableOpacity>
              <TouchableOpacity >
                <Image style={{width: 35, height: 35}} source={require('../assets/addvideo.png')}></Image>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image style={{width: 200, height: 200}} source={require('../assets/notvideo.png')}></Image>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 15, color: '#C4C4C4'}}>Xin lỗi bạn! Chúng tôi đang khắc phục sự cố!</Text>
                <Image style={{width: 25, height: 25}} source={require('../assets/error.png')}></Image>
              </View>
             
            </View>
            <View style={{alignItems: 'flex-end', justifyContent: 'center', marginRight: 10}}>
              <TouchableOpacity style={{borderWidth: 2, borderColor: '#FFFFFF', borderRadius: 20}}>
                <Image style={{width: 45, height: 35,marginVertical: 10}} source={require('../assets/avt1.png')}></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{width: 45, height: 45,marginVertical: 10}} source={require('../assets/tim.png')}></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{width: 45, height: 45,marginVertical: 10}} source={require('../assets/messenger.png')}></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{width: 45, height: 45,marginVertical: 10}} source={require('../assets/chiase.png')}></Image>
              </TouchableOpacity>
              <TouchableOpacity style={{borderWidth: 1, borderColor: '#FFFFFF'}}>
                <Image style={{width: 35, height: 35}} source={require('../assets/avt1.png')}></Image>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>

            </View>
            <View style={{flex: 0.2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingBottom: 35, paddingTop: 35, backgroundColor: '#C4C4C4'}}>
                  <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center'}} onPress={()=>{navigation.navigate('Home')}}>
                      <Image style={{width: 35, height: 35}} source={require('../assets/home.png')}></Image>
                      <Text>Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{navigation.navigate('Mall')}} style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Image style={{width: 35, height: 35}} source={require('../assets/mall.png')}></Image>
                      <Text>Mall</Text>
                  </TouchableOpacity>   
                  <TouchableOpacity onPress={()=>{navigation.navigate('Live')}} style={{alignItems: 'center', justifyContent: 'center'}} >
                    <Image style={{width: 35, height: 35}} source={require('../assets/live.png')}></Image>
                    <Text>Live</Text>
                  </TouchableOpacity> 
                  <TouchableOpacity onPress={()=>{navigation.navigate('Video')}} style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 35, height: 35, backgroundColor: '#5c5c5c'}} source={require('../assets/video.png')}></Image>
                    <Text>Video</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{navigation.navigate('Notify')}}  style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 35, height: 35}} source={require('../assets/thongbao.png')}></Image>
                    <Text>Thông báo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
                      <View style={{alignItems: 'center', justifyContent: 'center', }}>
                          <Image style={{width: 35, height: 35}} source={require('../assets/toi.png')}></Image>
                          <Text>Tôi</Text>
                      </View>
                  </TouchableOpacity>
            </View> 
          </View>
        </View>
    );
  };

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF'

    }
})

export default Video;