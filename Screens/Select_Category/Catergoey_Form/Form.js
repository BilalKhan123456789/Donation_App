import React, { useState } from "react";
import { SafeAreaView, View, TextInput, Text, StyleSheet, Image, ScrollView,Button, TouchableOpacity } from "react-native";
import Input from "../../../Common/Input";

import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import Snackbar from "react-native-snackbar";


const Form = ({route}) => {

const {req,donate} =  route.params



  // Sahi tareeke se useState ka istemal
  const [data, setData] = useState({
    amount: "",
    name: "",
    phone: "",
    email: "",
    country: "",
    additionalinfo: "", // corrected the typo
  });


  const handleSubmitDetails=async ()=>{

if(data.amount==""){
  Snackbar.show({
    text: 'Please Enter Amount',
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor:"red",
    textColor:"white"
  });

}else if(data.name==""){
  Snackbar.show({
    text: 'Please Enter Name',
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor:"red",
    textColor:"white"
  });
}else if(data.phone==""){
  Snackbar.show({
    text: 'Please Enter Phone Number',
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor:"red",
    textColor:"white"
  });
}else if(data.email==""){
  Snackbar.show({
    text: 'Please Enter Email',
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor:"red",
    textColor:"white"
  });
}else if(data.country==""){
  Snackbar.show({
    text: 'Please Enter Your Country',
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor:"red",
    textColor:"white"
  });
}else if(data.additionalinfo==""){
  Snackbar.show({
    text: 'Please Enter Your Country',
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor:"red",
    textColor:"white"
  });
}

else{
  if(req == "request"){
    let key = firestore().collection('user').doc().id;
  
    let obj = {
      amount:data.amount,
      name:data.name,
      phone:data.phone,
      email:data.email,
      country:data.country,
      additionalinfo:data.additionalinfo
    }
  
    await database()
        .ref(`/users/${req}/${key}`)
        .set(obj)
        .then(() => console.log('Data set.'));
        Snackbar.show({
          text: 'Your Details Submit Successfully',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor:"#0D6807",
          textColor:"white"
        });
  }
  else{
    let key = firestore().collection('user').doc().id;
  
    let obj = {
      amount:data.amount,
      name:data.name,
      phone:data.phone,
      email:data.email,
      country:data.country,
      additionalinfo:data.additionalinfo
    }
  
    await database()
        .ref(`/users/${donate}/${key}`)
        .set(obj)
        .then(() => console.log('Data set.'));
        Snackbar.show({
          text: 'Your Details Submit Successfully',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor:"#0D6807",
          textColor:"white"
        });


  }
  
}







       







  }



  return (

<ScrollView>

    <View style={{ flex: 1 }}>
      <View style={style.Searchbar}>
        <View
          style={{
            marginHorizontal: 5,
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: 10,
            alignItems: 'center',
          }}>
          <Image

            source={require('../../../Assets/images/SaylaniHD.png')}
            style={style.image}
          />
          <Text
            style={{
              fontSize: 20,
              letterSpacing: 3,
              fontWeight: 'bold',
              color: '#f8fafc',
            }}>
            Saylani Welfare Trust.
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 20, color: "white" }}>Donation Form</Text>
        </View>
      </View>

      <View style={{ flexDirection: "column", gap: 20, padding: 20 }}>
        <Input
          label="Amount"
          placeholder="Enter Amount-(Rs)"
          keyboardType="numeric"
          value={data.amount}
          onChangeText={(text) => setData({ ...data, amount: text })}
        />

        <Input
          label="Donor name"
          placeholder="Enter Full Name"
          value={data.name}
          onChangeText={(text) => setData({ ...data, name: text })}
        />

        <Input
          label="Phone"
          placeholder="Enter Contact"
          keyboardType="numeric"
          value={data.phone}
          onChangeText={(text) => setData({ ...data, phone: text })}
        />

        <Input
          label="Email"
          placeholder="Enter Email Address"
          keyboardType="email-address"
          value={data.email}
          onChangeText={(text) => setData({ ...data, email: text })}
        />

        <Input
          label="Country"
          placeholder="Enter Country Name"
          value={data.country}
          onChangeText={(text) => setData({ ...data, country: text })}
        />

        <Input
          label="Additional Info"
          placeholder="Please Enter Additional info"
          value={data.additionalinfo}
          onChangeText={(text) => setData({ ...data, additionalinfo: text })}
        />





      </View>
    </View>

    <TouchableOpacity activeOpacity={0.7}  style={style.btn}  onPress={() => handleSubmitDetails()}>
  <Text style={{textAlign:"center",color:"white", fontSize:18}}>Submit</Text>
  </TouchableOpacity>
    </ScrollView>



  );
};

export default Form;

const style = StyleSheet.create({
  Searchbar: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#0D6807',
    padding: 15,
    paddingHorizontal: 5,
    borderBottomRightRadius: 45,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  btn:{
    backgroundColor:"#0D6807",
    padding:20,
    margin:15,
    borderRadius:10
    
  }
});
