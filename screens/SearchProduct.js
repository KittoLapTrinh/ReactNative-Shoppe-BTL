import React, { useState } from 'react';
import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { CheckBox, FlatList, TextInput } from 'react-native-web';
import { Linking } from 'react-native';

const goiY = [
    {
        id: '1',
        img: require('../assets/sach.png'),
        name: 'Sách - Đắc Nhân Tâm (Khổ Lớn - Tái bản 2024)',
        price: '99.000đ',
        sold: 'Đã bán 52,1k',
    },
    {
        id: '2',
        img: require('../assets/aonam.png'),
        name: 'Áo sơ mi trắng nam AKUBA tay dài đi học, đi làm form slimfit',
        price: '125.000đ', 
        sold: 'Đã bán 50.8k',
    },
    

]

function SearchProduct({navigation , itemId}){

    return(
        <View style={styles.container}>
            <View style={{backgroundColor: '#fff7f3',  paddingBottom: 20,}}>
                <View style={{flexDirection: 'row', 
                    alignItems: 'center',
                    justifyContent: 'center',
                  
                    width: 390,
                    height: 60}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('DaGiao')}}>
                        <Image source={require('../assets/back.png')} style={{width: 40, height: 40, marginRight: 30}}></Image>
                    </TouchableOpacity>
                
                    <Text style={{fontSize: 25, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10}}>Tìm kiếm đơn hàng</Text>
                
                    <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
                            <Image source={require('../assets/mess.png')} style={{width: 36, height: 40, marginLeft: 20}}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row',flex: 1, width: 500, height: 50,backgroundColor:'#C4C4C4', marginHorizontal:30,  }}>
                    <TouchableOpacity >
                        <Image source={require('../assets/look.png')} style={{width: 25, height: 25, marginLeft: 20}}></Image>
                    </TouchableOpacity>
                    <TextInput placeholder="Tìm kiếm theo tên Shop, ID Đơn hàng..." style={{ color: 'black', width: 300, height: 30}}></TextInput>
                </View >
              
               

                    
              
                
              
                
            </View>
          
            

            <ScrollView style={{}}>
                <View style={{ backgroundColor: '#e0e0e0', alignItems: 'center', justifyContent: 'center', height: 550, width: '100%'}}>
                    <Image source={require('../assets/donhang.png')} style={{width: 150, height: 150, marginLeft: 20}}></Image>
                    <View style={{alignItems: 'center', justifyContent: 'center', marginHorizontal: 20}}>
                        <Text style={{color: '#787878'}}>Bạn có thể tìm kiếm theo tên Shop, ID đơn hàng hoặc Tên Sản Phẩm</Text>
                    </View>
                  
                </View>

                

            </ScrollView>
            <View>
                
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
        
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff7f3',
        width: 390,
        height: 60
      
     
    },
    
})

export default SearchProduct;