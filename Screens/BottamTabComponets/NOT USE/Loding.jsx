import { ScrollView, StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Lock from 'react-native-vector-icons/FontAwesome5';
import { Checkbox } from 'react-native-paper';


const Loding = () => {

    const [text, setText] = useState('');

    const handleTextChange = (inputText) => {
      setText(inputText);
    };

    const [checked, setChecked] = React.useState(true);

    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
    const handlePasswordChange = (inputPassword) => {
      setPassword(inputPassword);
    };
  
    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };
  
    const handleLogin = () => {
      // Your login logic here
      navigation.push("main")
    };


    const handlePress = () => {
        // Handle button press here
        console.log('Button pressed!');
      };

  return (
    <View style={styles.container}>
 <ScrollView>
{/* image view */}
 <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/7a49/c120/2eb63c3cdadb41d09766cdf8d33b2d9d?Expires=1704067200&Signature=FoBzYA~DCx~eEw8qdCg-9KtkjtykoPDIzDWq3o1iS8UA-xFTVnBReLYCH1yT12-f~GUysobSLyVmzlUQwhrglbs4XhC9bmKYaLrQY2XVNc9KW578Hadn6s-0JcCwmDCQ6GGvvedf3XL9JUCEjpbh5LJDZ7AyNJMa8GeQE2Ris0kOnjYx3LO6AGh804xSHjrSG6l5dQAdw0Kzir3A-kcWx0oMMx1zgPLH57Ukzmzals9sShzNnh5kx8j09PR94cWmMWTb3WtXt0qBFqDNFr~Phs357maxHYHtjJIGPdHtuqddtudSEHNeBEpnuiFQIWiknVSo2~3-f4ocXU3e29o8jQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          }}
          style={styles.image}
        />
      </View>

{/* heading */}

<View style={{marginHorizontal:10 ,marginVertical:10}}>
    <Text style={{color:"white",fontSize:20}} >Login</Text>
</View>



{/* email textinput view */}


      <View style={styles.inputContainer}>

<View style={styles.iconContainer}>
  <Icon name="envelope" size={17} color="white" />
</View>
<TextInput
  style={styles.input}
  placeholder="abc@mail.com"
  placeholderTextColor="gray"
  onChangeText={handleTextChange}
  value={text}
/>
</View>

{/* password textinput view */}

<View style={styles.inputContainer}>
    <View style={styles.iconContainer}>
        <Lock name="lock" size={17} color="#6B6B6B" />
      </View>
   
<TextInput
  style={styles.input}
  secureTextEntry={!isPasswordVisible}
  placeholder="Enter your  Password"
  placeholderTextColor="gray"
  onChangeText={handlePasswordChange}
  value={password}
/>

<TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer2}>
        <Icon name={isPasswordVisible ? 'eye-slash' : 'eye'} size={20} color="white" />
      </TouchableOpacity>
</View>


{/* remamber and forget password */}

<View style={styles.forget}>

<View style={{flexDirection:"row",alignItems:"center" }}>
<Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
      color='white'
      uncheckedColor="white"
      style={{marginLeft:-2}}
/>
      <Text style={{color:"white",fontSize:12}}>Remember Me</Text>
</View>

<Text style={{color:"white",fontSize:12}}>Forgotten Password?</Text>

</View>



{/* login button */}

<View style={styles.buttoncontainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
        activeOpacity={0.7} // Set the opacity when the button is pressed
      >
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
    </View>

{/* orr */}

<View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",marginVertical:10}}>
<View style={styles.separator}></View>
<Text style={{color:"#FFFFFF",fontSize:15,marginHorizontal:5,marginBottom:2}}>or</Text>
<View style={styles.separator}></View>

</View>

{/* google view */}


<View style={styles.googlecontainer}>
      <TouchableOpacity
        style={styles.googleButton}
        onPress={handlePress}
        activeOpacity={0.7} // Set the opacity when the button is pressed
      >
<Image
  source={{ uri: 'https://s3-alpha-sig.figma.com/img/f881/84c6/8dee88f348660b174d22c163e0848498?Expires=1704067200&Signature=TN4wMdUNt9akykaCGtO7Nq9p5DYMmTluvGaX0a1Q9-ba7T8RWVG3zUJlz75eqkMDusd~bRq6YEe9l2gcbim2eREknLRExgPyWvzNz7rMn3wKAErWzYvDZvrtqlVWTP0QQqloXrRJ2Nkcb4mELMTwqYjYkfdBtsnw7NwcocR-QtPq79y9YLR62Kb8lpfta3ASie-kcuFlNt5sB~jMv2Grbg8s0fJ6OvAvdLFDMiuNu5fU7~po8Q5ztuyibOdZPGP2vSpLdMJ6IrCtJx57sEeHLfjBfPjJ1bHe93n5Sej6Hth-pvGDBMCXA1WFimcaLMjJuWgQ24X2yDJ8zl-LirB-hQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }}
  style={styles.otherAuthImage}
/>

        <Text style={styles.otherAuthbuttonText}>Continue with Google account</Text>
      </TouchableOpacity>
    </View>

{/* facebook view */}

<View style={styles.facebookcontainer}>
      <TouchableOpacity
        style={styles.facebookButton}
        onPress={handlePress}
        activeOpacity={0.7} // Set the opacity when the button is pressed
      >
<Image
  source={{ uri: 'https://s3-alpha-sig.figma.com/img/f881/84c6/8dee88f348660b174d22c163e0848498?Expires=1704067200&Signature=TN4wMdUNt9akykaCGtO7Nq9p5DYMmTluvGaX0a1Q9-ba7T8RWVG3zUJlz75eqkMDusd~bRq6YEe9l2gcbim2eREknLRExgPyWvzNz7rMn3wKAErWzYvDZvrtqlVWTP0QQqloXrRJ2Nkcb4mELMTwqYjYkfdBtsnw7NwcocR-QtPq79y9YLR62Kb8lpfta3ASie-kcuFlNt5sB~jMv2Grbg8s0fJ6OvAvdLFDMiuNu5fU7~po8Q5ztuyibOdZPGP2vSpLdMJ6IrCtJx57sEeHLfjBfPjJ1bHe93n5Sej6Hth-pvGDBMCXA1WFimcaLMjJuWgQ24X2yDJ8zl-LirB-hQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }}
  style={styles.otherAuthImage}
/>

        <Text style={styles.otherAuthbuttonText2}>Continue with Facebook account</Text>
      </TouchableOpacity>
    </View>


    {/* apple view */}

    <View style={styles.applecontainer}>
      <TouchableOpacity
        style={styles.appleButton}
        onPress={handlePress}
        activeOpacity={0.7} // Set the opacity when the button is pressed
      >
<Image
  source={{ uri: 'https://s3-alpha-sig.figma.com/img/f881/84c6/8dee88f348660b174d22c163e0848498?Expires=1704067200&Signature=TN4wMdUNt9akykaCGtO7Nq9p5DYMmTluvGaX0a1Q9-ba7T8RWVG3zUJlz75eqkMDusd~bRq6YEe9l2gcbim2eREknLRExgPyWvzNz7rMn3wKAErWzYvDZvrtqlVWTP0QQqloXrRJ2Nkcb4mELMTwqYjYkfdBtsnw7NwcocR-QtPq79y9YLR62Kb8lpfta3ASie-kcuFlNt5sB~jMv2Grbg8s0fJ6OvAvdLFDMiuNu5fU7~po8Q5ztuyibOdZPGP2vSpLdMJ6IrCtJx57sEeHLfjBfPjJ1bHe93n5Sej6Hth-pvGDBMCXA1WFimcaLMjJuWgQ24X2yDJ8zl-LirB-hQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }}
  style={styles.otherAuthImage}
/>

        <Text style={styles.otherAuthbuttonText2}>Continue with Apple ID</Text>
      </TouchableOpacity>
    </View>


{/* sign View */}



<View style={{flexDirection:"row",justifyContent:"center",marginVertical:10}}>
    <Text style={{color:"white",fontSize:10,textAlign:"center"}}>Don't have an account? </Text>
    <Text style={{color:"#FF5700",fontSize:10,textAlign:"center"}}> SIGN UP!</Text>


</View>


 </ScrollView>
    </View>
  )
}

export default Loding

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black',
      },
      imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,

      },
      image: {
        width: 190,
        height: 150,
        objectFit: 'scale-down',
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
        backgroundColor:"#101010"
       
        
      },
      iconContainer: {
        marginHorizontal:10,
      },
      input: {
        color:"white",
    
        height: 35,
        margin: 10,
        padding: 2,
        width: 230,
       
      },
      iconContainer2: {
        marginLeft: 0,
        justifyContent: 'flex-end', // Align vertically to the end (bottom)
        alignItems: 'flex-end', // Align horizontally to the end (right)
      },
      forget:{
            marginHorizontal:10,
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center"
      },
      buttoncontainer: {
    
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10
      },
      button: {
        backgroundColor: '#38BD10',
        width:92+"%",
        height:60,
        borderRadius: 10,
        textAlign:"center",
        justifyContent:"center"
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign:"center"
      },
      separator: {
        height: 1,
        width: '30%',
        backgroundColor: '#1f2937',
        marginVertical: 10,
      },
      googlecontainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10

      },
      googleButton:{
        backgroundColor: 'white',
        width:92+"%",
        height:55,
        borderRadius: 10,
        textAlign:"center",
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"center",
        gap:10
      },

      otherAuthbuttonText: {
        color: 'black',
        fontSize: 15,
        textAlign:"center"
      },
      otherAuthbuttonText2: {
        color: 'white',
        fontSize: 15,
        textAlign:"center"
      },
      otherAuthImage:{
        width: 30,
        height: 30,
        objectFit: 'scale-down',
      }
      , facebookcontainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10

      },
      facebookButton:{
        backgroundColor: '#4267B2',
        width:92+"%",
        height:55,
        borderRadius: 10,
        textAlign:"center",
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"center",
        gap:10
      },
       applecontainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10

      },
      appleButton:{
        backgroundColor: '#090909',
        width:92+"%",
        height:55,
        borderRadius: 10,
        textAlign:"center",
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"center",
        gap:10
      },
})