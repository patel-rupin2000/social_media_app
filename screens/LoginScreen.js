import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,StatusBar,LayoutAnimation, ImageBackground } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase/app';
import 'firebase/auth';

export default class LoginScreen extends Component {

    static navigationOptions={
        headerShown:false,

    }

    state={
        email:'',
        password:'',
        errorMessage:null
    }

    handleLogin=()=>{
        const {email,password}=this.state
        firebase.auth().signInWithEmailAndPassword(email,password).catch(
            error=>this.setState({errorMessage:error.message})
        )
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                            

  render() {
      LayoutAnimation.easeInEaseOut()
    return (
      <View style={styles.container}>
          <StatusBar barStyle="light-content"></StatusBar>
          <ImageBackground
          source={require('../assets/login.jpg')}
          style={{flex: 1,
            width: null,
            height: null,
            justifyContent:'center'}}>

         
        <Text style={styles.greeting}> {`Hello`} </Text>
        <View style={styles.errorMessage}>
    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
      </View>
      <View style={styles.form}>
        <View>
            <Text style={styles.inputTitle}>Email or Phone Number</Text>
            <TextInput style={styles.input} autoCapitalize="none"
            onChangeText={email=>this.setState({email})}
            value={this.state.email}></TextInput>
        </View>
        <View style={{marginTop:32}}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput style={styles.input} autoCapitalize="none" secureTextEntry
            value={this.state.password}
            onChangeText={password=>this.setState({password})}></TextInput>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={{color:'#FFF',fontWeight:'500'}}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignSelf:'center',marginTop:32}}
      onPress={()=>this.props.navigation.navigate('Register')}>
        
        <Text style={{color:'#FFF',fontSize:20}}>
            New User ? <Text style={{fontWeight:'500',color:'#8A89FE'}}>
                Sign up
            </Text>
        </Text>

      </TouchableOpacity>
      </ImageBackground>
      </View>
      
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
   
  },
  greeting:{
      marginTop:24,
      fontSize:50,
      fontWeight:'bold',
      textAlign:'center',
      color:'white'
  },
  errorMessage:{
      height:72,
      alignItems:'center',
      justifyContent:'center',
      marginHorizontal:30
  },
  form:{
    marginBottom:48,
    marginHorizontal:30
  },
  inputTitle:{
      color:'white',
      fontSize:20,
      textTransform:'uppercase',
      fontWeight:'bold'
  },
  input:{
      borderBottomColor:'white',
      borderBottomWidth:StyleSheet.hairlineWidth,
      height:40,
      fontSize:30,
      color:"#FFF"
  },
  button:{
      marginHorizontal:30,
      backgroundColor:"#E9446A",
      borderRadius:4,
      height:52,
      alignItems:'center',
      justifyContent:'center'

  },
  error:{
      color:'#E9446A',
      fontSize:13,
      fontWeight:'600',
      textAlign:'center'

  }

})
