import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { Actions } from "react-native-router-flux";
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';

const { width, height } = Dimensions.get('window');
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'image',
    },
};
export default class Person extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: require('../img/avatar.png')
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('image')
            .then((res) => {
                const imgsrc = { uri: res };
                if (res == null) {
                    this.setState({
                        imgUrl: require('../img/avatar.png')
                    })
                }
                else {
                    this.setState({
                        imgUrl: imgsrc,
                    });
                }
            });
    }

    storeData = async (img) => {
        await AsyncStorage.setItem('image', img,
            () => { console.log('store success') }
        )
    }
    getData = () => {
        AsyncStorage.getItem('image')
            .then((res) => console.log(res));
    }

    takephoto = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else if (response.customButton) {
                console.log('custom:', response.customButton);
            } else {
                const source = { uri: response.uri };

                this.setState({
                    imgUrl: source,
                });
                this.storeData(source.uri)
                this.getData()
            }
        });
    }


    render() {
        return (
            <View style={{ height: height, width: width, backgroundColor: '#' }}>
                <ScrollView style={{ flex: 1, backgroundColorL: '#eeeeee' }}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() => { this.takephoto() }}
                        >
                            <Image
                                source={this.state.imageUrl}
                                style={{ width: width * 0.234, height: width * 0.234, marginTop: 40 }}
                            />
                        </TouchableOpacity>

                        <Text style={{ fontSize: 20, color: '#ffffff', marginTop: 15 }}>BINNU DHILLON</Text>
                    </View>
                    <View style={styles.person}>
                        <View style={styles.title}>
                            <Image
                                source={require('../img/person.png')}
                                style={{ marginLeft: 15, marginRight: 15 }}
                            />
                            <Text style={{ fontSize: 18, color: '#4f4e4e' }}>我的个人中心</Text>
                        </View>
                        <View style={styles.percenter}>
                            <View style={styles.center_detail}>
                                <Image
                                    source={require('../img/setting.png')}
                                    style={{ marginTop: 20, marginBottom: 10 }}
                                />
                                <Text style={{ fontSize: 18, color: '#4f4e4e' }}>账户管理</Text>
                            </View>
                            <View style={styles.center_detail}>
                                <Image
                                    source={require('../img/setting.png')}
                                    style={{ marginTop: 20, marginBottom: 10 }}
                                />
                                <Text style={{ fontSize: 18, color: '#4f4e4e' }}>收货地址</Text>
                            </View>
                            <View style={styles.center_detail}>
                                <Image
                                    source={require('../img/setting.png')}
                                    style={{ marginTop: 20, marginBottom: 10 }}
                                />
                                <Text style={{ fontSize: 18, color: '#4f4e4e' }}>我的信息</Text>
                            </View>
                            <View style={styles.center_detail}>
                                <Image
                                    source={require('../img/setting.png')}
                                    style={{ marginTop: 20, marginBottom: 10 }}
                                />
                                <Text style={{ fontSize: 18, color: '#4f4e4e' }}>我的订单</Text>
                            </View>
                            <View style={styles.center_detail}>
                                <Image
                                    source={require('../img/setting.png')}
                                    style={{ marginTop: 20, marginBottom: 10 }}
                                />
                                <Text style={{ fontSize: 18, color: '#4f4e4e' }}>我的二维码</Text>
                            </View>
                            <View style={styles.center_detail}>
                                <Image
                                    source={require('../img/setting.png')}
                                    style={{ marginTop: 20, marginBottom: 10 }}
                                />
                                <Text style={{ fontSize: 18, color: '#4f4e4e' }}>我的积分</Text>
                            </View>
                            <View style={styles.center_detail}>
                                <Image
                                    source={require('../img/setting.png')}
                                    style={{ marginTop: 20, marginBottom: 10 }}
                                />
                                <Text style={{ fontSize: 18, color: '#4f4e4e' }}>我的收藏</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.eact}>
                        <View style={styles.title}>
                            <Image
                                source={require('../img/person.png')}
                                style={{ marginLeft: 15, marginRight: 15 }}
                            />
                            <Text style={{ fontSize: 18, color: '#4f4e4e' }}>E族活动</Text>
                        </View>
                        <View style={styles.percenter}>
                            <View style={styles.center_detail}>
                                <Image
                                    source={require('../img/setting.png')}
                                    style={{ marginTop: 20, marginBottom: 10 }}
                                />
                                <Text style={{ fontSize: 18, color: '#4f4e4e' }}>居家维修保养</Text>
                            </View>
                            <View style={styles.center_detail}>
                                <Image
                                    source={require('../img/setting.png')}
                                    style={{ marginTop: 20, marginBottom: 10 }}
                                />
                                <Text style={{ fontSize: 18, color: '#4f4e4e' }}>出行接送</Text>
                            </View>
                            <View style={styles.center_detail}>
                                <Image
                                    source={require('../img/setting.png')}
                                    style={{ marginTop: 20, marginBottom: 10 }}
                                />
                                <Text style={{ fontSize: 18, color: '#4f4e4e' }}>我的受赠人</Text>
                            </View>
                            <View style={styles.center_detail}>
                                <Image
                                    source={require('../img/setting.png')}
                                    style={{ marginTop: 20, marginBottom: 10 }}
                                />
                                <Text style={{ fontSize: 18, color: '#4f4e4e' }}>我的住宿优惠</Text>
                            </View>
                            <View style={styles.center_detail}>
                                <Image
                                    source={require('../img/setting.png')}
                                    style={{ marginTop: 20, marginBottom: 10 }}
                                />
                                <Text style={{ fontSize: 18, color: '#4f4e4e' }}>我的活动</Text>
                            </View>
                            <TouchableOpacity style={styles.center_detail} onPress={() => Actions.mypub()}>
                                <Image
                                    source={require('../img/setting.png')}
                                    style={{ marginTop: 20, marginBottom: 10 }}
                                />
                                <Text style={{ fontSize: 18, color: '#4f4e4e' }}>我的发布</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <Text style={{ marginTop: 20, fontSize: 18, color: '#808080' }}>BINNU DHILLON  |  退出</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: width,
        height: width * 0.5,
        backgroundColor: '#f23030',
        alignItems: 'center'
    },
    person: {
        width: width,
        height: width * 0.723,
        backgroundColor: '#ffffff'
    },
    title: {
        width: width,
        height: width * 0.12,
        borderBottomColor: '#eeeeee',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    percenter: {
        width: width,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 15
    },
    center_detail: {
        width: width * 1 / 3,
        height: width * 0.18,
        justifyContent: 'center',
        alignItems: 'center'
    },
    eact: {
        width: width,
        height: width * 0.6,
        backgroundColor: '#ffffff',
        marginTop: 20,
    },
    bottom: {
        width: width,
        height: width * 0.15625,
        backgroundColor: '#eeeeee',
        paddingBottom: 150,
        alignItems: 'center',
    },
    avatar: {
        width: width * 0.234,
        height: width * 0.234,
        marginTop: 40,
        // backgroundColor:'green',
        borderRadius: width * 0.234,
        borderColor: '#fff',
        borderWidth: 2
    }
})
