import React,{useState} from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView,} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Lock from 'react-native-vector-icons/FontAwesome5';
import Login from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth'
import Snackbar from 'react-native-snackbar';





const SignIn = ({navigation}) => {
  const [email, setemail] = useState('');

  const handleTextChange = (email) => {
    setemail(email);
  };


  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordChange = (inputPassword) => {
    setPassword(inputPassword);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // const handleLogin = () => {
  //   // Your login logic here
  // };


  const handleLogin= ()=>{
    if(email=="" ){
      Snackbar.show({
        text: 'Plz Enter Password',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor:"#EB9802",
        textColor:"white"
      });
    }
    else if(password=="" ){
      Snackbar.show({
        text: 'Plz Enter Password',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor:"#EB9802",
        textColor:"white"
      });
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)==false){
      Snackbar.show({
        text: 'Plz Enter Password',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor:"#EB9802",
        textColor:"white"
      });

    }

 
auth()
.signInWithEmailAndPassword(email,password)
.then(() => {
console.log('User account signed in!');

Snackbar.show({
  text: 'User account signed in',
  duration: Snackbar.LENGTH_SHORT,
  backgroundColor:"#0D6807",
});


navigation.push("main")


})
.catch(error => {
if (error.code === 'auth/email-already-in-use') {
console.log('That email address is already in use!');

Snackbar.show({
  text: 'That email address is already in use!',
  duration: Snackbar.LENGTH_SHORT,
  backgroundColor:"#0D6807",
});
}

if (error.code === 'auth/invalid-email') {
console.log('That email address is invalid!');

Snackbar.show({
  text: 'That email address is invalid!',
  duration: Snackbar.LENGTH_SHORT,
  backgroundColor:"#0D6807",
});


}

console.error(error);
});

  }

  





  return (

    
    <SafeAreaView style={{flex: 1, justifyContent: 'center',backgroundColor:"#16930E" }}>
      <ScrollView>
      <View style={styles.topcontainer}>
        <View style={styles.topchild}>
        <Image
       source={require('../Assets/images/logo.png')}
        style={styles.image}
      />
        </View>
      </View>
<View style={styles.bottom}>

<View style={styles.bottomchild}>
{/* email field */}


<View style={styles.inputContainer}>

      <View style={styles.iconContainer}>
        <Icon name="envelope" size={17} color="#16930E" />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="gray"
        onChangeText={handleTextChange}
        value={email}
      />
    </View>


    {/* password field */}

    <View style={styles.inputContainer}>
    <View style={styles.iconContainer}>
        <Lock name="lock" size={17} color="#16930E" />
      </View>
   
<TextInput
  style={styles.input}
  secureTextEntry={!isPasswordVisible}
  placeholder="Enter your Password"
  placeholderTextColor="gray"
  onChangeText={handlePasswordChange}
  value={password}
/>

<TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer2}>
        <Icon style={{marginLeft:20}} name={isPasswordVisible ? 'eye-slash' : 'eye'} size={20} color="#16930E" />
      </TouchableOpacity>
</View>



{/* login button  */}


<TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
        <Login name="login" size={15} color="white" />
      </TouchableOpacity>
      <Text style={{fontSize:12,color:"white",textAlign:"center",marginTop:0}}>You Have Account ? <Text onPress={()=>navigation.push("Signup")} style={{color:"#0EE400"}}> Signup</Text></Text>
{/* login with google and facebook */}




    </View>
</View>
</ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  topcontainer:{
    flex:3,
    backgroundColor:"white",
    borderBottomRightRadius: 150, // Set your desired bottom right border radius value
    height:300

   
   
}
,
bottom:{
    flex:6,
    backgroundColor:"#16930E"
},
topchild:{
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
marginTop:40  
},
bottomchild:{
paddingHorizontal:20,
paddingVertical:30

},
image: {
  width: 390,
  height: 280,
  objectFit:"contain"
},
  topchildtext:{
    fontSize:20,
    color:"#65a30d",
    fontWeight:"800"
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    margin: 10,
    padding: 1,
    alignItems:"center",
    backgroundColor:"white"
    
  },
  iconContainer: {
    marginHorizontal:10
  },
  iconContainer2: {
    marginLeft: -10,
  },
  input: {
    color:"black",

    height: 30,
    margin: 10,
    padding: 2,
    width: 200,
   
  },
  loginButton: {
    backgroundColor: '#0D6807',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center",
    gap:10,
    padding: 15,
    margin: 10,
    borderRadius: 10,
    marginTop: 10,
    
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign:"center",

  },
  iconimage:{
    width: 600,
    height: 40,
    borderRadius: 30,
    objectFit:"contain"
  }
})