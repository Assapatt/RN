import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'

export default class MyPub extends Component {
    constructor() {
        super();
        this.state = {
            pageNum: 1,// 页码  
        }
    }

    componentDidMount() {
        fetch("https://cnodejs.org/api/v1/topics?limit=10&page=" + this.state.pageNum)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                this.setState({
                    data: res.data
                });
            })
    }


    render() {
        return (
            <View>
                <FlatList
                    style={{ marginTop: 10 }}
                    data={this.state.data}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) =>
                        <View style={styles.listitem}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text>{item.create_at.substr(0, 10)}</Text>
                            {(item.reply_count > 0) ? (<Text style={{ marginLeft: 20 }}>已回复</Text>) :
                                <Text style={{ color: 'red',marginLeft: 20 }}>未回复</Text>
                            }
                        </View>
                    }
                />
                <View style={styles.foot}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            if (this.state.pageNum == 1) {
                                ToastAndroid.show('到头了', 1000)
                            } else {
                                this.setState({
                                    pageNum: this.state.pageNum - 1,
                                })
                                fetch("https://cnodejs.org/api/v1/topics?limit=10&page=" + this.state.pageNum)
                                    .then((res) => res.json())
                                    .then((res) => {
                                        console.log(res);
                                        this.setState({
                                            data: res.data
                                        });
                                    })
                            }
                        }}
                    >
                        <Text style={{ fontSize: 18, color: '#ffffff' }}>上一页</Text>
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 80, marginRight: 80 }}>第{this.state.pageNum}页</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.setState({
                                pageNum: this.state.pageNum + 1,
                            })
                            fetch("https://cnodejs.org/api/v1/topics?limit=10&page=" + this.state.pageNum)
                                .then((res) => res.json())
                                .then((res) => {
                                    console.log(res);
                                    this.setState({
                                        data: res.data
                                    });
                                })
                        }}
                    >
                        <Text style={{ fontSize: 18, color: '#ffffff' }}>下一页</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listitem: {
        height: 60,
        borderBottomWidth: 0.5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: "center",
        flexDirection: 'row'
    },
    title: {
        width: "50%",
        fontSize: 18,
        overflow: 'hidden',
        height: 26,
        marginLeft: 20,
        marginRight: 60
    },
    foot: {
        height: 100,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center'

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f23030',
        width: 120,
        height: 40,
        borderRadius: 20
    }
})