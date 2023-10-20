import React, { useState } from 'react';
import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { CheckBox, FlatList, TextInput } from 'react-native-web';
import { Linking } from 'react-native';

function Cart({navigation }){
  
    const [quantity, setQuantity] = useState(1)
    const [shopName, setShopName] = useState('')


    const handleInce =()=>{
        setQuantity(quantity +1)
    }
    const handleDesc =()=>{
        if((quantity - 1) > 0){
            setQuantity(quantity - 1)
        }else{
            alert('Số lượng không hợp lệ')
        }
        
    }

    const data=[
        {
        shopName: 'PHUQUY - THỜI TRANG QUẢNG CHÂU',
        img: require('../assets/aothunbalo.png'),
        name: 'Áo 3 lỗ Nữ dệt kim freesize ',
        classify: ' - TRẮNG ĐEN, M(40-60kg, 1m45-1m65)',
        discount: 'đ130.000',
        price: 'đ95.000'
    },
    {
        shopName: 'DOMINION - THỜI TRANG UNISEX',
        img: require('../assets/aothun.png'),
        name: 'Áo thun unisex nam nữ form rộng',
        classify: ' -  XANH RÊU, M(40-60kg, 1m45-1m65)',
        discount: 'đ105.000',
        price: 'đ55.000'
    },
    {
        shopName: '17KM Official Shop',
        img: require('../assets/daychuyen.png'),
        name: 'Dây chuyền cao cấp cỏ 4 lá may mắn',
        classify: '- BẠC',
        discount: 'đ435.000',
        price: 'đ250.000'
    },
]

    


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
                <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
                    <Image source={require('../assets/back.png')} style={{width: 40, height: 40, marginRight: 30}}></Image>
                </TouchableOpacity>
               
                <Text style={{fontSize: 25, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', marginHorizontal: 30}}>Giỏ hàng</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
                   <Text style={{fontSize: 20}}>Xong</Text>
                </TouchableOpacity >
               <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
                    <Image source={require('../assets/mess.png')} style={{width: 45, height: 45, marginLeft: 20}}></Image>
               </TouchableOpacity>
                
            </View>
            <View style={{flex: 0.05, backgroundColor: '#C4C4C4'}}></View>
            <View style={styles.center}>
                <View style={{ backgroundColor: '#f4fe8e', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../assets/freeship.png')} style={{width: 30, height: 30, marginLeft: 20}}></Image>
                    <Text style={{fontSize: 13}}>Đừng bỏ lỡ mã Freeship ở mục Shopee Voucher</Text>
                </View>
                
                <ScrollView>
                    <FlatList data={data} renderItem={({item})=>{
                        return(
                             <View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 20, }}>
                                <View>
                                    <View style={{flexDirection: 'row', marginTop: 10,alignItems: 'center',}}>
                                        <CheckBox style={{marginRight: 5,}} title="" ></CheckBox>
                                        <Text style={{marginRight: 50}}>{item.shopName}</Text>
                                        <Image style={{width: 20, height: 20,}} source={require('../assets/next.png')}></Image>
                                        <View  style={{ }}>
                                            <Text>Sửa</Text>
                                        </View>
                                       
                                    </View>
                                    <View style={{flex: 0.05, backgroundColor: '#C4C4C4'}}></View>
                                    <View style={{flexDirection: 'row'}}>
                                        <View>
                                            <Image style={{width: 80, height: 80, marginRight: 20, marginTop: 10}} source={item.img}></Image>
                                        </View>
                                        
                                        <View>
                                            <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                                            <Text>{item.classify}</Text>
                                            <View style={{flexDirection: 'row'}}>
                                                <Text><del>{item.discount}</del></Text>
                                                <Text style={{color:'red', marginLeft: 10}}>{item.price}</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <TouchableOpacity onPress={handleDesc}>
                                                    <Text style={{fontSize: 20}}>-</Text>
                                                </TouchableOpacity>
                                                    <Text style={{fontSize: 20, marginHorizontal: 10}}>{quantity}</Text>
                                                <TouchableOpacity onPress={handleInce}>
                                                    <Text style={{fontSize: 20}} >+</Text>
                                                </TouchableOpacity>
                                            </View>
                                           
                                        </View>
                                        
                                    </View>

                                    
                                
                                </View>
                            </View>
                        )
                    }} >
                        

                        
                        
                    </FlatList>
                </ScrollView>
                
                
               

                
                
                
                
            </View>
            <View style={styles.bottom}>
                <View>
                    
                </View>
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

export default Cart;