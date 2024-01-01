import { StyleSheet, Text, View,Image ,FlatList,TouchableOpacity, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import Commit from 'react-native-vector-icons/Octicons'; // You can use any other icon library
import Like from 'react-native-vector-icons/SimpleLineIcons'; // You can use any other icon library
import Sharealt from 'react-native-vector-icons/AntDesign'; // You can use any other icon library
import YoutubePlayer from 'react-native-youtube-iframe';

import database from '@react-native-firebase/database';


const Media = () => {






  const [video, setvideo] =useState(null);



  
  useEffect(() => {
    const onValueChange = database()
      .ref('/addVideos/')
      .on('value', snapshot => {
      
        const userItem = snapshot.val();0
        let items = Object.values(userItem);

        setvideo(items)

      
      });

    // Stop listening for updates when no longer required
    return () => database().ref('/addVideos/').off('value', onValueChange);
  }, []);


  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
     
     {/* {/ Header /} */}


     <View style={styles.Searchbar}>
          <View
            style={{
              marginHorizontal: 5,
              flexDirection: 'row',
              justifyContent: 'space-around',
              gap: 10,
              alignItems: 'center',
            }}>
            <Image
              source={require('../../Assets/images/SaylaniHD.png')}
              style={styles.image}
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
        </View>


{/* {/ heading /} */}
<ScrollView nestedScrollEnabled={true}>
<View style={{marginHorizontal:15,marginTop:20}}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: '500',textAlign:"center"}}>
 Saylani All Media Video
          </Text>
        </View>

{/* {/ Post Cards /} */}


<FlatList
        data={video}
        renderItem={({item, index}) => (
            <View key={index} style={{flexDirection: 'column',  marginVertical:5,backgroundColor:"#EFFDE1",paddingVertical:5}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
                alignItems: 'center',
                marginVertical: 5,
              }}>
              <View
                style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                <Image
   source={require('../../Assets/images/SaylaniHD.png')}

                  style={{width: 46, height: 46}}
                />

                <View>
                  <Text style={{fontSize: 17,color:"black", fontWeight:800}}>Saylani Media</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 5,
                    }}>
                    <Text style={{fontSize: 12,color:"black", fontWeight:500}}>{item.title}</Text>
                  </View>
                </View>
              </View>

            </View>

            
            <View style={{marginHorizontal:15 , marginTop:10}}>
            <Text style={{fontSize: 14,color:"black"}}>{item.Description}</Text>

            </View>

            {/* {/ Image Post /} */}
            <View style={{marginVertical: 5 }}>
            <YoutubePlayer
        height={200}
        videoId={item.id}
      />
            </View>
            <View style={styles.actionIcons}>
       
<View style={{flexDirection:'row' , gap:10, alignItems:'center'}}>
<TouchableOpacity>
          <Like name="like" size={20} color="#0369a1" />
        </TouchableOpacity>
        <TouchableOpacity >
          <Commit name="comment" size={20} color="#0369a1" />
        </TouchableOpacity>
</View>


        <TouchableOpacity >
          <Sharealt name="sharealt" size={20} color="#0369a1" />
        </TouchableOpacity >
      </View>

          </View>
        )}
        keyExtractor={item => item.key}
        style={{marginTop: 0}}
      />

<Text>

        {'\n'} {'\n'}
        {'\n'} {'\n'}
       
       
</Text>
</ScrollView>

    </View>
  )
}

export default Media

const styles = StyleSheet.create({
    Searchbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#0D6807',
        padding: 15,
        paddingHorizontal: 5,
        borderBottomRightRadius: 35, // Set your desired bottom right border radius value
      },
      actionIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
       alignItems:'center',
        paddingHorizontal:15,
        padding:5
       
      },


      image: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 30,
      },
      
})