import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Seating = () => {
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation prop

  const openAboutScreen = () => {
    navigation.push('about');
  };

  const openTremsScreen = () => {
    navigation.push('trems');
  };

  const openMessageScreen = () => {
    navigation.push('chairman');
  };

  const openWebsite = () => {
    const websiteURL = 'https://www.saylaniwelfare.com/en'; // Replace with your website URL
    Linking.openURL(websiteURL);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      {/* Body */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={openAboutScreen}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>

      {/* Terms and Condition */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={openTremsScreen}
        style={styles.buttonContainerGreen}
      >
        <Text style={styles.buttonText}>Terms & Condition</Text>
      </TouchableOpacity>

      {/* Visit Our website */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={openWebsite}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Visit Our Website</Text>
      </TouchableOpacity>

      {/* Chairman Message */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={openMessageScreen}
        style={styles.buttonContainerGreen}
      >
        <Text style={styles.buttonText}>Chairman Message</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#16930E',
    height: 140,
    borderBottomRightRadius: 100,
  },
  headerText: {
    color: 'white',
    fontSize: 45,
    fontWeight: '900',
    letterSpacing: 7,
    marginLeft: 30,
    marginTop: 30,
  },
  subHeaderText: {
    color: 'white',
    marginLeft: 50,
    fontSize: 20,
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#16930E',
    padding: 12,
    borderRadius: 10,
    marginTop:40
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonContainerGreen: {
    width: '80%',
    flexDirection: 'row',
    marginTop:20,
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#0D6807',
    padding: 12,
    borderRadius: 10,
  },
});

export default Seating;