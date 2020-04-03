import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper';


export default class SwiperPage extends Component {
    start = () => {
        console.log(1);
        AsyncStorage.setItem('isInstall', 'true', () => {
            this.props.afterInstall()
        });

    }
    render() {

        return (

            <Swiper
                style={styles.wrapper}
                showsButtons={false}
                dotStyle={styles.dot}
                activeDotStyle={styles.dota}
                loop={false}
            >
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require("../img/slide1.jpg")} />
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require("../img/slide2.jpg")} />

                </View>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require("../img/slide3.jpg")} />
                    <TouchableOpacity onPress={this.start} style={styles.start}>
                        <Text style={{ color: "#fff" }}>开始体验</Text>
                    </TouchableOpacity>

                </View>

            </Swiper>


        )
    }
}

const styles = StyleSheet.create({
    wrapper: {

    },
    slide1: {
        height: '100%',
        alignItems: "center",
    },
    start: {
        bottom: 120,
        width: 120,
        height: 40,
        backgroundColor: "#f23030",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        width: '100%',
        height: "100%",
    },
    dota: {
        backgroundColor: "#f23030"
    },
    dot: {
        backgroundColor: "white"
    }
})