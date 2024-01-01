import React, { useState } from 'react'
import { StyleSheet, Text, View,Image, ScrollView,TouchableOpacity} from 'react-native'


const park = () => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

  return (
   <View style={styles.container}>
    <ScrollView>

   
    {/* Drop Heading  */}
 <View style={{marginHorizontal: 10, marginVertical: 10,marginTop:15}}>
          <Text style={{color: 'white', fontSize: 20}}>Player Positions</Text>
        </View>

{/* mark 1 heading */}

        <View style={{marginHorizontal: 10, marginVertical: 1,marginTop:15}}>
          <Text style={{color: 'white', fontSize: 20}}>Mark 1st Favourite Positions</Text>
        </View>

{/* mark 1 image  */}

<Image
        source={require('../../Assets/images/game1.png')}  // Replace with the actual path to your image
        style={styles.image}
      />

 {/* mark 2 heading  */}

        <View style={{marginHorizontal: 10, marginVertical:1,marginTop:15}}>
          <Text style={{color: 'white', fontSize: 20}}>Mark 2nd Favourite Positions</Text>
        </View>

{/* mark 2 image  */}

<Image
        source={require('../../Assets/images/game2.png')}  // Replace with the actual path to your image
        style={styles.image}
      />
{/* final button */}

<View style={styles.buttoncontainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handlePress}
            activeOpacity={0.7} // Set the opacity when the button is pressed
          >
            <Text style={styles.buttonText}>Finalize Account</Text>
          </TouchableOpacity>
        </View>

</ScrollView>
   </View>
   
  )
}

export default park

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
      },
      Imagecontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width:100+"%",
        height: 600,
        resizeMode: 'cover',  // You can adjust the resizeMode based on your needs
        objectFit:"contain"
      },
      buttoncontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:10

      },
      button: {
        backgroundColor: '#38BD10',
        width: 92 + '%',
        height: 60,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
      },
})


// npm install react-native-picker-select
// 