import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text, TextInput, Image, FlatList, Dimensions } from 'react-native';


const { width } = Dimensions.get('window')

export default class ComList extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <View>
                <View style={styles.header}>
                    <View style={styles.search}>
                        <View style={{ width: 350 }}>
                            <TextInput placeholder='请输入商品名称' placeholderTextColor='#999999' />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Image
                                source={require('../img/search.png')}
                                style={{ width: 22, height: 22 }}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.select}>
                    <View><Text>综合</Text></View>
                    <View><Text>销量</Text></View>
                    <View><Text>新品</Text></View>
                    <View><Text>价格</Text></View>
                    <View><Text>信用</Text></View>
                </View>
                <ScrollView>
                    <FlatList
                        // ListHeaderComponent={<Text>头部</Text>}
                        // ListFooterComponent={<Text>尾部</Text>}
                        numColumns={2}
                        data={[1, 2, 3, 4, 5, 6]}
                        renderItem={
                            ({ item }) =>
                                <View style={styles.slide}>
                                    <View style={{ marginTop: 50, alignItems: 'center' }}>
                                        <Image
                                            source={require('../img/oishi.png')}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.font}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                        <Text style={styles.price}>36.00</Text>
                                    </View>
                                </View>
                        }
                        style={{ paddingBottom: 200, backgroundColor: '#eeeeee' }}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        height: 71,
        borderBottomColor: '#eeeeee',
        borderBottomWidth: 1
    },
    search: {
        backgroundColor: '#eeeeee',
        marginTop: 11,
        marginLeft: 44,
        marginRight: 44,
        height: 50,
        flexDirection: 'row'
    },
    select: {
        backgroundColor: 'white',
        height: 72,
        borderBottomColor: '#eeeeee',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center'
    },
    slide: {
        width: width * 0.45,
        height: 360,
        marginLeft: width * 0.033333,
        marginTop: 10,
        backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    font: {
        fontSize: 14,
        color: '#747474',
        marginTop: 30,
        marginLeft: 10
    },
    price: {
        color: '#f23030',
        marginTop: 10,
        marginLeft: 10
    }
});
