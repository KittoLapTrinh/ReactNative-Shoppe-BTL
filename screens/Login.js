import React, { useState } from 'react';
import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FlatList, TextInput } from 'react-native-web';
import { Linking } from 'react-native';

function Login({navigation }){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin =()=>{
        console.log('Email: ' , email)
        console.log('Password: :' , password)
    }

    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
                    <Image source={require('../assets/back.png')} style={{width: 40, height: 40, marginRight: 30}}></Image>
                </TouchableOpacity>
               
                <Text style={{fontSize: 25, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', marginHorizontal: 30}}>Đăng nhập</Text>
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
                <View style={{flexDirection: 'row',  paddingTop: 40, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{paddingRight: 10}}>
                        <Image style={{width: 35, height: 35}} source={require('../assets/user.png')}></Image>
                    </View>
                    
                    <TextInput placeholder="Email/Số điện thoại/Tên đăng nhập" style={{borderWidth: 1, borderColor: '#C4C4C4',  borderRadius: 5 , width: 275, height: 35, fontSize: 16}} onChangeText={(text) => setEmail(text)}></TextInput>
                   
                    
                </View>
                <View style={{flexDirection: 'row', paddingTop: 10, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{paddingRight: 10}}>
                        <Image style={{width: 35, height: 35}} source={require('../assets/password.png')}></Image>
                    </View>
                   
                    <TextInput placeholder="Mật khẩu"  style={{borderWidth: 1,  borderColor: '#C4C4C4',  borderRadius: 5 ,width: 200 , height: 35, fontSize: 16}} onChangeText={(text) => setPassword(text)}></TextInput>
                    <TouchableOpacity>
                        <Image source={require('../assets/checkpw.png')} style={{width: 20, height: 15, marginTop: 10, marginLeft: 5}}></Image>
                    </TouchableOpacity>
                   
                    <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'blue',  marginTop: 5, marginLeft: 5}}>Quên?</Text>
                    </TouchableOpacity>
                    
                    
                </View>
                <View style={{ paddingTop: 15, marginHorizontal: 10}}>
                    <Button onPress={handleLogin} title='Đăng nhập' style={{}}></Button>
                </View>
                
                <View style={{alignItems: 'flex-end', paddingBottom: 10 }}>
                    <Text onPress={()=>{navigation.navigate('Profile')}} style={{color: 'blue', fontSize: 15, justifyContent: 'flex-end'}}>Hoặc đăng nhập bằng SMS</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 10}}>
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
                <Text>Bạn chưa có tài khoản? </Text>
                <Text onPress={()=>{navigation.navigate('Profile')}} style={{color:'blue'}}>Đăng ký ngay</Text>
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

export default Login;