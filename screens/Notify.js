import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-web';

function Notify({navigation }){
    const goBack = () => {
        navigation.goBack();
    }
    const goHome = () => {
        navigation.navigate('Home');
    }
    

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{marginHorizontal: 75, marginRight: 35}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Thông báo</Text>
                    </View>
                    <View style={{ marginHorizontal: 20}}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Cart')}}>
                            <Image style={{width: 35, height: 35}} source={require('../assets/giohang.png')}></Image>
                        </TouchableOpacity>
                       
                        

                    </View>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Chat')}}>
                        <Image style={{width: 35, height: 35}} source={require('../assets/messenger.png')}></Image>
                    </TouchableOpacity>
                    
                </View>
                <View style={{flex: 0.05, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/khuyenmai.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 100, }}>
                            <Text style={{marginRight: 90, fontWeight: 'bold'}}>Khuyến mãi</Text>
                            <Text>Ưu đãi to giá mua cực nhỏ</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>
                      
                    </View>               
                </View>
                <View style={{flex: 0.05, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/video.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 100, }}>
                            <Text style={{marginRight: 90, fontWeight: 'bold'}}>Live & Video</Text>
                            <Text style={{marginRight: 90}}>Lụm Voucher</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>
                      
                    </View>               
                </View>
                <View style={{flex: 0.05, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/thongtintaichinh.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 40, }}>
                            <Text style={{marginRight: 110, fontWeight: 'bold'}}>Thông tin tài chính</Text>
                            <Text style={{marginLeft: 10}}>Siêu bão voucher đến 100K cho người...</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>
                      
                    </View>               
                </View>
                <View style={{flex: 0.05, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/capnhat.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 40, }}>
                            <Text style={{marginRight: 120, fontWeight: 'bold'}}>Cập nhật Shopee</Text>
                            <Text style={{marginLeft: 10}}>Quảng cáo của Shopee có “ghi điểm”...</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>
                      
                    </View>               
                </View>
                <View style={{flex: 0.05, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Image style={{width: 35, height: 35}} source={require('../assets/giaithuong.png')}></Image>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 40, }}>
                            <Text style={{marginRight: 120, fontWeight: 'bold'}}>Giải thưởng Shop</Text>
                            <Text style={{marginRight: 20}}>Chọn 6 số may mắn cùng Shopee...</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' ,}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>
                      
                    </View>               
                </View>
                <View style={{flex: 1.5, backgroundColor: '#C4C4C4', marginTop: 10,flexDirection: 'row', alignItems : 'center', justifyContent: 'space-around'}}>
                    <Text style={{color: ''}}>Cập nhật đơn hàng</Text>
                    <Text style={{color:'red'}}>Đọc tất cả(4)</Text>
                </View>
                <View style={{flexDirection: 'row', backgroundColor: '#fff2eb'}}>
                    <View>
                        <Image style={{width: 70, height: 70}} source={require('../assets/don1.jpg')}></Image>
                    </View>
                    <View style={{justifyContent: 'flex-start'}}>
                        <Text>Chia sẻ nhận xét về sản phẩm</Text>
                        <Text>Đơn hàng 2310031874F8RV đã hoàn thành.</Text>
                        <Text>Bạn hãy đánh giá sản phẩm trước ngày 19-10-2023</Text> 
                        <Text>để nhận 200 xu và giúp người dùng khác hiểu hơn về sản phẩm nhé!</Text>
                        <Text>07:06   09-10-2023</Text>
                    </View>
                </View>
                <View style={{flex: 0.05, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                <View style={{flexDirection: 'row', backgroundColor: '#fff2eb'}}>
                    <View>
                        <Image style={{width: 70, height: 70}} source={require('../assets/don2.jpg')}></Image>
                    </View>
                    <View style={{justifyContent: 'flex-start'}}>
                        <Text>Chia sẻ nhận xét về sản phẩm</Text>
                        <Text>Đơn hàng 2310031874F8RV đã hoàn thành.</Text>
                        <Text>Bạn hãy đánh giá sản phẩm trước ngày 19-10-2023</Text> 
                        <Text>để nhận 200 xu và giúp người dùng khác hiểu hơn về sản phẩm nhé!</Text>
                        <Text>07:06   09-10-2023</Text>
                    </View>
                </View>
                <View style={{flex: 0.05, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                <View style={{flexDirection: 'row', backgroundColor: '#fff2eb'}}>
                    <View>
                        <Image style={{width: 70, height: 70}} source={require('../assets/don3.jpg')}></Image>
                    </View>
                    <View style={{justifyContent: 'flex-start'}}>
                        <Text>Chia sẻ nhận xét về sản phẩm</Text>
                        <Text>Đơn hàng 2310031874F8RV đã hoàn thành.</Text>
                        <Text>Bạn hãy đánh giá sản phẩm trước ngày 19-10-2023</Text> 
                        <Text>để nhận 200 xu và giúp người dùng khác hiểu hơn về sản phẩm nhé!</Text>
                        <Text>07:06   09-10-2023</Text>
                    </View>
                </View>
                <View style={{flex: 0.05, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                <View style={{flexDirection: 'row', backgroundColor: '#fff2eb'}}>
                    <View>
                        <Image style={{width: 70, height: 70}} source={require('../assets/don4.png')}></Image>
                    </View>
                    <View style={{justifyContent: 'flex-start'}}>
                        <Text>Chia sẻ nhận xét về sản phẩm</Text>
                        <Text>Đơn hàng 2310031874F8RV đã hoàn thành.</Text>
                        <Text>Bạn hãy đánh giá sản phẩm trước ngày 19-10-2023</Text> 
                        <Text>để nhận 200 xu và giúp người dùng khác hiểu hơn về sản phẩm nhé!</Text>
                        <Text>07:06   09-10-2023</Text>
                    </View>
                </View>
                <View style={{flex: 0.05, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                
                
            </ScrollView>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingBottom: 35, paddingTop: 35, backgroundColor: '#C4C4C4'}}>
                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center'}} onPress={()=>{navigation.navigate('Home')}}>
                    <Image style={{width: 35, height: 35}} source={require('../assets/home.png')}></Image>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('Mall')}} style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 35, height: 35}} source={require('../assets/mall.png')}></Image>
                    <Text>Mall</Text>
                </TouchableOpacity>   
                <TouchableOpacity onPress={()=>{navigation.navigate('Live')}} style={{alignItems: 'center', justifyContent: 'center'}} >
                    <Image style={{width: 35, height: 35}} source={require('../assets/live.png')}></Image>
                    <Text>Live</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={()=>{navigation.navigate('Video')}} style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 35, height: 35}} source={require('../assets/video.png')}></Image>
                    <Text>Video</Text>
                </TouchableOpacity>
                <View style={{alignItems: 'center', justifyContent: 'center',backgroundColor: '#5c5c5c'}}>
                    <Image style={{width: 35, height: 35}} source={require('../assets/thongbao.png')}></Image>
                    <Text>Thông báo</Text>
                </View>
                <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
                    <View style={{alignItems: 'center', justifyContent: 'center', }}>
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

export default Notify;