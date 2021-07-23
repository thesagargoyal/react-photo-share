import React, {useState} from 'react'
import { View, Text, Image, StyleSheet,TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native'
import {TextInput, Button} from 'react-native-paper';
// import auth from '../config'
import firebase from "firebase";


export default function LoginScreen({navigation}) {
    // const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const userSignup = ()=>{

        if(!email || !password)Alert.alert("Please enter required fields!");

        else{
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result)=>{
                console.log('SignIn');
            })
            .catch((error)=>{
                Alert.alert("Something went wrong!");
            })
        }
    }

    return (
        <KeyboardAvoidingView style={styles.main}>
            <View style={styles.box1}>
                <Image style={{width:200,height:200}} source={require('../assets/cnqlogo.png')}/>
                <Text style={styles.text}>Please Sign Up to continue</Text>
            </View>
            <View style={styles.box2}>
            {/* <TextInput mode="outlined" label="Name" value={name} onChangeText={text => setName(text)}/> */}
                <TextInput mode="outlined" label="Email" value={email} onChangeText={text => setEmail(text)}/>
                <TextInput mode="outlined" label="Password" value={password} onChangeText={text => setPassword(text)} secureTextEntry={true}/>
                <Button  mode="contained" onPress={() => userSignup()}> Sign Up </Button>
                <TouchableOpacity onPress={()=>navigation.goBack("login")}><Text style={{textAlign: "center"}}>Already have a account ? Log In !</Text></TouchableOpacity>
            </View>
            
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    main:{
        display:"flex",
        justifyContent:"center"
    },
    box1:{
        alignItems:"center",
    },
    box2:{
        paddingHorizontal:40,
        height:'50%',
        justifyContent:"space-evenly"
    },
    text:{
        fontSize:22,
    }
})
