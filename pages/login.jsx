import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TextInput, Text, View, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import Signup from './signup';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();


function LoginScreen() {

  const navigation = useNavigation();
  
  const handleSignupNavigation= () => {
    navigation.navigate('Signup'); 
  };

  const [number, setNumber] = useState('');

  const handleNumberChange = (newNumber) => {
    setNumber(newNumber);
  };

  return (
    <View style={styles.Login}>
      <StatusBar style="auto" />
      <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.welcome}>welcome !</Text>
        <Text style={styles.loginText}>Log in</Text>
      </View>

      <View style={styles.input}>
        <Text style={styles.inputTitle}>Enter Number</Text>
        <TextInput
        style={styles.inputField}
        placeholder="1234567890"
        onChangeText={handleNumberChange}
        value={number}
      />
      </View> 
      <View style={{justifyContent:"center",alignItems:"center", height:"50%"}}>
      <TouchableOpacity style={styles.Button} >
        <Text style={styles.text}>Get Otp</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignupNavigation} style={[styles.Button,{ backgroundColor:"white",borderColor:"#7D7D7D",borderWidth:0.5 }]} >
        <Text style={[styles.text ,{ color:"black" }]}>Don't have an account?</Text>
      </TouchableOpacity>

       <TouchableOpacity>
        <Text style={{fontSize:12,fontWeight:"300"}}>Click to Register</Text>
      </TouchableOpacity>
      </View>

      </View>
    </View>
  );
}


export default function Login() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false,animationEnabled: false}}
            />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false,animationEnabled: false, }}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  Login: {
    flex: 1,
    width:'100%',
    height:'100%',
    backgroundColor: '#0053BF',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container:{
    width:'100%',
    height:'80%',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding:20
  },
  title:{
    height:"20%",
  },
  welcome:{
    fontSize:24,
    fontWeight:"600",
    marginVertical:10
  },
  loginText:{
    fontSize:20,
    fontWeight:"600",
    color:"#0053BF"
  },
  input:{
    height:"30%",
    justifyContent: 'center',
  },
  inputTitle:{
    fontSize:16,
    fontWeight:"500"
  },
  inputField:{
    width:"100%",
    backgroundColor:"#F5F4F8",
    height: 60,
    borderColor: '#0053BF',
    borderWidth: 3,
    borderRadius:10,
    paddingHorizontal:15,
    marginVertical:10
  },
  Button:{
    width:"100%",
    backgroundColor:'#0053BF',
    height: 50,
    borderRadius:30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:10
  },
  text:{
    fontSize:16,
    fontWeight:"600",
    color:"#FFFFFF"
  },

});
