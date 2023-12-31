import { useState } from 'react';
import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-web';
import {Ionicons} from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'; 
const data = {
    user: 'duongtuankiet',
    level: 'Bạc',
    flow: '17',
    watching: '211'
}
    
function Profile({navigation}){
    const goBack = () => {
        navigation.goBack();
    }
    const goHome = () => {
        navigation.navigate('Home');
    }
    const goMall = () => {
        navigation.navigate('Mall');
    }
    const goLive = () => {
        navigation.navigate('Live');
    }
    const goVideo = () => {
        navigation.navigate('Video');
    }
    const goNotify = () => {
        navigation.navigate('Notify');
    }
    const goProfile = () => {
        navigation.navigate('Profile');
    }
    const goShopeePay = () => {
        navigation.navigate('ShopeePay');
    }
    const goShopeeXu = () => {
        navigation.navigate('ShopeeXu');
    }
    return(
        <View style={styles.container}>
            
            <ScrollView  bounces={false}>  
           
                <View style={{ backgroundColor: '#f0743f', flex: 1, flexDirection: 'column', paddingBottom: 15}}>                  
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Image style={{width: 35, height: 35, marginHorizontal: 10}} source={require('../assets/setting.png')}></Image>
                            <TouchableOpacity onPress={()=>{navigation.navigate('Cart')}}>
                                <Image style={{width: 35, height: 35, marginHorizontal: 10}} source={require('../assets/giohang.png')}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{navigation.navigate('Chat')}}>
                            <Image style={{width: 35, height: 35, marginHorizontal: 10}} source={require('../assets/messenger.png')}></Image>
                            </TouchableOpacity>
                            
                                        
                    </View>
                    
                   
                    <View style={{ flexDirection: 'row'}}>
                        <View style={{alignItems: 'center', justifyContent: 'flex-start', marginLeft: 10, marginBottom: 20}}>
                            <Image style={{width: 50, height: 50}} source={require('../assets/user1.png')}></Image>
                        </View>
                        <View style={{  marginLeft: 30}}>             
                            {/* <View style={{marginRight: 10, borderWidth:1, borderColor: '#ffffff'}}>
                                <Button title='Đăng nhập' color='#fa9567' onPress={()=>{navigation.navigate('Login')}}></Button>
                            </View>
                            <View style={{ borderWidth:1, borderColor: '#ffffff'}}>
                                <Button color='#fa9567' title='Đăng ký' onPress={()=>{navigation.navigate('Register')}} ></Button>
                            </View> */}
                            <TouchableOpacity>
                                <Text style={{color:'#FFFFFF', fontSize:20, fontWeight: 'bold' , marginBottom: 5}}>{data.user}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{fontSize: 15, borderColor: '#FFFFFF', borderWidth: 1, borderRadius: 10, backgroundColor: '#FFFFFF', marginRight: 160, marginBottom: 5}}>Thành viên {data.level}   </Text>  
                            </TouchableOpacity>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity>
                                    <Text style={{color:'#FFFFFF', fontSize:16, fontWeight: 'bold', marginRight: 20}}>Người theo: {data.flow}</Text>  
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{color:'#FFFFFF', fontSize:16, fontWeight: 'bold'}}>Đang theo dõi: {data.watching}</Text>  
                                </TouchableOpacity>
                            </View>
                            
                            
                            
                           
                           
                            
                        </View>
                    </View>                                   
                </View>
                <View style={{flex: 0.05, backgroundColor: '#C4C4C4'}}></View>
                <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingBottom: 50}}>
                        <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 10}}>
                            <Image style={{width: 60, height: 60,borderWidth: 1, borderColor: '#C4C4C4', borderRadius: 30}} source={require('../assets/freeship.jpg')}></Image>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 13}}>Freeship</Text>
                                <Text>0đ</Text>
                            </View>
                        </View>
                       
                        <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 10}}>
                        <Image style={{width: 60, height: 60,borderWidth: 1, borderColor: '#C4C4C4', borderRadius: 30}} source={require('../assets/hanghieugiatot.jpg')}></Image>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 13}}>Gì </Text>
                                <Text>Cũng rẻ</Text>
                            </View>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 10}}>
                        <Image style={{width: 60, height: 60,borderWidth: 1, borderColor: '#C4C4C4', borderRadius: 30}} source={require('../assets/gicungre.jpg')}></Image>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 13}}>Hàng hiệu</Text>
                                <Text>giá tốt</Text>
                            </View>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 10}}>
                        <Image style={{width: 60, height: 60,borderWidth: 1, borderColor: '#C4C4C4', borderRadius: 30}} source={require('../assets/magiamgia.jpg')}></Image>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 13}}>Mã giảm</Text>
                                <Text>giá</Text>
                            </View>
                        </View>  
                            
                    </View>

                
                </View>
                <View style={{flex: 0.05, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                <View style={{}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/Smartphone.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 130}}>
                            <Text>Đơn nạp thẻ và dịch vụ</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>
                      
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <TouchableOpacity onPress={() =>{navigation.navigate('ChoXacNhan')}} >
                            <Image style={{width: 35, height: 35}} source={require('../assets/order.png')}></Image>
                        </TouchableOpacity>
                           
                        <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center' , marginRight: 70}} onPress={() =>{navigation.navigate('ChoXacNhan')}} >
                            <Text>Đơn mua</Text>
                        </TouchableOpacity>
                        
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 10}}>
                            <Text style={{fontSize: 12}}>Xem lịch sử mua hàng</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>
                      
                    </View>

                </View>
                <View style={{flex: 0.05, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('ChoXacNhan')} style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 10}}>
                        <Image style={{width: 50, height: 50,}} source={require('../assets/choxacnhan.png')}></Image>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 13}}>Chờ xác nhận</Text> 
                        </View>
                    </TouchableOpacity >
                    <TouchableOpacity  onPress={()=>navigation.navigate('ChoLayHang')} style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 10}}>
                        <Image style={{width: 50, height: 50,}} source={require('../assets/cholayhang.png')}></Image>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                           <Text style={{fontWeight: 'bold', fontSize: 13}}>Chờ lấy hàng </Text> 
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('ChoGiaoHang')} style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 10}}>
                        <Image style={{width: 50, height: 50,}} source={require('../assets/danggiaohang.png')}></Image>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 13}}>Chờ giao hàng</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={()=>navigation.navigate('DanhGia')}  style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 10}} >
                        <Image style={{width: 50, height: 50,}} source={require('../assets/danhgia.png')}>
                        </Image>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 13}}>Đánh giá</Text>
                        
                        </View>
                    </TouchableOpacity>
                    
                            
                </View>
                <View style={{flex: 0.05, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                    
                <View style={{}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/donshoppefood.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 180}}>
                            <Text>Đơn ShoppeFood</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>
                      
                    </View>               
                </View>
                <View style={{flex: 0.02, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                <View style={{}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/tienichcuatoi.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 200}}>
                            <Text>Tiện ích của tôi</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>
                      
                    </View>               
                </View>
                <View style={{flex: 0.02, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                        <TouchableOpacity onPress={goShopeePay} style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 10}}>
                            <Image style={{width: 50, height: 50,}} source={require('../assets/vishoppepay.jpg')}></Image>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 13}}>Ví ShopeePay</Text>  
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{navigation.navigate('ShopeeXu')}} style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 10}}>
                            <Image style={{width: 50, height: 50,}} source={require('../assets/shoppexu.jpg')}></Image>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 13}}>Shopee Xu</Text>
                                
                            </View>
                        </TouchableOpacity>
                        <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 10}}>
                        <Image style={{width: 50, height: 50,}} source={require('../assets/voucher.png')}></Image>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 13}}>Kho Voucher</Text>
                            </View>
                        </View>                     
                    </View>
                    <View style={{flex: 0.02, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/baohiem.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 80}}>
                            <Text>Bảo hiểm của tôi</Text>
                            
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 10}}>
                            <Text style={{fontSize: 12}}>Khám phá ngay! </Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>

                    </View>
                    <View style={{flex: 0.05, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/batdauban.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 95}}>
                            <Text>Bắt đầu bán</Text>
                            
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 10}}>
                            <Text style={{fontSize: 12}}>Đăng ký miễn phí  </Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>

                    </View>
                    <View style={{flex: 0.05, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/khachhangthanthiet.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 70}}>
                            <Text>Khách hàng thân thiết</Text>
                            
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 10}}>
                            <Text style={{fontSize: 12}}>Thành viên   </Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>

                    </View>
                    <View style={{flex: 0.02, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/dathich.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 220}}>
                            <Text>Đã thích</Text>
                            
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 10}}>
                            
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>

                    </View>
                    <View style={{flex: 0.02, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/shopdangtheodoi.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 145}}>
                            <Text>Shop đang theo dõi</Text>
                            
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 10}}>
                            
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>

                    </View>
                    <View style={{flex: 0.02, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/santhuong.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 50, flexDirection: 'row'}}>
                            <Text>Săn thưởng Shoppe  </Text>
                            
                            
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 10}}>
                            <Text>Giải trí săn xu  </Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>

                    </View>
                    <View style={{flex: 0.02, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/daxemganday.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 25, flexDirection: 'row'}}>
                            <Text>Đã xem gần đây</Text>
                           
                            
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 150}}>
                            
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>

                    </View>
                    <View style={{flex: 0.02, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/soduTK.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 160, flexDirection: 'row'}}>
                            <Text>Số dư TK Shopee</Text>
                           
                            
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 10}}>
                            
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>

                    </View>
                    <View style={{flex: 0.02, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around'}} onPress={goShopeeXu}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/shoppexu.jpg')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 30, flexDirection: 'row'}}>
                            <Text>Shopee Xu</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginLeft: 10}}>
                            <Text>Nhấn để nhận xu mỗi ngày</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex: 0.02, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around'}} onPress={()=>{navigation.navigate('DanhGia')}}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/danhgiacuatoi.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 160, flexDirection: 'row'}}>
                            <Text>Đánh giá của tôi</Text>
                           
                            
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 10}}>
                           
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>
                    </TouchableOpacity>
                    <View >
                        

                    </View>
                    <View style={{flex: 0.02, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/tiepthilienket.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 120, flexDirection: 'row'}}>
                            <Text>Shopee tiếp thị liên kết</Text>
                           
                            
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 10}}>
                           
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>

                    </View>
                    <View style={{flex: 0.05, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/thietlaptk.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 150, flexDirection: 'row'}}>
                            <Text>Thiết lập tài khoản</Text>
                           
                            
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 10}}>
                           
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>

                    </View>
                    <View style={{flex: 0.02, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/trogiup.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 150, flexDirection: 'row'}}>
                            <Text>Trung tâm trợ giúp</Text>
                           
                            
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 10}}>
                           
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>

                    </View>
                    <View style={{flex: 0.02, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/trochuyen.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 125, flexDirection: 'row'}}>
                            <Text>Trò chuyện với Shopee</Text>
                           
                            
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 10}}>
                           
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>

                    </View>
                    <View style={{flex: 0.02, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
            </ScrollView>
            <View style={{height: 30, flexDirection: 'row', alignItems: 'center', paddingBottom: 35, paddingTop: 35, backgroundColor: 'white'}}>
                  <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} onPress={()=>{navigation.navigate('Home')}}>
                  <Ionicons name='home-outline' size={30} color='#bfbfbf'></Ionicons>
                  <Text style = {{color: '#bfbfbf',  fontSize: 13}}>Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{navigation.navigate('Mall')}} style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
                    <Feather name='shopping-bag' size={30} color='#bfbfbf'></Feather>
                    <Text style = {{color: '#bfbfbf',  fontSize: 13}}>Mall</Text>
                  </TouchableOpacity>  
                  <TouchableOpacity onPress={()=>{navigation.navigate('Live')}} style={{flex: 1,alignItems: 'center', justifyContent: 'center'}} >
                  <Ionicons name='videocam-outline' size={30} color='#bfbfbf'></Ionicons>
                  <Text style = {{color: '#bfbfbf', fontSize: 13}}>Live</Text>
                    </TouchableOpacity> 
                  <TouchableOpacity onPress={()=>{navigation.navigate('Video')}} style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
                  <Ionicons name='play-outline' size={30} color='#bfbfbf'></Ionicons>
                  <Text style = {{color: '#bfbfbf', fontSize: 13}}>Video</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{navigation.navigate('Notify')}}  style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
                  <Ionicons name='newspaper-outline' size={30} color='#bfbfbf'></Ionicons>
                  <Text style = {{color: '#bfbfbf', fontSize: 13}}>Thông báo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}} style = {{flex: 1,}}>
                      <View style={{alignItems: 'center', justifyContent: 'center', }}>
                      <Ionicons name='person' size={30} color='orange'></Ionicons>
                  <Text style = {{color: 'orange',  fontSize: 13}}>Tôi</Text>
                      </View>
                  </TouchableOpacity>
            </View> 
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
})

export default Profile;
