import React from 'react';
import {
  Alert,
  Animated,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/AntDesign';
import Plus from 'react-native-vector-icons/Feather';

import Home from './BottamTabComponets/Home';
import Media from './BottamTabComponets/Media';
import Profile from './BottamTabComponets/Profile';
import Seating from './BottamTabComponets/Seating';

// const Screen1 = () => {
//   return <View style={styles.screen1} />;
// };

// const Screen2 = () => {
//   return <View style={styles.screen2} />;
// };

export default function  Main() {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'Home':
        icon = 'home';
        break;
      case 'Media':
        icon = 'playcircleo';
        break;
        case "title3":
        icon= "setting";
        break
        case "profile":
        icon = "user"
        break

    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? '#a3e635' : '#f8fafc'}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
<View style={{flex:1}}>
      <CurvedBottomBarExpo.Navigator
        type="DOWN"
        shadowStyle={styles.shawdow}
        height={65}
        circleWidth={60}
        bgColor="#16930E"
        initialRouteName="Home"
        borderTopLeftRight
        screenOptions={{
          headerShown: false, // Add this line to hide the header by default
        }}
        
        renderCircle={({ selectedTab, navigate,  }) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigate("registration")}
            >
              <Plus name={'plus'} color="white" size={35}  />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >

        


        <CurvedBottomBarExpo.Screen
          name="Home"
          position="LEFT"
          
          component={() =>
            
           
            <Home/>

          }
        />



         <CurvedBottomBarExpo.Screen
          name="Media"
          component={() => <Media/>}
          position="LEFT"
        />




        <CurvedBottomBarExpo.Screen
          name="title3"
          position="RIGHT"
          component={() => <Seating/>}
        />



         <CurvedBottomBarExpo.Screen
          name="profile"
          component={() => <Profile/>}
         position="RIGHT"
        />
       


        
      </CurvedBottomBarExpo.Navigator>
      </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
 
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#38BD10",
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});