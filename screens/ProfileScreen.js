import React, { Component } from 'react';
import { View, Text,StyleSheet, Button,Image,TouchableOpacity } from 'react-native';
import Fire from '../Fire'


export default class ProfileScreen extends Component {

  state={
    user:{}
  }
   unsubscribe=null

   componentDidMount(){
      const user=this.props.uid || Fire.shared.uid
      console.log(user);


      
      this.unsubscribe=Fire.shared.firestore.collection('users').doc(user).onSnapshot(doc=>{
        this.setState({user:doc.data()})
      })


   }

   componentWillUnmount(){
     this.unsubscribe()
   }


    
  


  render() {

    console.log(this.state.user.followers);
    console.log(this.state.user.avatar);
    return (
      <View style={styles.container}>
       <View style={{marginTop:63,alignItems:'center'}}>
         <View style={styles.avatarContainer}>
           <Image style={styles.avatar}
           source={this.state.user.avatar?{uri:this.state.user.avatar}:null}/>

         </View>
    <Text style={styles.name}>{this.state.user.name}</Text>
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statAmount}>{this.state.user.posts}</Text>
          <Text style={styles.statTitle}>Posts</Text>
        </View>


      </View>
       </View>
       <TouchableOpacity style={styles.button} onPress={()=>Fire.shared.signOut()}>
         <Text style={{color:'#FFF',fontWeight:'500'}}>Log out</Text>
      </TouchableOpacity>     
       </View>
    );
  }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#bdbdbd',
        paddingTop:50
      },
      avatarContainer:{
        shadowColor:'#151734',
        shadowRadius:15,
        shadowOpacity:0.4
      },
      avatar:{
        width:150,
        height:150,
        borderRadius:80,
        borderColor:'#4a4a4a',
        borderWidth:3
      },
      name:{
        marginTop:24,
        fontSize:16,
        fontWeight:'700'
      },
      statsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:32
      },
      stat:{
        alignItems:'center',
        flex:1
      },
      statAmount:{
        color:'#4F566D',
        fontSize:18,
        fontWeight:'300'
      },
      statTitle:{
        color:'#4F566D',
        fontSize:12,
        fontWeight:'500',
        marginTop:4

      },
      button:{
        marginHorizontal:30,
        backgroundColor:"#4a4a4a",
        borderRadius:4,
        height:52,
        alignItems:'center',
        justifyContent:'center'
  
    }
})
