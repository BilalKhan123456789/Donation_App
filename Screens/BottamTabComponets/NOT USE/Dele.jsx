import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Dele = () => {

    const handlePress = () => {
        // Handle button press here
        console.log('Button pressed!');
      };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/7a49/c120/2eb63c3cdadb41d09766cdf8d33b2d9d?Expires=1704067200&Signature=FoBzYA~DCx~eEw8qdCg-9KtkjtykoPDIzDWq3o1iS8UA-xFTVnBReLYCH1yT12-f~GUysobSLyVmzlUQwhrglbs4XhC9bmKYaLrQY2XVNc9KW578Hadn6s-0JcCwmDCQ6GGvvedf3XL9JUCEjpbh5LJDZ7AyNJMa8GeQE2Ris0kOnjYx3LO6AGh804xSHjrSG6l5dQAdw0Kzir3A-kcWx0oMMx1zgPLH57Ukzmzals9sShzNnh5kx8j09PR94cWmMWTb3WtXt0qBFqDNFr~Phs357maxHYHtjJIGPdHtuqddtudSEHNeBEpnuiFQIWiknVSo2~3-f4ocXU3e29o8jQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          }}
          style={styles.image}
        />
      </View>

<View style={styles.textContainer}>
<Text style={styles.text}>Lorem ipsum dolor sit amet, consectet tur adipiscing ene rhoncus en</Text>
</View>


<View style={styles.buttoncontainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
        activeOpacity={0.7} // Set the opacity when the button is pressed
      >
        <Text style={styles.buttonText}>Continue as a Player</Text>
      </TouchableOpacity>
    </View>


    <View style={styles.buttoncontainer2}>
      <TouchableOpacity
        style={styles.button2}
        onPress={handlePress}
        activeOpacity={0.7} // Set the opacity when the button is pressed
      >
        <Text style={styles.buttonText}>Continue as a Player</Text>
      </TouchableOpacity>
    </View>


    </View>
  );
};

export default Dele;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 140,
  },
  image: {
    width: 220,
    height: 200,
    objectFit: 'scale-down',
  },
  textContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal:60
  },
  text:{
    color:"white",
    textAlign:"center",
    fontSize:14
  },
  buttoncontainer: {
    
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:170
  },
  button: {
    backgroundColor: '#38BD10',
    width:90+"%",
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
  buttoncontainer2: {
        
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  },
  button2: {
    borderWidth: 1, // Border width
    borderColor: 'white', // Border color
    width:90+"%",
    height:60,
    borderRadius: 10,
    textAlign:"center",
    justifyContent:"center"
  },


});
