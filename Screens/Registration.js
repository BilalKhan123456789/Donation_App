import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Registration = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.push('UserRequest', { req: 'request' })}
        style={styles.buttonContainer}
      >
        <Image
          source={require('../Assets/images/gat.png')}
          style={styles.image}
        />
        <Text style={styles.buttonText}>Request for help</Text>
      </TouchableOpacity>

      <Text>{'\n'} {'\n'} {'\n'} {'\n'}</Text>

      <TouchableOpacity
      
        onPress={() => navigation.push('Donate', { donate: 'donate' })}
        style={styles.buttonContainer}
      >
        <Image
          source={require('../Assets/images/donate.png')}
          style={styles.image}
        />
        <Text style={styles.buttonText}>Donate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2FFAE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    width: '80%',
    backgroundColor: '#0D6807',
borderTopEndRadius:30,
borderBottomLeftRadius:30


  },
  image: {
    width: 150,
    height: 150,
    objectFit: 'cover',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '900',
    color: 'white',
  },
});

export default Registration;
