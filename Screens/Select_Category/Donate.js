import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Donate = ({ route, navigation }) => {
  const { donate } = route.params;
  const [inputValue, setInputValue] = useState('');

  const handleTextChange = (text) => {
    setInputValue(text);
  };

  const handleButtonPress = () => {
    // Handle button press logic here
    console.log('Button Pressed');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={() => navigation.push('Form', { donate })}
          style={styles.buttonContainer}
        >
          <Image
            source={require('../../Assets/images/gaza.png')}
            style={styles.image}
          />
          <Text style={styles.buttonText}>Gaza Saport</Text>
        </TouchableOpacity>

        <TouchableOpacity
                  onPress={() => navigation.push('Form', { donate })}

        style={styles.buttonContainer}>
          
          <Image
            source={require('../../Assets/images/blood.png')}
            style={styles.image}
          />
          <Text style={styles.buttonText}>Blood Bank</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}
                  onPress={() => navigation.push('Form', { donate })}

        >
          <Image
            source={require('../../Assets/images/family.png')}
            style={styles.image}
          />
          <Text style={styles.buttonText}>Family Kifalat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}
                  onPress={() => navigation.push('Form', { donate })}

        >
          <Image
            source={require('../../Assets/images/sadqah.png')}
            style={styles.image}
          />
          <Text style={styles.buttonText}>Sadqah/Aqiqah</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}
                  onPress={() => navigation.push('Form', { donate })}

        >
          <Image
            source={require('../../Assets/images/zaqat.png')}
            style={styles.image}
          />
                    <Text style={styles.buttonText}>Zakaat / Fitra</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}
                  onPress={() => navigation.push('Form', { donate })}

        >
          <Image
            source={require('../../Assets/images/sadqah.png')}
            style={styles.image}
          />
          <Text style={styles.buttonText}>Sadqah Jariyah</Text>
        </TouchableOpacity>

       
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E2FFAE',
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 30,
    gap: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 130,
    height: 170,
    backgroundColor: '#0D6807',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 90,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '800',
    marginVertical: 10,
  },
  generalDonationContainer: {
    flexDirection: 'column',
    width: '85%',
    height: 190,
    backgroundColor: '#e0f2fe',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  generalDonationText: {
    color: '#0369a1',
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: '#a3e635',
    width: '80%',
    height: 40,
    marginVertical: 10,
    borderRadius: 5,
  },
  input: {
    color: 'black',
    flex: 1,
  },
  quickDonateButton: {
    backgroundColor: '#0369a1',
    width: '100%',
    height: 40,
    marginVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickDonateButtonText: {
    color: 'white',
    fontSize: 17,
  },
});

export default Donate;
