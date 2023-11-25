import React, { useState } from 'react';
import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { CheckBox, FlatList, TextInput } from 'react-native-web';
import { Linking } from 'react-native';
import { Input } from 'react-native-elements';

function ShopeeXu({navigation}){
    const goBack = () => {
        navigation.goBack();
    }
    const goHome = () => {
        navigation.navigate('Home');
    }
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'center',}}>
                    <TouchableOpacity onPress={goBack}>
                        <Image source={require('../assets/back.png')} style={{width: 40, height: 40, marginRight: 30}}></Image>
                    </TouchableOpacity>
                    <Text style={{fontSize: 19, color: '#FFFFFF', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', marginHorizontal: 30}}>Ưu đãi Shopee Xu</Text>
                    <TouchableOpacity style={{borderWidth:2, borderColor: '#FFFFFF', borderRadius: 5,marginRight: 10, width: 45, height: 40}} onPress={()=>{navigation.navigate('Profile')}}>
                        <Image source={require('../assets/voucher.png')} style={{width: 40, height: 40, marginRight: 30}}></Image>
                    </TouchableOpacity >
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'flex-start', backgroundColor: '#ffb43e',}}>
                    <Image source={require('../assets/coin.png')} style={{width: 40, height: 40, marginRight: 30}}></Image>
                    <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FFFFFF', }}>700</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'space-around', backgroundColor: '#ffb43e',}}>
                    
                    <Text style={{fontSize: 15, color: '#FFFFFF'}}>100 xu xẽ hết hạn vào 30-11-2023</Text>
                    
                    <TouchableOpacity style={{backgroundColor: '#ffdd56', borderWidth: 0.5, borderColor: '#e8d28f', borderRadius: 20, width: 70 ,height: 25, alignItems: 'center' , justifyContent: 'center'}} onPress={()=>{navigation.navigate('')}}>
                        <Text  style={{color: '#FFFFFF'}}>Lịch sử  </Text>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderWidth: 1, marginHorizontal: 5}}>
                    <View style={{}}>
                        <TouchableOpacity style={{borderColor: "while", borderWidth: 1, borderRadius: 5, width: 40, height: 65, marginLeft: 5}}>
                            <Text style={{color: 'red', fontWeight: 'bold'}}>+100</Text>
                            <Image source={require('../assets/coin.png')} style={{width: 40, height: 40, marginRight: 30}}></Image>
                        </TouchableOpacity>
                        <Text style={{color: 'red', fontWeight: 'bold', fontSize: 12}}>Hôm nay</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{borderColor: "while", borderWidth: 1, borderRadius: 5, width: 40, height: 65}}>
                            <Text style={{ fontWeight: 'bold'}}>+100</Text>
                            <Image source={require('../assets/coin.png')} style={{width: 40, height: 40, marginRight: 30}}></Image>
                        </TouchableOpacity>
                        <Text style={{fontSize: 12, color: '#C4C4C4'}}>Ngày 2</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{borderColor: "while", borderWidth: 1, borderRadius: 5, width: 40, height: 65}}>
                            <Text style={{ fontWeight: 'bold'}}>+100</Text>
                            <Image source={require('../assets/coin.png')} style={{width: 40, height: 40, marginRight: 30}}></Image>
                        </TouchableOpacity>
                        <Text style={{fontSize: 12, color: '#C4C4C4'}}>Ngày 3</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{borderColor: "while", borderWidth: 1, borderRadius: 5, width: 40, height: 65}}>
                            <Text style={{fontWeight: 'bold'}}>+100</Text>
                            <Image source={require('../assets/coin.png')} style={{width: 40, height: 40, marginRight: 30}}></Image>
                        </TouchableOpacity>
                        <Text style={{fontSize: 12, color: '#C4C4C4'}}>Ngày 4</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{borderColor: "while", borderWidth: 1, borderRadius: 5, width: 40, height: 65}}>
                            <Text style={{ fontWeight: 'bold'}}>+100</Text>
                            <Image source={require('../assets/coin.png')} style={{width: 40, height: 40, marginRight: 30}}></Image>
                        </TouchableOpacity>
                        <Text style={{fontSize: 12, color: '#C4C4C4'}}>Ngày 5</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{borderColor: "while", borderWidth: 1, borderRadius: 5, width: 40, height: 65}}>
                            <Text style={{ fontWeight: 'bold'}}>+100</Text>
                            <Image source={require('../assets/coin.png')} style={{width: 40, height: 40, marginRight: 30}}></Image>
                        </TouchableOpacity>
                        <Text style={{fontSize: 12, color: '#C4C4C4'}}>Ngày 6</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{borderColor: "while", borderWidth: 1, borderRadius: 5, width: 40, height: 65}}>
                            <View style={{backgroundColor: 'red'}}>
                                <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>+100</Text>
                            </View>
                            <View style={{}}>
                                <Image source={require('../assets/coin.png')} style={{width: 40, height: 40, marginRight: 30}}></Image>
                            </View>
                            
                        </TouchableOpacity>
                        <Text style={{fontSize: 12, color: '#C4C4C4'}}>Ngày 7</Text>
                    </View>
                    
                    

                </View>
                <TouchableOpacity style={{backgroundColor: '#c9260b', borderRadius: 15, borderWidth: 1,marginHorizontal: 20, alignItems: 'center', justifyContent: 'center', width: 200 , height: 35, marginTop: 20, }}>
                    <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>Nhận ngay</Text>
                </TouchableOpacity>
            </View>
            
            
            <View style={{flex: 0.05, backgroundColor: '#C4C4C4'}}></View>
            <View style={{ flex: 1 }}></View>


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
        backgroundColor: '#ffb43e'
        
     
    },
  
})

export default ShopeeXu;