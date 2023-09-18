import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TextInput, Text, View, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';



export default function Signup() {

    const [number, setNumber] = useState('');

    const handleNumberChange = (newNumber) => {
      setNumber(newNumber);
    };

    return(
        <View style={styles.signup}>
      <StatusBar style="auto" />
      <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.signupText}>Sign up</Text>
      </View>

    <View style={{height:"70%"}}>

      <View style={styles.input}>
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput
        style={styles.inputField}
        placeholder="123@gmail.com"
        onChangeText={handleNumberChange}
        value={number}
      />
      </View> 


      <View style={styles.input}>
        <Text style={styles.inputTitle}>Number</Text>
        <TextInput
        style={styles.inputField}
        placeholder="12345678912"
        onChangeText={handleNumberChange}
        value={number}
      />
      </View> 

      <View style={styles.input}>
        <Text style={styles.inputTitle}>Otp</Text>
        <TextInput
        style={styles.inputField}
        placeholder="12345678912"
        onChangeText={handleNumberChange}
        value={number}
      />
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

    </View>

      <View style={{justifyContent:"center",alignItems:"center", height:"10%"}}>
      <TouchableOpacity style={styles.Button} >
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
      </View>

      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    signup: {
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
        paddingHorizontal:20
      },
      title:{
        height:"10%",
      },
      welcome:{
        fontSize:24,
        fontWeight:"600",
        marginVertical:10
      },
      signupText:{
        fontSize:20,
        fontWeight:"600",
        color:"#0053BF"
      },
      input:{
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
    