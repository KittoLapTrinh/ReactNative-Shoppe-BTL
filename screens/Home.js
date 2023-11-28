import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FlatList, TextInput } from 'react-native-web';
import { PanGestureHandler, State} from 'react-native-gesture-handler';
import Countdown from 'react-native-countdown-component';
import React, { useState, useEffect,useRef  } from 'react';
import {Ionicons} from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'; 


function Home({navigation }){
    const [data2, setData] = useState([])
    const [filteredData, setFilteredData] = useState([]); // Filtered data based on search
    useEffect(() => {
        fetch('https://6554786b63cafc694fe68232.mockapi.io/user/product')
          .then((response) => response.json())
          .then((json) => {
            setData(json);
            setFilteredData(json); // Set filtered data initially with all fetched data
          })
          .catch((error) => console.error('Error fetching data:', error));
      }, []);
      const handleSearch = (text) => {
        setSearchText(text); // Update the search text state
        const filtered = data2.filter((item) =>
          item.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredData(filtered); // Update the filtered data based on the search text
      };
    // useEffect(()=>{
    //     fetch('https://6554786b63cafc694fe68232.mockapi.io/user/product')
    //         .then((response) => response.json())
    //         .then((json) =>setData(json))
    // })
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


    const [currentPage, setCurrentPage] = useState(0);
    const flatListRef = useRef(null);



    const scrollInterval = 1000; // Mili giây (1 giây = 1000 mili giây)

    useEffect(() => {
    const scrollTimer = setInterval(() => {
    if (currentPage < data.length - 1) {
        setCurrentPage(currentPage + 1);
    } else {
        setCurrentPage(0); // Trở lại ảnh đầu tiên nếu đã đến ảnh cuối cùng
    }
    flatListRef.current.scrollToIndex({
        index: currentPage,
        animated: true,
    });
    }, scrollInterval);
        return () => {
    clearInterval(scrollTimer); // Dừng interval khi component unmount
    };
    }, [currentPage]);

    const [time, setTime] = useState(3600);
    useEffect(() => {
        const interval = setInterval(() => {
        if (time > 0) {
            setTime(time - 1);
        } else {
            clearInterval(interval);
        }
    }, 1000);
    
        return () => clearInterval(interval);
    }, [time]);



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

    const [searchText, setSearchText] = useState('')
    // const filteredData = goiY.filter(item => item.name.includes(searchText))

    const data =[
        {
            id: '1',
            img: require('../assets/sale1.png'),
           
        
        },
        {
            id: '2',
            img: require('../assets/sale2.png'),
           
        
        },
        {
            id: '3',
            img: require('../assets/sale3.png'),
           
        
        },
        {
            id: '1',
            img: require('../assets/sale4.png'),
           
        
        },
        {
            id: '1',
            img: require('../assets/sale5.png'),
           
        
        },
        {
            id: '1',
            img: require('../assets/sale6.png'),
         
        
        },
        {
            id: '1',
            img: require('../assets/sale7.png'),
          
        
        },
        {
            id: '1',
            img: require('../assets/sale8.png'),
           
        
        },
        {
            id: '1',
            img: require('../assets/sale9.png'),
           
        
        },
        {
            id: '1',
            img: require('../assets/sale10.png'),
           
        
        },
    ]
    const data1 =[
        {
            id: '1',
            img: require('../assets/thoitrang.png'),
            name: 'Shopee Thời Trang'
        
        },
        {
            id: '2',
            img: require('../assets/lamdep.png'),
            name: 'Shopee Làm Đẹp'
        
        },
        {
            id: '3',
            img: require('../assets/food.png'),
            name: 'ShopeeFood - 1Đ + FreeShip'
        
        },
        {
            id: '4',
            img: require('../assets/livevideo.png'),
            name: 'Khung Giờ Săn Sale'
        
        },
        {
            id: '5',
            img: require('../assets/freeship1.png'),
            name: 'Miễn Phí Ship - Có Shopee'
        
        },
        {
            id: '6',
            img: require('../assets/voucher1.png'),
            name: 'Voucher Giảm Đến 500.000Đ'
        
        },
        {
            id: '7',
            img: require('../assets/khachhangthanthiet.png'),
            name: 'Khách Hàng Thân Thiết'
        
        },
        {
            id: '8',
            img: require('../assets/re.png'),
            name: 'Gì Cũng Rẻ - Deal Sốc 9.000Đ'
        
        },
        {
            id: '9',
            img: require('../assets/magiamgia.png'),
            name: 'Mã Giảm Giá'
        
        },
        {
            id: '10',
            img: require('../assets/sanxu.png'),
            name: 'Săn Xu Mỗi Ngày'
        
        },
        {
            id: '11',
            img: require('../assets/mall1.png'),
            name: 'Shopee Mall'
        
        },
        {
            id: '12',
            img: require('../assets/tragop.png'),
            name: 'Trả Góp 0% Với SPayLatter'
        
        },
        {
            id: '13',
            img: require('../assets/giam500.png'),
            name: 'Hàng Hiệu Outlet Giảm 50%'
        
        },
        {
            id: '14',
            img: require('../assets/ganban.png'),
            name: 'ShopeePay Gần Bạn'
        
        },
        {
            id: '15',
            img: require('../assets/napthe.png'),
            name: 'Nạp Thẻ, Dịch Vụ & Data'
        
        },
        {
            id: '16',
            img: require('../assets/computer.png'),
            name: 'TechZone - Siêu Thị Điện Tử'
        
        },
        {
            id: '17',
            img: require('../assets/gift.png'),
            name: 'Săn Thưởng - 100.000 Xu'
        
        },
        {
            id: '18',
            img: require('../assets/mart.png'),
            name: 'Shopee Mart'
        
        },
        {
            id: '19',
            img: require('../assets/nhanngayxu.png'),
            name: 'Nhận Ngay 11.000 Xu'
        
        },
        {
            id: '20',
            img: require('../assets/premium.png'),
            name: 'Shopee Premium'
        
        },
        {
            id: '21',
            img: require('../assets/doitac.png'),
            name:'Ưu Đãi Đối Tác'
        
        },
        {
            id: '22',
            img: require('../assets/quocte.png'),
            name: 'Hàng Quốc Tế'
        
        },
        {
            id: '23',
            img: require('../assets/giasoc.png'),
            name : 'Bắt Trend - Giá Sốc'
        
        },
        {
            id: '24',
            img: require('../assets/club.png'),
            name : 'Book Club Giảm Đến 50%'
            
        },
    ]

    const flashData = [
        {
            id: '1',
            img: require('../assets/suatam.png'),
            price: '287.000đ',
            fire: require('../assets/lua.png'),
            sold: 'ĐÃ BÁN 231',
        },
        {
            id: '2',
            img: require('../assets/nuochoa.png'),
            price: '565.000đ',
            fire: require('../assets/lua.png'),
            sold: 'ĐÃ BÁN 155',
        },
        {
            id: '3',
            img: require('../assets/daugoi.png'),
            price: '199.000đ', 
            sold: 'ĐANG BÁN CHẠY',
        },

    ]
    // const goiY = [
    //     {
    //         id: '1',
    //         img: require('../assets/sach.png'),
    //         name: 'Sách - Đắc Nhân Tâm (Khổ Lớn - Tái bản 2024)',
    //         price: '99.000đ',
    //         sold: 'Đã bán 52,1k',
    //     },
    //     {
    //         id: '2',
    //         img: require('../assets/aonam.png'),
    //         name: 'Áo sơ mi trắng nam AKUBA tay dài đi học, đi làm form slimfit',
    //         price: '125.000đ', 
    //         sold: 'Đã bán 50.8k',
    //     },
    //     {
    //         id: '3',
    //         img: require('../assets/dothethao.png'),
    //         name: 'Quần áo bóng đá đội tuyển achentina mẫu mới nhất',
    //         price: '135.000đ', 
    //         sold: 'Đã bán 90.7k',
    //     },
    //     {
    //         id: '4',
    //         img: require('../assets/denled.png'),
    //         name: 'Đèn led dây, đèn led trang trí dây đồng mini',
    //         price: '65.000đ', 
    //         sold: 'Đã bán 115.3k',
    //     },    
    //     {
    //         id: '5',
    //         img: require('../assets/nuochoanu.png'),
    //         name: 'Narciso rodriguez - Nước hoa nữ chính hãng nhẹ nhàng ',
    //         price: '1.009.000đ', 
    //         sold: 'Đã bán 27.9k',
    //     }, 
    //     {
    //         id: '6',
    //         img: require('../assets/oplung.png'),
    //         name: 'Ốp lưng iphone Rainbow X/XS/11/12/13/14',
    //         price: '105.000đ', 
    //         sold: 'Đã bán 35.1k',
    //     },   
    //     {
    //         id: '7',
    //         img: require('../assets/giaytaynam.png'),
    //         name: 'Giày tây nam trẻ trung vân da hàng hiệu Tâm Anh',
    //         price: '1.275.000đ', 
    //         sold: 'Đã bán 16.5k',
    //     },
    //     {
    //         id: '8',
    //         img: require('../assets/suahop.png'),
    //         name: 'Sữa Similac IQ HMO Gold Lable số 3 400g',
    //         price: '602.000đ', 
    //         sold: 'Đã bán 56.4k',
    //     }, 
    //     {
    //         id: '9',
    //         img: require('../assets/mubaohiem.png'),
    //         name: 'Mũ bảo hiểm 3/4 KYT VENOM OPEN FACE SOLID',
    //         price: '345.000đ', 
    //         sold: 'Đã bán 76.2k',
    //     },  
    //     {
    //         id: '10',
    //         img: require('../assets/aovest.png'),
    //         name: 'Áo vest nam đen 2 lớp đẹp, cao cấp',
    //         price: '515.000đ', 
    //         sold: 'Đã bán 101.8k',
    //     }, 
    //     {
    //         id: '11',
    //         img: require('../assets/giaythethao.png'),
    //         name: 'Giày thể thao Adidas khắc tên Messi',
    //         price: '999.000đ', 
    //         sold: 'Đã bán 259.8k',
    //     },
    //     {
    //         id: '12',
    //         img: require('../assets/aoblazernu.png'),
    //         name: 'Áo Blazer nữ leopard-pint by Blaz',
    //         price: '619.000đ', 
    //         sold: 'Đã bán 161.1k',
    //     },  
    //     {
    //         id: '13',
    //         img: require('../assets/lythuytinh.png'),
    //         name: 'Bộ 6 ly thủy tinh LUMINARC 320ml Xanh Dương',
    //         price: '139.000đ', 
    //         sold: 'Đã bán 139.6k',
    //     },
    //     {
    //         id: '14',
    //         img: require('../assets/quat.png'),
    //         name: 'Quạt bàn lỡ Senko ống nhựa L1638',
    //         price: '619.000đ', 
    //         sold: 'Đã bán 161.1k',
    //     },  
    //     {
    //         id: '15',
    //         img: require('../assets/suatam1.png'),
    //         name: 'Sữa tắm Happy Bath Natural Body Wash Hang Quốc 900gr',
    //         price: '267.000đ',
    //         sold: 'Đã bán 69.2k',
    //     },
    //     {
    //         id: '16',
    //         img: require('../assets/nuochoa1.png'),
    //         name: 'Nước hoa Dior thơm lâu nam tính',
    //         price: '458.000đ', 
    //         sold: 'Đã bán 251.0k',
    //     },  
    //     {
    //         id: '17',
    //         img: require('../assets/daychuyen1.png'),
    //         name: 'Dây chuyền nữ xinh đẹp cao cấp tinh xảo HPSEO',
    //         price: '425.000đ',
    //         sold: 'Đã bán 619.2k',
    //     },
    //     {
    //         id: '18',
    //         img: require('../assets/dongu.png'),
    //         name: 'Đồ ngủ bộ áo hai dây quần dài DB199',
    //         price: '366.000đ', 
    //         sold: 'Đã bán 159.0k',
    //     },
    //     {
    //         id: '19',
    //         img: require('../assets/daugoi1.png'),
    //         name: 'Dầu gội dược liệu Nguyên Xuân Xanh 200ml',
    //         price: '360.000đ',
    //         sold: 'Đã bán 66.8k',
    //     },
    //     {
    //         id: '20',
    //         img: require('../assets/vidanam.png'),
    //         name: 'Ví da nam cá sấu dành cho nam cao cấp',
    //         price: '125.000đ', 
    //         sold: 'Đã bán 97.6k',
    //     },  
    // ]

 

    return(
        <View style={styles.container}>
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                
                <View style={{flexDirection: 'row',  borderWidth: 1, borderColor: 'gray',}}>
                    <Image style={{width: 35, height: 35}} source={require('../assets/look.png')}></Image>
                   <TextInput   placeholder="Áo thun nam" style={{color: '#C4C4C4', fontSize:15}} value={searchText} onChangeText={handleSearch}></TextInput>
                    
                   <Image style={{width: 35, height: 35}} source={require('../assets/camera.png')}></Image>
                </View>
                <View style={{ marginHorizontal: 20}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Cart')}}>
                        <Image style={{width: 40, height: 40}} source={require('../assets/giohang.png')}></Image>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>{navigation.navigate('Chat')}}>
                    <Image style={{width: 35, height: 35}} source={require('../assets/messenger.png')}></Image>
                </TouchableOpacity>
            </View>
            <View style={{flex: 0.01, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
            
            {/* <PanGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={onHandlerStateChange}>
                <View style={{flexDirection: 'row'}}>
                  
                </View>
            </PanGestureHandler> */}
            
            
            
            


            <ScrollView>
                <FlatList  ref={flatListRef} 
                horizontal data={data}  
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Image source={item.img} style={{width: 390, height: 190}} />
                    )}
                    pagingEnabled
                >

                </FlatList>
               
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderBlockColor: '#C4C4C4', borderWidth: 1, borderRadius: 5, marginHorizontal: 5}}>
                    <View>
                        <Image style={{width: 35, height: 35}} source={require('../assets/scan.png')}></Image>
                    </View>
                
                    <TouchableOpacity onPress={goShopeePay} style={{}}>
                        <View style={{flexDirection: 'row'}}>
                            <Image style={{width: 20, height: 20}} source={require('../assets/vishoppepay.jpg')}></Image>
                            <Text>Voucher giảm đến 40.000đ</Text>
                            
                        </View>
                        <View>
                            <Text>Ví ShopeePay</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('ShopeeXu')}}>
                        <View style={{flexDirection: 'row'}}>
                            <Image style={{width: 35, height: 35}} source={require('../assets/shoppexu.jpg')}></Image>
                            <Text>100</Text>
                        </View>
                    
                        <Text>Shopee Xu của tôi</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={{flex: 0.02, backgroundColor: '#C4C4C4', marginTop: 10, paddingVertical: 1}}></View>
                <ScrollView horizontal={true}  >
                    <FlatList  data={data1}  keyExtractor={item => item.id.toString()} numColumns={12} renderItem = {({item})=>{
                        return(
                            <View style={{}}>
                                <View style={{ paddingHorizontal: 5, paddingVertical: 5}}>
                                    <Image  source={item.img} style={{width: 70, height: 70, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1,}}></Image>
                                </View>
                                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{fontSize: 10, width: 70, height: 55, fontWeight: 'bold'}}>{item.name}</Text>
                                </View>
                               
                            </View>

                        )
                    }}>

                    </FlatList>
                </ScrollView>
                
                
                <ScrollView  horizontal={true}   style={{paddingVertical: 10}}>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale11.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale12.png')}></Image>
                    <Image style={{width: 130, height: 80, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}} source={require('../assets/sale13.png')}></Image>
                    
                </ScrollView>
                <View style={{flex: 0.02, backgroundColor: '#C4C4C4', marginTop: 10, paddingVertical: 1}}></View>
                <View>
                    <View style={{flex: 0.02, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
                            <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 30, flexDirection: 'row'}}>
                                <Text style={{fontSize: 20, fontWeight : 'bold'}}>FLASH SALE</Text>
                                <Countdown
                                    until={time}
                                    size={20}
                                    onFinish={() => alert('Hết thời gian')}
                                    digitStyle={{ backgroundColor: '#FFF' }}
                                    digitTxtStyle={{ color: '#1CC625' }}
                                    timeToShow={['M', 'S']}
                                    timeLabels={{ m: null, s: null }}
                                />
                            </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , flexDirection: 'row'}}>
                            <Text style={{fontSize: 14, }}> Xem tất cả </Text>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>         
                        </View>
                       
                        
                       

                    </View>
                    <ScrollView horizontal={true} style={{flexDirection: 'row',}}  >
                            <FlatList  data={flashData}  keyExtractor={item => item.id.toString()} numColumns={3} renderItem = {({item})=>{
                                return(
                                    <View style={{}}>
                                        <View style={{ paddingHorizontal: 10 }}>
                                            <Image  source={item.img} style={{width: 110, height: 110, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1,}}></Image>
                                        </View>
                                        <View style={{alignItems: 'center', marginBottom: 5}}>
                                            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'red', width: 70, height: 33}}>{item.price}</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', paddingLeft: 15, }}>
                                            <View style={{}}>
                                                <Image  source={item.fire} style={{width: 15, height: 15, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1,}}></Image>
                                            </View>
                                            <View style={{ alignItems: 'center', backgroundColor: '#ed6909', justifyContent: 'center', borderRadius: 10}}>
                                                <Text style={{fontSize: 13, color: '#FFFFFF'}}>{item.sold}</Text>
                                            </View>
                                        </View>
                                        
                                        
                                    
                                    </View>

                                )
                            }}>

                            </FlatList>
                        </ScrollView>
                    
                </View>
                
                <View style={{flex: 0.02, backgroundColor: '#C4C4C4', marginTop: 10, paddingVertical: 1,}}></View>
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 90, flexDirection: 'row', paddingBottom: 10}}>
                            <Text style={{fontSize: 20,color: 'red', fontWeight : 'bold'}}>GỢI Ý HÔM NAY</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center' , flexDirection: 'row'}}>
                            <Text style={{fontSize: 14, }}> Xem tất cả </Text>
                            <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                        </View>
                    </View>
                    <FlatList
                        data={filteredData}
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()} // Ensure each item has a unique key
                        renderItem={({ item }) => (
                            <View style={{ flex: 1, flexDirection: 'column', margin: 5, width: '50%' }}>
                            <TouchableOpacity style={{ paddingHorizontal: 20 }}>
                                <Image
                                source={{ uri: item.img }}
                                style={{
                                    width: '100%',
                                    aspectRatio: 1, // To maintain aspect ratio
                                    borderColor: '#C4C4C4',
                                    borderWidth: 1,
                                }}
                                resizeMode="cover"
                                />
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 14, width: '100%', height: 60, fontWeight: 'bold' }}>
                                {item.name}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View>
                                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 18 }}>{item.price}</Text>
                                </View>
                                <View>
                                <Text style={{ fontSize: 12 }}>{item.sold}</Text>
                                </View>
                            </View>
                            </View>
                        )}
                        />

                    {/* <ScrollView   numColumns={2} style={{flexDirection: 'row'}}> */}
                            {/* <FlatList  data={goiY}  keyExtractor={item => item.id.toString()} numColumns={2} renderItem = {({item})=>{
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

                            </FlatList> */}
                        {/* </ScrollView> */}
                </View>
                

            </ScrollView>
            
            
          
            <View style={{height: 30, flexDirection: 'row', alignItems: 'center', paddingBottom: 35, paddingTop: 35, backgroundColor: 'white'}}>
                  <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} onPress={()=>{navigation.navigate('Home')}}>
                  <Ionicons name='home' size={30} color='orange'></Ionicons>
                  <Text style = {{color: 'orange',  fontSize: 13}}>Home</Text>
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
                      <Ionicons name='person-outline' size={30} color='#bfbfbf'></Ionicons>
                  <Text style = {{color: '#bfbfbf',  fontSize: 13}}>Tôi</Text>
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

export default Home;