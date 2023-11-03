import React, { useState } from 'react';
import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { CheckBox, FlatList, TextInput } from 'react-native-web';
import { Linking } from 'react-native';

function PurchaseOrder({navigation , itemId}){
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
                    <Image source={require('../assets/back.png')} style={{width: 40, height: 40, marginRight: 30}}></Image>
                </TouchableOpacity>
               
                <Text style={{fontSize: 25, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', marginHorizontal: 30}}>Đơn mua</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
                    <Image source={require('../assets/look.png')} style={{width: 35, height: 35, marginLeft: 20}}></Image>
                </TouchableOpacity >
               <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
                    <Image source={require('../assets/mess.png')} style={{width: 36, height: 40, marginLeft: 20}}></Image>
               </TouchableOpacity>
                
            </View>
          
            <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={()=>{navigation.navigate()}} style={{paddingHorizontal: 5}}>
                    <Text style={{fontSize: 19, paddingRight: 15}}>Chờ xác nhận</Text>
                </TouchableOpacity>
                <View >
                    <Text style={{fontSize: 19, paddingRight: 15}}>Chờ xác nhận</Text>
                </View>
                <View style={{}}>
                    <Text style={{fontSize: 19, paddingRight: 15}}>Chờ lấy hàng</Text>
                </View>
                <View style={{}}>
                    <Text style={{fontSize: 19, paddingRight: 15}}>Chờ giao hàng</Text>
                </View>
                <View style={{}}>
                    <Text style={{fontSize: 19, paddingRight: 15}}>Đã giao</Text>
                </View>
                <View style={{}}>
                    <Text style={{fontSize: 19, paddingRight: 15}}> Đã hủy</Text>
                </View>
                <View style={{}}>
                    <Text style={{fontSize: 19}}>Trả hàng</Text>
                </View>
            </ScrollView>
            <View >
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
      
        backgroundColor: '#FFFFFF',
       

    },
    top:{
        flex:1,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff7f3',
     
    },
    
})

export default PurchaseOrder;