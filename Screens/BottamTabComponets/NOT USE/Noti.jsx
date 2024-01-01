import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';


const Noti = () => {
  return (
    <View style={{flex:1,backgroundColor:"black"}}>

    <View >
        <View style={styles.Header}>
          <Icon name="calendar-alt" color="white" size={30} />

          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Feed
          </Text>

          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/f9c7/e738/0e1a3f0610d6a20d76bbaba7cdaf4ac5?Expires=1704672000&Signature=N8Yz-7qTaTKe-pRmz22xiE~i-8R3OF5~x6lnS9qhSD8EK5lYTGQqJJGXN0pbHEczvAdd868nMjruLV5wZScExb-oMlmIA0ChJPGbmV3QNTcrsIPP7rEq1K2kRHm--qpDpjXEVX6TlgTbMl415T~KOajoU-iHyjqvOWlL3UID7GBN7VEBT82zNTQDL1tGIfVTYRuEZZGXSU1n2cKAV~qInSHqJY-aY-N3spiLBMJMUS9sI45EIuiv9nXWeWEoZjKTE9DmmSkc4NOA8O5Q4U8GBihjPJhwijQ-ijB0pHHu3DyEKU2B96SP9RpTccMpOEy6d3NUaWXRP-WhF1TJEYojIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            }}
            style={styles.imaget}
          />
        </View>
      </View>



      <Text>Noti</Text>
    </View>
  )
}

export default Noti

const styles = StyleSheet.create({

    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
      },
      imaget: {
        width: 45,
        height: 45,
      },


})