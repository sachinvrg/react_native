import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  SafeAreaView
} from 'react-native'


export class Login extends Component {
  

  constructor(){
    super()
   this.state= 
   Password='',
   Username='',
   UsernameError='',
   PasswordError=''
  }

  onPress=()=>{  
    console.log(this.state.Password)
    console.log(this.state.Username)

      if(this.state.Password==undefined || this.state.Password==' '){
        this.setState({PasswordError:"Password is required"})
      }else{
        this.setState({PasswordError:''})
      }
      
      if(this.state.Username==undefined || this.state.Username==' '){
        this.setState({UsernameError:"Username is required"}) 
      }else{
        this.setState({UsernameError:''})
      }
      if(this.state.Username!= undefined|| this.state.Password!=undefined)
      {
      alert("Login Successful")
      }
  }
/*
  user=()=>{
    if(this.state.Username==''){
      this.setState({UsernameError:"Username is required"})
    }else{
      this.setState({usernameError:''})
    }
  }

  pass=()=>{
    if(this.state.Password==''){
      this.setState({PasswordError:"Password is Required"})
    }
    else{
      this.setState({PasswordError:''})
    }
  }

*/
 render() {
    return (

      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.login}>LogIn</Text>
          <Text style={styles.input}>Username:</Text>
          <TextInput 
          placeholder="Enter Username" 
          maxLength={30}
          style={styles.place}
          onChangeText={(text)=>{this.setState({Username:text})}}
          ></TextInput>
          <Text>{this.state.UsernameError}</Text>
          


          <Text style={styles.input}>Password:</Text>
            <TextInput 
            placeholder="Enter Password" 
            secureTextEntry
            maxLength={15}
            style={styles.place} 
            onChangeText={(text)=>{this.setState({Password:text})}}
          ></TextInput>
          <Text>{this.state.PasswordError}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={this.onPress}
            >
            <Text>LogIn</Text>
          </TouchableOpacity>
        
        </View>
      </SafeAreaView>
     
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:2,
    marginTop:'50%'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin:'1%'
  },
  input: {
   
    width:'100%',
    alignItems:'center',
    fontWeight:'bold',
    textAlign:'center',
  },
  login:{
    padding:5,
    width:'100%',
    borderBottomWidth:2,
    textAlign:'center',
    fontWeight:'bold'
    },
    place:{
      borderBottomWidth:2,
      width:'100%',
    }
})