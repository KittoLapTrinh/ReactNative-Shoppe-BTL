import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FlatList, TextInput } from 'react-native-web';
import { PanGestureHandler, State,  } from 'react-native-gesture-handler';
import React, { useState, useEffect,useRef  } from 'react';
import {Ionicons} from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'; 


function Mall({navigation }){
    const [data2, setData] = useState([])
    const [filteredData, setFilteredData] = useState([]); // Filtered data based on search
    const [searchText, setSearchText] = useState('')
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

    const data =[
        {
            id: '1',
            img: require('../assets/sale20.png'),
            
        
        },
        {
            id: '1',
            img: require('../assets/sale21.png'),
           
        
        },
        {
            id: '1',
            img: require('../assets/sale22.png'),
          
        
        },
        {
            id: '1',
            img: require('../assets/sale23.png'),
          
        },
        {
            id: '1',
            img: require('../assets/sale24.png'),
          
        
        },
        {
            id: '1',
            img: require('../assets/sale26.png'),
            
        
        },
        {
            id: '1',
            img: require('../assets/sale27.png'),
           
        
        },
        {
            id: '1',
            img: require('../assets/sale28.png'),
            
        
        },
        {
            id: '1',
            img: require('../assets/sale29.png'),
           
        
        },
        {
            id: '1',
            img: require('../assets/sale25.png'),
            
        
        },
    ]


    const danhmuc= [
        {
            id: '1', 
            img : require('../assets/thethao.png'),
            name: 'Thể thao & du lịch'
        },
        {
            id: '2', 
            img : require('../assets/oto.png'),
            name: 'Ô tô - xe máy - xe đạp'
        },
        {
            id: '3', 
            img : require('../assets/bachhoa.png'),
            name: 'Bách hóa Online'
        },
        {
            id: '4', 
            img : require('../assets/nhacua.png'),
            name: 'Nhà cửa & Đời Sống'
        },
        {
            id: '5', 
            img : require('../assets/sacdep.png'),
            name: 'Sắp đẹp'
        },
        {
            id: '6', 
            img : require('../assets/maytinh.png'),
            name: 'Máy tính & Laptop'
        },
        {
            id: '7', 
            img : require('../assets/voucher.gif'),
            name: 'Voucher & Dịch vụ'
        },
        {
            id: '8', 
            img : require('../assets/camera1.png'),
            name: 'Máy ảnh - Máy quay phim'
        },
        {
            id: '9', 
            img : require('../assets/thoitrang.png'),
            name: 'Thời Trang Nữ'
        },
        {
            id: '10', 
            img : require('../assets/tui.png'),
            name: 'Túi Ví Nữ'
        },
        {
            id: '11', 
            img : require('../assets/mevabe.png'),
            name: 'Mẹ & Bé'
        },
        {
            id: '12', 
            img : require('../assets/pet.png'),
            name: 'Thú cưng'
        },
        {
            id: '13', 
            img : require('../assets/nhasach.png'),
            name: 'Nhà Sách Online'
        },
        {
            id: '14', 
            img : require('../assets/thoitrangtreem.png'),
            name: 'Thời Trang Trẻ Em'
        },
        {
            id: '15', 
            img : require('../assets/dienthoai.gif'),
            name: 'Điện Thoại & Phụ Kiện'
        },
        {
            id: '16', 
            img : require('../assets/phukien.png'),
            name: 'Phụ Kiện & Trang Sức Nữ'
        },
        {
            id: '17', 
            img : require('../assets/dongho.png'),
            name: 'Đồng Hồ'
        },
        {
            id: '18', 
            img : require('../assets/computer.png'),
            name: 'Thiết Bị Điện Tử'
        },
        {
            id: '19', 
            img : require('../assets/giaynam.png'),
            name: 'Giày Dép nam'
        },
        {
            id: '20', 
            img : require('../assets/dochoi.png'),
            name: 'Đồ Chơi'
        },
        {
            id: '21', 
            img : require('../assets/thoitrangnam.png'),
            name: 'Thời Trang Nam'
        },
        {
            id: '22', 
            img : require('../assets/daydepnu.png'),
            name: 'Giày Dép Nữ'
        },
        {
            id: '23', 
            img : require('../assets/thietbidientu.png'),
            name: 'Thiết Bị Điện Gia Dụng'
        },
        {
            id: '24', 
            img : require('../assets/giatgiu.png'),
            name: 'Giặt giũ & Chăm sóc'
        },
        {
            id: '25', 
            img : require('../assets/suckhoe.png'),
            name: 'Sức Khỏe'
        },

]
    const data1 =[
        {
            id: '1',
            img: require('../assets/premium.png'),
            name: 'SHOPEE PREMIUM'      
        },
        {
            id: '2',
            img: require('../assets/book.gif'),
            name: 'SHOPEE BOOK CLUB'      
        },
        {
            id: '3',
            img: require('../assets/membership.png'),
            name: 'BRAND MEMBERSHIP'      
        },
        {
            id: '4',
            img: require('../assets/quocte.png'),
            name: 'THƯƠNG HIỆU QUỐC TẾ'      
        },
        {
            id: '5',
            img: require('../assets/COUNTER.png'),
            name: 'SAMPLING COUNTER'      
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
                   <TextInput  placeholder="Shopee Mall" style={{color: 'red', fontWeight: 'bold', fontSize:15}} value={searchText} onChangeText={handleSearch}></TextInput>
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
            
           
            
            
            <ScrollView  >
                   
                <FlatList  ref={flatListRef} 
                    horizontal data={data}  
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                    <Image source={item.img} style={{width: 390, height: 250}} />
                    )}
                    pagingEnabled>
                </FlatList>
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
            {/* <View style={{flex: 0.01, backgroundColor: '#C4C4C4', marginTop: 10}}></View> */}
            <ScrollView horizontal={true}>
                <FlatList data={data1}  numColumns={5}   renderItem = {({item})=>{
                    return(
                        <View style={{alignItems: 'center', paddingTop: 10,  }}>
                            <View>
                                <Image source={item.img} style={{width: 40, height: 40, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}}></Image>
                            </View>
                            <View style={{alignItems: 'center',paddingLeft: 20}}>
                                <Text style={{width: 58, height: 50, fontSize: 11}}>{item.name}</Text>
                            </View>
                         
                        </View>
                    )
                }}>

                </FlatList>
                

            </ScrollView>
            
            <View style={{alignItems: 'center'}}>
                <Image source={require('../assets/trainghiem.png')} style={{width: 380, height: 130, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}}></Image>
            </View>
            <View style={{flex: 0.01, backgroundColor: '#C4C4C4', marginTop: 10, paddingTop: 1}}></View>

            <ScrollView>
               
                <ScrollView  horizontal={true}   style={{paddingVertical: 10}}>
                    <View style={{flex: 0.02, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                   
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                            <View style={{alignItems: 'center', justifyContent: 'center' , marginRight: 150, flexDirection: 'row'}}>
                                <Text style={{fontSize: 20, fontWeight : 'bold'}}>Danh mục</Text>
                            </View>
                            <View style={{alignItems: 'center', justifyContent: 'center' , flexDirection: 'row'}}>
                                <Text style={{fontSize: 14, }}> Tìm hiểu ngay </Text>
                                <Image style={{width: 25, height: 25}} source={require('../assets/next.png')}></Image>
                            </View>
                            

                        </View>
                        
                        
                   
                    
                    
                   
                    
                </ScrollView>
                <ScrollView horizontal={true}  >
                    <FlatList  data={danhmuc}  keyExtractor={item => item.id.toString()} numColumns={25} renderItem = {({item})=>{
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
                <View style={{flex: 0.01, backgroundColor: '#C4C4C4', marginTop: 10, paddingTop: 1}}></View>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../assets/deal.png')} style={{width: 380, height: 180, borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}}></Image>
                </View>
                <View style={{flex: 0.01, backgroundColor: '#C4C4C4', marginTop: 10, paddingTop: 1}}></View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: 10}}>
                        <Text style={{fontSize: 14,color: 'red', fontWeight : 'bold'}}>THƯƠNG HIỆU NỔI BẬT TRONG NGÀY</Text>
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
                {/* <ScrollView  style={{flexDirection: 'row',}}  >
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
                </ScrollView> */}
                    {/* <ScrollView  style={{flexDirection: 'row',}}  >
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
                        </ScrollView> */}
                        
                {/* <ScrollView  horizontal={true}   style={{paddingVertical: 10}}>
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
                    
                </ScrollView> */}

                </ScrollView>
                
            </ScrollView>
            
            
            
          
            <View style={{height: 30, flexDirection: 'row', alignItems: 'center', paddingBottom: 35, paddingTop: 35, backgroundColor: 'white'}}>
                  <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} onPress={()=>{navigation.navigate('Home')}}>
                  <Ionicons name='home-outline' size={30} color='#bfbfbf'></Ionicons>
                  <Text style = {{color: '#bfbfbf',  fontSize: 13}}>Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{navigation.navigate('Mall')}} style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
                    <Feather name='shopping-bag' size={30} color='orange'></Feather>
                    <Text style = {{color: 'orange',  fontSize: 13}}>Mall</Text>
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

export default Mall;