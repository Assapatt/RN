/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  StatusBar,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  Dimensions,
  BackHandler,
  ToastAndroid,
  AsyncStorage
} from 'react-native';
import { Router, Scene, Tabs, Actions} from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen'
import Icon from 'react-native-vector-icons/FontAwesome';

import ComList from './components/ComList';
import Home from './components/Home';
import Person from './components/Person';
import MyPub from './components/MyPub';
import SwiperPage from './components/SwiperPage'
import Login from './components/Login'
import Signin from './components/Signin'


const { width } = Dimensions.get('window')
const TabIcon = ({ focused, title }) => {
  return (
    <View>
      <Image
        source={require('./img/pc.png')}
      />
    </View>

  );
};

const App = () => {

  let now=0;
    let [isLogin,setLogin]=useState(false);
    let [isInstall,setInstall]=useState(true);
    let [isSignin,setSignin]=useState(true)
    let init=()=>{
        AsyncStorage.getItem('isInstall')
            .then(res=>{
                if(res){
                    setInstall(false)
                }
            })
        AsyncStorage.getItem('user')
            .then(res=>{
                let user =JSON.parse(res)
                if(!user){
                    SplashScreen.hide();
                } else {
                    setLogin(true);
                    setSignin(true);
                    SplashScreen.hide();
                    Actions.home();
                }
                SplashScreen.hide();
                // console.log(user)
            })
        AsyncStorage.getItem('signin')
            .then(res=>{
                let user =JSON.parse(res)
                
                // console.log(user)
            })
    }
    
    useEffect(() => {
        init();
        BackHandler.addEventListener('hardwareBackPress', ()=>{
            if(Actions.currentScene==='_home'){
                console.log(Actions.currentScene);
                if(new Date().getTime()-now<2000){
                    BackHandler.exitApp();
                }
                else{
                    ToastAndroid.show("再次点击返回键退出程序",100);
                    now =new Date().getTime();
                    return true;
                }
                
            }
            else if(Actions.currentScene==='login'){
                console.log(Actions.currentScene);
                if(new Date().getTime()-now<2000){
                    BackHandler.exitApp();
                }
                else{
                    ToastAndroid.show("再次点击返回键退出程序",100);
                    now =new Date().getTime();
                    return true;
                }
            }
            else{
                console.log(Actions.currentScene);
                Actions.pop();
                return true;
            }
        });
      });
    let afterInstall =()=>{
        console.log("after install")
        setInstall(false)
    }
    if(isInstall){
        return <View style={{flex:1}}>
            <SwiperPage afterInstall={afterInstall}/>
        </View>
    }

  return (
    <>
      <Router >
        <Scene key='root'>
          <Tabs
            key="tabbar"
            // 是否显示标签栏文字
            showLabel={true}
            tabBarStyle={{ backgroundColor: "#ffffff" }}
            hideNavBar
          >
            <Scene
              hideNavBar
              key="home"
              icon={TabIcon}
              component={Home}
              title="首页"
            />
            <Scene
              hideNavBar
              key="fenlei"
              icon={TabIcon}
              component={Person}
              title="商品分类"
            />
            <Scene
              hideNavBar
              key="buycar"
              icon={TabIcon}
              component={Home}
              title="购物车"
            />

            <Scene
              hideNavBar
              key="person"
              component={Person}
              title="个人中心"
              icon={TabIcon}
            />
          </Tabs>
          <Scene
            key='mypub'
            title='我的发布'
            component={MyPub}
            titleStyle={{ flex: 1, textAlign: 'center' }}
            renderRightButton={<View></View>}
          />
          <Scene key="login" title='用户登录' titleStyle={{ flex: 1, textAlign: 'center' }} initial={!isLogin} component={Login}/>
          <Scene key="signin" title='用户注册' initial={!isSignin} component={Signin} titleStyle={{ flex: 1, textAlign: 'center' }}
            renderRightButton={<View></View>}/>
        </Scene>
      </Router>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
