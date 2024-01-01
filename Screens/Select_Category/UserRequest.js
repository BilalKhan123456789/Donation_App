import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const UserRequest = ({ navigation, route }) => {
  const { req } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity
      activeOpacity={0.7}
        onPress={() => navigation.push('Form', { req })}
        style={styles.buttonContainer}
      >
        <Image
          source={require('../../Assets/images/blood.png')}
          style={styles.image}
        />
        <Text style={styles.buttonText}>Need Blood</Text>
      </TouchableOpacity>

      <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.push('Form', { req })}
      style={styles.buttonContainer}
      >
        <Image
          source={require('../../Assets/images/sadqah.png')}
          style={styles.image}
        />
        <Text style={styles.buttonText}>Need Other help</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 30,
    gap: 30,
    backgroundColor: '#E2FFAE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 200,
    height: 200,
    backgroundColor: '#0D6807',
    borderTopEndRadius:40,
    borderBottomLeftRadius:40,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    marginVertical: 10,
  },
});

export default UserRequest;