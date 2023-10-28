import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FlatList, TextInput } from 'react-native-web';
import { PanGestureHandler, State, } from 'react-native-gesture-handler';


function Mall({navigation }){


   
    let offsetX = 0;

    const onGestureEvent = (event)=>{
        offsetX = event.nativeEvent.translationX;
    }

    const onHandlerStateChange = (event) => {
        if (event.nativeEvent.state === State.END) {
          if (offsetX > 50) {
            // Lướt sang trái
            console.log('Lướt sang trái');
            // Thực hiện hành động khi lướt sang trái
          } else if (offsetX < -50) {
            // Lướt sang phải
            console.log('Lướt sang phải');
            // Thực hiện hành động khi lướt sang phải
          }
        }
      };

    const data =[
        {
            id: '1',
            img: require('../assets/sale1.png'),
            name: 'Shopee Thời Trang'
            // 
        
        },
        {
            id: '2',
            img: require('../assets/sale2.png'),
            name: 'Shopee Thời Trang'
        
        },
        {
            id: '1',
            img: require('../assets/sale3.png'),
            name: 'Shopee Thời Trang'
        
        },
        {
            id: '1',
            img: require('../assets/sale4.png'),
            name: 'Shopee Thời Trang'
        
        },
        {
            id: '1',
            img: require('../assets/sale5.png'),
            name: 'Shopee Thời Trang'
        
        },
        {
            id: '1',
            img: require('../assets/sale6.png'),
            name: 'Shopee Thời Trang'
        
        },
        {
            id: '1',
            img: require('../assets/sale7.png'),
            name: 'Shopee Thời Trang'
        
        },
        {
            id: '1',
            img: require('../assets/sale8.png'),
            name: 'Shopee Thời Trang'
        
        },
        {
            id: '1',
            img: require('../assets/sale9.png'),
            name: 'Shopee Thời Trang'
        
        },
        {
            id: '1',
            img: require('../assets/sale10.png'),
            name: 'Shopee Thời Trang'
        
        },
    ]

    return(
        <View style={styles.container}>
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                
                <View style={{flexDirection: 'row',  borderWidth: 1, borderColor: 'gray',}}>
                    <Image style={{width: 35, height: 35}} source={require('../assets/look.png')}></Image>
                   <TextInput  placeholder="Shopee Mall" style={{color: 'red', fontWeight: 'bold', fontSize:15}}></TextInput>
                   <Image style={{width: 35, height: 35}} source={require('../assets/camera.png')}></Image>
                </View>
                <View style={{ marginHorizontal: 20}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Cart')}}>
                        <Image style={{width: 35, height: 35}} source={require('../assets/giohang.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image style={{width: 35, height: 35}} source={require('../assets/messenger.png')}></Image>
                </View>
            </View>
            <View style={{flex: 0.01, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
            
            <PanGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={onHandlerStateChange}>
                <View style={{flexDirection: 'row'}}>
                    
                </View>
            </PanGestureHandler>
            
            
            <ScrollView horizontal={true} autoplay={true} autoplayInterval={3000} showsPagination={true} >
                <Image style={{width: 390, height: 140, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale20.png')}></Image>
                    <Image style={{width: 390, height: 140, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale21.png')}></Image>
                    <Image style={{width: 390, height: 140, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale22.png')}></Image>
                    <Image style={{width: 390, height: 140, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale23.png')}></Image>
                    <Image style={{width: 390, height: 140, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale24.png')}></Image>
                    <Image style={{width: 390, height: 140, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale26.png')}></Image>
                    <Image style={{width: 390, height: 140, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale27.png')}></Image>
                    <Image style={{width: 390, height: 140, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale28.png')}></Image>
                    <Image style={{width: 390, height: 140, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale29.png')}></Image>
                    <Image style={{width: 390, height: 140, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale25.png')}></Image>    
            </ScrollView>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginHorizontal: 5, marginVertical: 5}}>
                <View style={{flexDirection: 'row',}}>
                    <Image style={{width: 15, height: 15}} source={require('../assets/turnback.png')}></Image>
                    <Text style={{fontSize: 13}}>Miễn phí trả hàng</Text>
                </View>
              
                
                    <View style={{flexDirection: 'row',alignItems: 'center',}}>
                        <Image style={{width: 15, height: 15}} source={require('../assets/chinhhang.png')}></Image>
                        <Text style={{fontSize: 13}}>Chính hãng 100%</Text>
                        
                    </View>
                  
                   
             
              
                    <View style={{flexDirection: 'row'}}>
                        <Image style={{width: 15, height: 15}} source={require('../assets/freeship1.png')}></Image>
                        <Text style={{fontSize: 13}}> Giao miễn phí</Text>
                    </View>
                  
                   
                
            </View>
            <View style={{flex: 0.01, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
            {/* <ScrollView horizontal={true}>
                <FlatList data={data}  numColumns={2}   renderItem = {({item})=>{
                    return(
                        <View>
                            <Image source={item.img} style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}}></Image>
                        </View>
                    )
                }}>

                </FlatList>
            </ScrollView> */}


            <ScrollView>
                <ScrollView  horizontal={true} style={{paddingVertical: 10}} >
       
                    <Image style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale20.png')}></Image>
                    <Image style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale21.png')}></Image>
                    <Image style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale22.png')}></Image>
                    <Image style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale23.png')}></Image>
                    <Image style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale24.png')}></Image>
                    <Image style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale26.png')}></Image>
                    <Image style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale27.png')}></Image>
                    <Image style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale28.png')}></Image>
                    <Image style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale29.png')}></Image>
                    <Image style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale25.png')}></Image>    
                </ScrollView>
                <ScrollView  horizontal={true}   style={{paddingVertical: 10}}>
                    <Image style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/fashion.png')}></Image>
                    <Image style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale1.png')}></Image>
                    <Image style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale2.png')}></Image>
                    <Image style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale4.png')}></Image>
                    <Image style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale5.png')}></Image>
                    <Image style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale6.png')}></Image>
                    <Image style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale7.png')}></Image>
                    <Image style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale8.png')}></Image>
                    <Image style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale9.png')}></Image>
                    <Image style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale10.png')}></Image>    
                </ScrollView>
                <ScrollView  horizontal={true}   style={{paddingVertical: 10}}>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale11.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale12.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale13.png')}></Image>
                    
                </ScrollView>
                <ScrollView  horizontal={true}   style={{paddingVertical: 10}}>
                    <View style={{flex: 0.02, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                    <View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                            <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 150, flexDirection: 'row'}}>
                                <Text style={{fontSize: 20, fontWeight : 'bold'}}>Danh mục</Text>
                                
                                
                            </View>
                            
                            
                            <View style={{alignItems: 'center', justifyContent: 'center' , flexDirection: 'row'}}>
                                <Text style={{fontSize: 14, }}> Tìm hiểu ngay </Text>
                                <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                            
                            </View>
                            

                        </View>
                        
                    </View>
                   
                    
                    
                   
                    
                </ScrollView>
                <ScrollView  horizontal={true}   style={{paddingVertical: 10}}>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/thethao.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/oto.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/bachhoa.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/nhacua.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sacdep.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/maytinh.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/voucher.gif')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/camera1.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/thoitrang.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/tui.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/mevabe.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/pet.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/nhasach.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/thoitrangtreem.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/dienthoai.gif')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/phukien.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/dongho.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/thietbidientu.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/giaynam.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/dochoi.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/thoitrangnam.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/daydepnu.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/thietbidientu.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/giatgiu.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/suckhoe.png')}></Image>
                    
                </ScrollView>

            </ScrollView>
            
            
          
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingBottom: 35, paddingTop: 35, backgroundColor: '#C4C4C4'}}>
                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center'}} onPress={()=>{navigation.navigate('Home')}}>
                    <Image style={{width: 35, height: 35}} source={require('../assets/home.png')}></Image>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('Mall')}} style={{alignItems: 'center', justifyContent: 'center',backgroundColor: '#5c5c5c'}}>
                    <Image style={{width: 35, height: 35}} source={require('../assets/mall.png')}></Image>
                    <Text>Mall</Text>
                </TouchableOpacity>   
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 35, height: 35}} source={require('../assets/live.png')}></Image>
                    <Text>Live</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 35, height: 35}} source={require('../assets/video.png')}></Image>
                    <Text>Video</Text>
                </View>
                <TouchableOpacity onPress={()=>{navigation.navigate('Notify')}} style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 35, height: 35}} source={require('../assets/thongbao.png')}></Image>
                    <Text>Thông báo</Text>
                </TouchableOpacity>
              
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
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '100%'

    }
})

export default Mall;