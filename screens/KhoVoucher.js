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

function KhoVoucher({navigation }){
    const goBack = () => {
        navigation.goBack();
    }
    const goHome = () => {
        navigation.navigate('Home');
    }
    return(
        <View style={styles.container}>
            <View style={{backgroundColor: '#fff7f3',  paddingBottom: 20,}}>
                <View style={{flexDirection: 'row', 
                    alignItems: 'center',
                    justifyContent: 'center',
                  
                    width: 390,
                    height: 60}}>
                    <TouchableOpacity onPress={goBack}>
                        <Image source={require('../assets/back.png')} style={{width: 40, height: 40, marginRight: 30}}></Image>
                    </TouchableOpacity>
                
                    <Text style={{fontSize: 25, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', marginHorizontal: 30}}>Mã Giảm Giá</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Chat')}}>
                        <Text style={{color: 'red', fontWeight: 'bold'}}>Lịch sử</Text>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor: '#C4C4C4', flex: 0.1, marginVertical: 10}}></View>
                <ScrollView horizontal={true} style={{flexDirection: 'row',flex: 1, width: 500, height: 50}}>
               
                    <TouchableOpacity onPress={()=>{navigation.navigate('ChoXacNhan')}} style={{paddingHorizontal: 5}}>
                        <Text style={{fontSize: 17, paddingRight: 15,  color: 'red', fontWeight: 'bold' }}>Tất cả</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={()=>{navigation.navigate('ChoLayHang')}} style={{paddingHorizontal: 5}}>
                        <Text style={{fontSize: 17, paddingRight: 15,}}>Shopee</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('ChoGiaoHang')}} style={{paddingHorizontal: 5}}>
                        <Text style={{fontSize: 17, paddingRight: 15,}}>Chờ giao hàng</Text>
                    </TouchableOpacity>
                    <View style={{}}>
                        <Text style={{fontSize: 17, paddingRight: 15}}>Shop</Text>
                    </View>
                    <View style={{}}>
                        <Text style={{fontSize: 17, paddingRight: 15}}>Nạp thẻ & Dịch vụ</Text>
                    </View>
                    <View style={{}}>
                        <Text style={{fontSize: 17, paddingRight: 15}}>ShopeeFood</Text>
                    </View>
                </ScrollView>
                <View style={{backgroundColor: '#C4C4C4', flex: 0.1, marginVertical: 10}}></View>
                <View  style={{flexDirection: 'row',flex: 1, width: 500, height: 50, alignItems: 'center',marginLeft: 5}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('ChoXacNhan')}} style={{marginRight: 50, borderWidth: 1, borderColor: '#C4C4C4'}}>
                        <Text style={{fontSize: 17, paddingRight: 15,  color: 'red', fontWeight: 'bold' }}>Mới nhất</Text>
                    </TouchableOpacity>
                        
                    <TouchableOpacity onPress={()=>{navigation.navigate('ChoLayHang')}} style={{marginRight: 50,borderWidth: 1, borderColor: '#C4C4C4',backgroundColor: '#C4C4C4'}}>
                        <Text style={{fontSize: 17, paddingRight: 15,}}>Phổ biến</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('ChoGiaoHang')}} style={{borderWidth: 1, borderColor: '#C4C4C4',backgroundColor: '#C4C4C4'}}>
                        <Text style={{fontSize: 17, paddingRight: 15,}}>Sắp hết hạn</Text>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor: '#C4C4C4', flex: 0.1, marginVertical: 10}}></View>
                <View  style={{flexDirection: 'row',flex: 1, width: 500, height: 50, alignItems: 'center',marginLeft: 5, }}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('ChoXacNhan')}} style={{marginRight: 50,}}>
                        <Text style={{fontSize: 17, paddingRight: 15,  }}>Nhập mã Voucher</Text>
                    </TouchableOpacity>
                        
                    <TouchableOpacity onPress={()=>{navigation.navigate('ChoLayHang')}} style={{marginRight: 50}}>
                        <Text style={{fontSize: 17, paddingRight: 15,}}>Tìm thêm Voucher</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
          
            

            <ScrollView style={{}}>
                <View style={{ backgroundColor: '#e0e0e0', alignItems: 'center', justifyContent: 'center', height: 300}}>
                    <Image source={require('../assets/donhang.png')} style={{width: 150, height: 150, marginLeft: 20}}></Image>
                    <Text style={{color: '#787878'}}>Chưa có đơn hàng</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../assets/linengang.png')} style={{width: 100, height: 40, marginLeft: 20}}></Image>
                    <Text style={{fontSize: 15}}>Có thể bạn cũng thích</Text>
                    <Image source={require('../assets/linengang.png')} style={{width: 100, height: 40, marginLeft: 20}}></Image>
                </View>
                <ScrollView  style={{flexDirection: 'row',}}  >
                    <FlatList  data={goiY}  keyExtractor={item => item.id.toString()} numColumns={2} renderItem = {({item})=>{
                        return(
                            <View style={{}}>
                                <View style={{ paddingHorizontal: 20}}>
                                    <Image  source={item.img} style={{width: 160, height: 160, borderColor: '#C4C4C4', borderWidth: 1,}}></Image>
                                </View>
                                    <View style={{alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{fontSize: 14, width: 160, height: 60,fontWeight: 'bold',}}>{item.name}</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 5}}>
                                    <View style={{}}>
                                        <Text style={{color: 'red', fontWeight: 'bold', fontSize: 18}}>{item.price}</Text>
                                    </View>
                                    <View style={{}}>
                                        <Text style={{fontSize: 12}}>{item.sold}</Text>
                                    </View>
                                </View>
                                        
                                        
                                    
                            </View>

                        )
                    }}>

                    </FlatList>
                </ScrollView>

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

export default KhoVoucher;