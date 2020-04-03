import React, { Component } from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,TextInput,ToastAndroid,AsyncStorage,Dimensions,ActivityIndicator, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';
import {myFetch} from "./index"
const {width,height}=Dimensions.get("window");
export default class Signin extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            phone:'',
            isLoading:false
        }
    }
    phonehandel=(text)=>{
        console.log(text)
        this.setState({
            phone:text
        })
    }
    userhandel=(text)=>{
        console.log(text)
        this.setState({
            username:text
        })
    }
    pwdhandel=(text)=>{
        console.log(text)
        this.setState({
            pwd:text
        })
    }
    signin=()=>{
        
        myFetch.post('/signin',{
            username:this.state.username,
            pwd:this.state.pwd,
            phone:this.state.phone
        }).then(res=>{
                if(res.data.status==='0'){
                    ToastAndroid.show("该用户已被注册！",100);
                }
                else{
                    this.setState({isloading:true});
                    AsyncStorage.setItem("signin",JSON.stringify(res.data))
                    .then(()=>{
                        this.setState({isLoading:false})
                        Actions.login()
                    })       
                }
            
                
        })
    }
    render() {
        return (
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <View style={{
                    justifyContent:'center',
                    flexWrap:'wrap',
                    alignItems:"center"
                }}>
                    <View style={[{flexDirection:'row'},styles.input]}>
                        <Icon name="phone" color="red"/>
                        <TextInput 
                            placeholder="手机号"
                            onChangeText={this.phonehandel}
                            style={{paddingBottom:0,paddingTop:0}}
                        />
                    </View>
                    <View style={[{flexDirection:'row'},styles.input]}>
                        <Icon name="user" color="red"/>
                        <TextInput 
                            placeholder="用户名"
                            onChangeText={this.userhandel}
                            style={{paddingBottom:0,paddingTop:0}}
                        />
                    </View>
                    <View style={[{flexDirection:'row'},styles.input]}>
                        <Icon name="eye" color="red"/>
                        <TextInput 
                            placeholder="密码"
                            onChangeText={this.pwdhandel}
                            secureTextEntry={true}
                            style={{paddingBottom:0,paddingTop:0}}

                        />
                    </View>
                    
                </View>
                <TouchableOpacity onPress={this.signin} style={styles.btn}>
                    <Text style={{color:"#fff"}}>注册</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Actions.login()} style={styles.btn}>
                    <Text style={{color:"#fff"}}>返回登录</Text>
                </TouchableOpacity>
                {
                    this.state.isloading
                    ?<View style={styles.innerBox}>
                        <ActivityIndicator size="large" color="red"/>
                        <Text>注册成功！</Text>
                    </View>
                    
                    :null
                }
                
            </View>
        )
    }
}

const styles=StyleSheet.create({
    box:{
        width:'40%',
        height:100,
        backgroundColor:'blue',
        margin:5
    },
    btn:{
        borderColor:"#f23030",
        width:250,
        height:34,
        borderWidth:1,
        backgroundColor:"#f23030",
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:10,
        borderRadius:25
    },
    input:{
        borderColor:"silver",
        width:320,
        height:34,
        borderBottomWidth:1,
        alignItems:"center",
        margin:10
    },
    innerBox:{
        width:width,
        height:height,
        backgroundColor:'silver',
        justifyContent:"center",
        alignItems:"center",
        opacity:0.5,
        position:"absolute",
    }
});
