import React, { useState } from 'react';
import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FlatList, TextInput } from 'react-native-web';
import { Linking } from 'react-native';

function Register({navigation }){
  

    const [phone, setPhone] = useState('')



    const handleCheckPhone =()=>{
        const phonePattern = /^\d{10}$/; // Adjust the regex pattern for your phone number requirements

    if (phonePattern.test(phone)) {
        // The phone number matches the regex pattern
        alert('Valid phone number');
    } else {
        // The phone number does not match the regex pattern
        alert('Invalid phone number format');
    }
    };
    

    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={()=>{navigation.navigate('ProfileNoUser')}}>
                    <Image source={require('../assets/back.png')} style={{width: 40, height: 40, marginRight: 30}}></Image>
                </TouchableOpacity>
               
                <Text style={{fontSize: 25, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', marginHorizontal: 30}}>Đăng ký</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
                    <Image source={require('../assets/them.png')} style={{width: 30, height: 30,}}></Image>
                </TouchableOpacity >
               <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
                    <Image source={require('../assets/chamhoi.png')} style={{width: 40, height: 40, marginLeft: 20}}></Image>
               </TouchableOpacity>
                
            </View>
            <View style={{flex: 0.05, backgroundColor: '#C4C4C4'}}></View>
            <View style={styles.center}>
                <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 100, height: 100}} source={require('../assets/avtshopee.png')}></Image>
                </View>
                <View style={{flexDirection: 'row',  paddingTop: 40, alignItems: 'center', justifyContent: 'center', paddingBottom: 20}}>
                    <View style={{paddingRight: 10}}>
                        <Image style={{width: 35, height: 35}} source={require('../assets/phone.png')}></Image>
                    </View>
              
                    <TextInput placeholder="Số điện thoại" style={{borderWidth: 1, borderColor: '#C4C4C4',  borderRadius: 5 , width: 275, height: 35, fontSize: 16}} onChangeText={setPhone} value={phone}></TextInput>
               
                   
                   
                    
                </View>
                
                <View style={{ paddingTop: 10, marginHorizontal: 10, paddingBottom: 20}}>
                    <Button onPress={handleCheckPhone} title='Tiếp' style={{}}></Button>
                </View>
                
              
                <View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 20}}>
                    <Text style={{color:'#C4C4C4'}}>Hoặc</Text>
                </View>

                <TouchableOpacity onPress={() => {Linking.openURL('https://www.google.gg');
                }}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#C4C4C4', marginTop: 5}}>
                    <Image source={require('../assets/google.png')} style={{width: 50, height: 50,}}></Image>
                        <Text>Tiếp tục với Google</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {Linking.openURL('https://www.facebook.com');
                }}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#C4C4C4', marginTop: 5}}>
                    <Image source={require('../assets/facebook1.png')} style={{width: 50, height: 50,}}></Image>
                        <Text>Tiếp tục với Facebook</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => {Linking.openURL('https://www.apple.com');
                }}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#C4C4C4', marginTop: 5}}>
                        <Image source={require('../assets/apple.png')} style={{width: 50, height: 50,}}></Image>
                        <Text>Tiếp tục với  Apple</Text>
                    </View>
                </TouchableOpacity>
                
                
                
            </View>
            <View style={styles.bottom}>
                <Text>Bạn đã có tài khoản? </Text>
                <Text onPress={()=>{navigation.navigate('Login')}} style={{color:'blue'}}>Đăng nhập ngay</Text>
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
        flex:1,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff7f3',
     
    },
    center: {
        flex: 6,
        backgroundColor: '#fff7f3',
        
    },
    bottom:{
        flex: 0.7,
        backgroundColor: '#C4C4C4',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Register;