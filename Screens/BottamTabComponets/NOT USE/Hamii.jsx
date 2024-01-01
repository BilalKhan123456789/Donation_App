import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Signgap from '../Signgap';
const Tab = createMaterialBottomTabNavigator();
import Icon from 'react-native-vector-icons/AntDesign';
import Football from 'react-native-vector-icons/Ionicons';
import Plus from 'react-native-vector-icons/Entypo';
import Search from 'react-native-vector-icons/Feather';
import Bell from 'react-native-vector-icons/Fontisto';


import Insttypr from './Insttypr';
import SignUp from '../../SignUp';
import Noti from './Noti';



const Hamii = () => {
  return (
    <View style={{flex:1}}>
     <Tab.Navigator
      initialRouteName="Home"
      activeColor="#38BD10"
      inactiveColor="#fff"
      barStyle={{ backgroundColor: 'black',height: 50,alignItems:"center",justifyContent:"center" }}
      tabBarOptions={{
        tabBarIcon:{
            iconStyle: {
                backgroundColor: 'black', // Set the background color behind the icon to be transparent
              }
        },
       
      }}
     >

{/* home */}

      <Tab.Screen name="Home"  component={Insttypr}
      
      options={{
        tabBarLabel: '', // Set tabBarLabel to an empty string
        headerShown: false,

        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={26} />
        ),

       
      }}
      
      />

{/* football  */}
      <Tab.Screen name="football" component={Signgap} 
       options={{
        tabBarLabel: '', // Set tabBarLabel to an empty string
        headerShown: false,

        tabBarIcon: ({ color }) => (
          <Football name="football" color={color} size={26} />
        ),
      }}
      />


{/* Add post  */}

<Tab.Screen name="AddPost" component={SignUp} 
       options={{
        tabBarLabel: '', // Set tabBarLabel to an empty string
        headerShown: false,

        tabBarIcon: ({ color }) => (
            <View style={{backgroundColor:"#38BD10" ,width:40,height:40,borderRadius:100,alignItems:"center",justifyContent:"center"}}>

                <Plus name="plus" color="white" size={26} />
            </View>
        ),
      }}
      />


<Tab.Screen name="search" component={SignUp} 
       options={{
        tabBarLabel: '', // Set tabBarLabel to an empty string
        headerShown: false,

        tabBarIcon: ({ color }) => (
          <Search name="search" color={color} size={26} />
        ),
      }}
      />



<Tab.Screen name="Noti" component={Noti} 
       options={{
        tabBarLabel: '', // Set tabBarLabel to an empty string
        headerShown: false,

        tabBarIcon: ({ color }) => (
          <Bell name="bell" color={color} size={24} />
        ),
      }}
      />


    </Tab.Navigator>
    </View>
  )
}

export default Hamii

const styles = StyleSheet.create({
   
})


