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
    {
        id: '3',
        img: require('../assets/dothethao.png'),
        name: 'Quần áo bóng đá đội tuyển achentina mẫu mới nhất',
        price: '135.000đ', 
        sold: 'Đã bán 90.7k',
    },
    {
        id: '4',
        img: require('../assets/denled.png'),
        name: 'Đèn led dây, đèn led trang trí dây đồng mini',
        price: '65.000đ', 
        sold: 'Đã bán 115.3k',
    },    
    {
        id: '5',
        img: require('../assets/nuochoanu.png'),
        name: 'Narciso rodriguez - Nước hoa nữ chính hãng nhẹ nhàng ',
        price: '1.009.000đ', 
        sold: 'Đã bán 27.9k',
    }, 
    {
        id: '6',
        img: require('../assets/oplung.png'),
        name: 'Ốp lưng iphone Rainbow X/XS/11/12/13/14',
        price: '105.000đ', 
        sold: 'Đã bán 35.1k',
    },   
    {
        id: '7',
        img: require('../assets/giaytaynam.png'),
        name: 'Giày tây nam trẻ trung vân da hàng hiệu Tâm Anh',
        price: '1.275.000đ', 
        sold: 'Đã bán 16.5k',
    },
    {
        id: '8',
        img: require('../assets/suahop.png'),
        name: 'Sữa Similac IQ HMO Gold Lable số 3 400g',
        price: '602.000đ', 
        sold: 'Đã bán 56.4k',
    }, 
    {
        id: '9',
        img: require('../assets/mubaohiem.png'),
        name: 'Mũ bảo hiểm 3/4 KYT VENOM OPEN FACE SOLID',
        price: '345.000đ', 
        sold: 'Đã bán 76.2k',
    },  
    {
        id: '10',
        img: require('../assets/aovest.png'),
        name: 'Áo vest nam đen 2 lớp đẹp, cao cấp',
        price: '515.000đ', 
        sold: 'Đã bán 101.8k',
    },  
    {
        id: '11',
        img: require('../assets/giaythethao.png'),
        name: 'Giày thể thao Adidas khắc tên Messi',
        price: '999.000đ', 
        sold: 'Đã bán 259.8k',
    },
    {
        id: '12',
        img: require('../assets/aoblazernu.png'),
        name: 'Áo Blazer nữ leopard-pint by Blaz',
        price: '619.000đ', 
        sold: 'Đã bán 161.1k',
    },  
    {
        id: '13',
        img: require('../assets/lythuytinh.png'),
        name: 'Bộ 6 ly thủy tinh LUMINARC 320ml Xanh Dương',
        price: '139.000đ', 
        sold: 'Đã bán 139.6k',
    },
    {
        id: '14',
        img: require('../assets/quat.png'),
        name: 'Quạt bàn lỡ Senko ống nhựa L1638',
        price: '619.000đ', 
        sold: 'Đã bán 161.1k',
    },  
    {
        id: '15',
        img: require('../assets/suatam1.png'),
        name: 'Sữa tắm Happy Bath Natural Body Wash Hang Quốc 900gr',
        price: '267.000đ',
        sold: 'Đã bán 69.2k',
    },
    {
        id: '16',
        img: require('../assets/nuochoa1.png'),
        name: 'Nước hoa Dior thơm lâu nam tính',
        price: '458.000đ', 
        sold: 'Đã bán 251.0k',
    },  
    {
        id: '17',
        img: require('../assets/daychuyen1.png'),
        name: 'Dây chuyền nữ xinh đẹp cao cấp tinh xảo HPSEO',
        price: '425.000đ',
        sold: 'Đã bán 619.2k',
    },
    {
        id: '18',
        img: require('../assets/dongu.png'),
        name: 'Đồ ngủ bộ áo hai dây quần dài DB199',
        price: '366.000đ', 
        sold: 'Đã bán 159.0k',
    },
    {
        id: '19',
        img: require('../assets/daugoi1.png'),
        name: 'Dầu gội dược liệu Nguyên Xuân Xanh 200ml',
        price: '360.000đ',
        sold: 'Đã bán 66.8k',
    },
    {
        id: '20',
        img: require('../assets/vidanam.png'),
        name: 'Ví da nam cá sấu dành cho nam cao cấp',
        price: '125.000đ', 
        sold: 'Đã bán 97.6k',
    },   
]

function ChoGiaoHang({navigation }){
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
                
                    <Text style={{fontSize: 25, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', marginHorizontal: 30}}>Đơn mua</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
                        <Image source={require('../assets/look.png')} style={{width: 35, height: 35, marginLeft: 20}}></Image>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={()=>{navigation.navigate('Chat')}}>
                            <Image source={require('../assets/mess.png')} style={{width: 36, height: 40, marginLeft: 20}}></Image>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} style={{flexDirection: 'row',flex: 1, width: 500, height: 50}}>
               
                    <TouchableOpacity onPress={()=>{navigation.navigate('ChoXacNhan')}} style={{paddingHorizontal: 5}}>
                        <Text style={{fontSize: 17, paddingRight: 15,  }}>Chờ xác nhận</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={()=>{navigation.navigate('ChoLayHang')}} style={{paddingHorizontal: 5}}>
                        <Text style={{fontSize: 17, paddingRight: 15,}}>Chờ lấy hàng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('ChoGiaoHang')}} style={{paddingHorizontal: 5}}>
                        <Text style={{fontSize: 17, paddingRight: 15, color: 'red', fontWeight: 'bold'}}>Chờ giao hàng</Text>
                    </TouchableOpacity>
                    <View style={{}}>
                        <Text style={{fontSize: 17, paddingRight: 15}}>Đã giao</Text>
                    </View>
                    <View style={{}}>
                        <Text style={{fontSize: 17, paddingRight: 15}}>Đã hủy</Text>
                    </View>
                    <View style={{}}>
                        <Text style={{fontSize: 17, paddingRight: 15}}> Trả hàng</Text>
                    </View>
               
              
                
                </ScrollView>
                
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

export default ChoGiaoHang;