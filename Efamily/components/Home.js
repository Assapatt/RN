import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TextInput, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window')
export default class Home extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#f5f5f5'}}>
                <View style={styles.header}>
                    <View style={styles.search}>
                        <View style={{ marginTop: 0 }}>
                            <Image
                                source={require('../img/home_search.png')}
                                style={{ width: 30, height: 30, marginTop: 5 }}
                            />
                        </View>
                        <View style={{ width: 360 }}>
                            <TextInput placeholder='请输入你要搜索的关键字' placeholderTextColor='#999999' />
                        </View>
                    </View>
                    <View>
                        <Image
                            source={require('../img/buycar.png')}
                            style={{ width: 30, height: 30, marginTop: 13, marginLeft: 10 }}
                        />
                    </View>
                </View>
                <View style={{height: width*0.43,width:width}}>
                    <Swiper style={styles.wrapper} showsButtons={true} loop={true} autoplay = {true}>
                        <View style={styles.slide1}>
                            <Image 
                                source={require('../img/banner1.png')}
                                style={{width:width,height:width*0.43}}
                            />
                        </View>
                        <View style={styles.slide2}>
                            <Image 
                                source={require('../img/banner2.png')}
                                style={{width:width,height:width*0.43}}
                            />
                        </View>
                    </Swiper>
                </View>
                <View>
                    <View style={styles.service}>
                        <Image 
                            source={require('../img/weixiu.png')}
                            style={{width:80,height:80,marginLeft:20}}
                        />
                        <Text style={{fontSize:18,marginLeft:40,width:120}}>居家维修保养</Text>
                        <Image 
                            source={require('../img/right.png')}
                            style={{marginLeft:180}}
                        />
                    </View>
                    <View style={styles.service}>
                        <Image 
                            source={require('../img/youhui.png')}
                            style={{width:80,height:80,marginLeft:20}}
                        />
                        <Text style={{fontSize:18,marginLeft:40,width:120}}>住宿优惠</Text>
                        <Image 
                            source={require('../img/right.png')}
                            style={{marginLeft:180}}
                        />
                    </View>
                    <View style={styles.service}>
                        <Image 
                            source={require('../img/jiesong.png')}
                            style={{width:80,height:80,marginLeft:20}}
                        />
                        <Text style={{fontSize:18,marginLeft:40,width:120}}>出行接送</Text>
                        <Image 
                            source={require('../img/right.png')}
                            style={{marginLeft:180}}
                        />
                    </View>
                    <View style={styles.service}>
                        <Image 
                            source={require('../img/huodong.png')}
                            style={{width:80,height:80,marginLeft:20}}
                        />
                        <Text style={{fontSize:18,marginLeft:40,width:120}}>E族活动</Text>
                        <Image 
                            source={require('../img/right.png')}
                            style={{marginLeft:180}}
                        />
                    </View>
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Text style={{fontSize:18,color:'#ffffff'}}> 发布需求 </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center',marginTop:25}}>
                        <Text>©E族之家 版权所有</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f23030',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    search: {
        backgroundColor: '#fbb8b8',
        marginTop: 10,
        height: 40,
        flexDirection: 'row',
        borderRadius: 20,
        paddingLeft: 30
    },
    wrapper: {
        width: width
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    service:{
        width:width,
        height:width*0.1875,
        backgroundColor:'#ffffff',
        marginTop:8,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    button:{
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#f23030',
        padding: 10,
        marginTop:20,
        width:width*0.85,
        height:width*0.11,
        borderRadius:10
    }
});
