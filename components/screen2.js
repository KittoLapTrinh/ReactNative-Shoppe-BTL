import React, {useContext } from 'react';
import {useNavigation} from "@react-navigation/native"
import { StyleSheet, Text,  View, TouchableOpacity, Image,Button, TextInput } from 'react-native';
import { MyContext } from "../App";


export default function Screen2() {
  let navigation = useNavigation();
//   let { img, setImg } = useContext(MyContext)
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Image style={{flex: 1.4,width: 10, height: 145}} source={require('../assets/ip_xanh.jpg')}></Image>
            <View style={{ flex: 0.1 }}></View>
            <Text style= {{flex: 2.5, fontWeight: 'bold', fontSize: 17, alignItems: 'center', paddingTop: 10}}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
          
        </View>
        <View style={styles.center}>
            <View style={styles.center1}>
                <Text style={{fontWeight:'bold', fontSize:18, paddingLeft: 20, paddingTop: 10}}>Chọn một màu bên dưới:</Text>
            </View>
            <View style={styles.center2}>
                <TouchableOpacity style={{width: '30%', height:'20%', backgroundColor: '#C5F1FB'}} 
                    onPress={()=>setImg('../assets/ip_trang.jpg')}>

                </TouchableOpacity>
                <TouchableOpacity style={{width: '30%', height:'20%', backgroundColor: '#F30D0D'}} 
                    onPress={()=>setImg('../assets/ip_do.jpg')}>

                </TouchableOpacity>
                <TouchableOpacity style={{width: '30%', height:'20%', backgroundColor: '#000000'}} 
                    onPress={()=>setImg('../assets/ip_den.jpg')}>

                </TouchableOpacity>
                <TouchableOpacity style={{width: '30%', height:'20%', backgroundColor: '#234896'}} 
                    onPress={()=>setImg('../assets/ip_xanh.jpg')}>

                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.3 }}></View>
            <View style={styles.center3}>
                <TouchableOpacity style={{ flex: 0.5, backgroundColor: '#4d6dc1', borderRadius: 10, alignItems: 'center', justifyContent: 'center', borderColor: 'red', borderWidth: 1, marginHorizontal: 10 }}
                onPress={()=> navigation.navigate('screen1')}
                >
                <Text style={{ fontWeight: 30, fontWeight: 'bold', color: 'white' }}>XONG</Text>
                </TouchableOpacity>
            </View>

            
            
        </View>
       
    </View>
   
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',  
        paddingLeft:'5%',
        paddingRight:'5%',
    },
    top:{
        flex: 1,
        flexDirection: 'row',
    },
    center:{
        flex: 3,
        backgroundColor: "#c4c4c4",
        

    },
    center1:{
        flex: 0.5,
    },
    center2:{
        flex:4,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    center3:{
        flex: 1,
    }
    
    
});
