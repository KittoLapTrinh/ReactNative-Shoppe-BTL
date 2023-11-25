import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-web';

function ProfileNoUser({navigation }){
    return(
        <View style={styles.container}>
            <ScrollView bounces={false}>    
                <View style={{ backgroundColor: '#f0743f', flex: 1, flexDirection: 'column', paddingBottom: 15}}>                  
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Image style={{width: 25, height: 25, marginHorizontal: 10}} source={require('../assets/setting.png')}></Image>
                            <TouchableOpacity onPress={()=>{navigation.navigate('Cart')}}>
                                <Image style={{width: 25, height: 25, marginHorizontal: 10}} source={require('../assets/giohang.png')}></Image>
                            </TouchableOpacity>
                           
                            <Image style={{width: 25, height: 25, marginHorizontal: 10}} source={require('../assets/messenger.png')}></Image>
                                        
                    </View>
                    
                   
                    <View style={{ flexDirection: 'row'}}>
                        <View style={{alignItems: 'center', justifyContent: 'flex-start', marginLeft: 10, marginBottom: 20}}>
                            <Image style={{width: 50, height: 50}} source={require('../assets/user1.png')}></Image>
                        </View>
                        <View style={{ flexDirection: 'row',  alignItems: 'center', justifyContent: 'flex-end',marginLeft: 130}}>             
                            <View style={{marginRight: 10, borderWidth:1, borderColor: '#ffffff'}}>
                                <Button title='Đăng nhập' color='#fa9567' onPress={()=>{navigation.navigate('Login')}}></Button>
                            </View>
                            <View style={{ borderWidth:1, borderColor: '#ffffff'}}>
                                <Button color='#fa9567' title='Đăng ký' onPress={()=>{navigation.navigate('Register')}} ></Button>
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
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/order.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 70}}>
                            <Text>Đơn mua</Text>
                            
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 10}}>
                            <Text style={{fontSize: 12}}>Xem lịch sử mua hàng</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>
                      
                    </View>

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
                        <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 10}}>
                            <Image style={{width: 50, height: 50,}} source={require('../assets/vishoppepay.jpg')}></Image>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 13}}>Ví ShopeePay</Text>
                               
                            </View>
                        </View>
                       
                        <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 10}}>
                        <Image style={{width: 50, height: 50,}} source={require('../assets/shoppexu.jpg')}></Image>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 13}}>Shopee Xu</Text>
                                
                            </View>
                        </View>
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
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
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

                    </View>
                    <View style={{flex: 0.02, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
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
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingBottom: 35, paddingTop: 35, backgroundColor: '#C4C4C4'}}>
                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center'}} onPress={()=>{navigation.navigate('Home')}}>
                    <Image style={{width: 35, height: 35}} source={require('../assets/home.png')}></Image>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center'}} onPress={()=>{navigation.navigate('Mall')}}>
                    <Image style={{width: 35, height: 35}} source={require('../assets/mall.png')}></Image>
                    <Text>Mall</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('Live')}} style={{alignItems: 'center', justifyContent: 'center'}} >
                    <Image style={{width: 35, height: 35, backgroundColor: '#5c5c5c'}} source={require('../assets/live.png')}></Image>
                    <Text>Live</Text>
                </TouchableOpacity> 
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 35, height: 35}} source={require('../assets/video.png')}></Image>
                    <Text>Video</Text>
                </View>
                <TouchableOpacity onPress={()=>{navigation.navigate('Notify')}}>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 35, height: 35}} source={require('../assets/thongbao.png')}></Image>
                        <Text>Thông báo</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
                    <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#5c5c5c'}}>
                            <Image style={{width: 35, height: 35}} source={require('../assets/toi.png')}></Image>
                        <Text>Tôi</Text>
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

export default ProfileNoUser;
