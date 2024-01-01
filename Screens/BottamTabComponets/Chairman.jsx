import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native'
import React from 'react'

const Chairman = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#E2FFAE'}}>
        <ScrollView>
      {/*heading  */}
      <View style={{marginHorizontal:20 ,marginTop:30}}>
          <Text style={{color: 'black',fontWeight:"900", fontSize: 22, fontWeight: '500'}}>
          About - Chairman Message
          </Text>
        </View>

{/* {/ image /} */}


<View style={{justifyContent:"center",padding:20}}>
<Image
  source={{ uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1647964514/website-images/static/62.jpg' }}
  style={styles.image}
/>
</View>

{/* {/ Introduction /} */}
<View style={{marginHorizontal:20 ,marginTop:10}}>
          <Text style={{color: 'black',fontWeight:"900", fontSize: 22, fontWeight: '500'}}>
          Chairman Message
          </Text>
        </View>

<View style={{marginHorizontal:20}}>
<Text style={{color:"black",textAlign:"justify"}}>

The purpose of sending this message to
 you is so that you not only spread this message to
 others but also play your part in helping us to continue
  serving and helping the needy till the Day of Judgment.
   </Text>
</View>



{/* {/ qustion /} */}


<View style={{marginHorizontal:20,marginTop:20}}>
<Text style={{color:"black",fontSize:20,textAlign:"justify"}}>
Who is it that would loan Allah a goodly loan so He may multiply it for him many times over?
 </Text>
</View>


{/* {/ ayat /} */}




<View style={{marginHorizontal:20 ,marginTop:10}}>
          <Text style={{color: 'gray',fontWeight:"900", fontSize: 15, fontWeight: '500'}}>
          ( Surat Baqara, Verse 245 )
          </Text>
        </View>



{/* {/ message /} */}

        <View style={{marginHorizontal:20}}>
<Text style={{color:"black",textAlign:"justify"}}>
It should be noted that Allah, who is in need of no one and nothing, instills upon his men to give Qarz-e-Hasana because it is in man’s nature to be frugal whilst spending his wealth. Allah speaks about qarz because it is returned and Allah promises that He will return the goodly loan by 70 folds. Allah conveys his message to the Muslim ummah through the Holy Prophet Muhammad prompting Muslims to spend their wealth in a certain way. He says,Oh children of Adam! Trust me with your wealth. If you do so, no fire, flood or thieves will be able to rob you off your money. Instead, you will be endowed with your wealth when you most need it. He further says that the poor and weak will not remain hungry and naked except due to the negligence of the rich, who should not be stingy in spending their money on those worse off than themselves. Allah will not only take strict accountability from those people but He will also punish them accordingly. On the Day Of Judgement, the rich will be humiliated because they did not help the needy. The needy will complain to Allah and say that all those men on whom you graciously bestowed the rights of wealth showed negligence in its proper use; they were busy spending on themselves and forgot about us, the ones who needed it. Allah will reply to this and say: “I swear on my respect and glory! I will bring you closer to me and push them further away.
Alhamdollilah, Allah has accorded Saylani Welfare with the highest favor by sending those people our way who follow the teachings of the Holy Quran and Hadith, give zakat, fidyah, fitrah, khairat and other donations to help us help those in need. The purpose of sending this message to you is so that you not only spread this message to others but also play your part in helping us to continue serving and helping the needy till the Day of Judgment.
  </Text>
</View>

{/* {/ name messanger /} */}


<View style={{marginHorizontal:20,marginTop:10}}>
<Text style={{color:"black",fontSize:25,textAlign:"center"}}>
Muhammad Bashir Farooq
 </Text>
</View>

{/* {/ Tittle /} */}


<View style={{marginHorizontal:20,marginBottom:10}}>
<Text style={{color:"black",fontSize:15,textAlign:"center"}}>
Chairman Saylani Welfare
 </Text>
</View>


</ScrollView>
    </View>
  
  )
}

export default Chairman

const styles = StyleSheet.create({

    image: {
        width: 320,
        height: 250,
         borderRadius:30
      },
})