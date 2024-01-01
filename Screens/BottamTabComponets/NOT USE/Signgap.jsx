import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Avatar, Badge, RadioButton, Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import IconE from 'react-native-vector-icons/FontAwesome';
import Lock from 'react-native-vector-icons/FontAwesome5';

const Signgap = () => {
  const [checkedR, setCheckedR] = useState('first');
  const [text, setText] = useState('');

  const handleTextChange = inputText => {
    setText(inputText);
  };

  const [checked, setChecked] = useState(true);

  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordChange = inputPassword => {
    setPassword(inputPassword);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = () => {
    // Your login logic here
    navigation.push('main');
  };

  const handlePress = () => {
    // Handle button press here
    console.log('Button pressed!');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Profileimage view  */}
        <View style={styles.imageContainer}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/9f01/d405/2df7b5bc8641baf2563a74fca36331b0?Expires=1704067200&Signature=Rv5Am9my5C1tYvJtTp11ijA8Y1Yz40kwrqZHIFUjqKz5gIM~W-mtF3r8TkTi7izCrVthLt-77vcOHTlS54sK1auZ6z~NtRLhsceVp-iN1lQBGPI-80Yh0kRsbVECOos5LgbvXQxTlvaLNyiFU~KYXttfbTcr50SeAT4ILYMGzQNOG810CzB406wYqZuptd6yF4w~Cbc8Ar8HUPQUMwwiAenyNq7Nx2N83LTUrx0b~jsZfu75bohgT45TqQ8o5TFTAfyCjA7HBdb1Rd8zFNoQPvJYoNPwZ5dp5lc8qle0AkwM7FSThjolXUSaB9VR9VSSLuoH3HN-KpWmomXhO8q8~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }} // Replace with the actual path to your image
              style={{width: 150, height: 150}}
            />
            <Badge
              style={{
                position: 'absolute',
                top: 15,
                right: 5,
                backgroundColor: '#38BD10',
                width: 35,
                height: 35,
                borderRadius: 100,
                borderWidth: 2,
                borderColor: 'white',
              }}>
              {/* You can customize the badge content */}
              <Icon
                name="edit-2"
                size={17}
                color="white"
                style={{margin: 10}}
              />
            </Badge>
          </View>
        </View>

        {/* heading view */}

        <View style={{marginHorizontal: 10, marginVertical: 10}}>
          <Text style={{color: 'white', fontSize: 20}}>Register</Text>
        </View>

        {/* radio buttons */}
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            arginHorizontal: 10,
            marginVertical: 2,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="first"
              status={checkedR === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setCheckedR('first')}
              color="white"
            />
            <Text style={{color: 'white'}}>Player</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="second"
              status={checkedR === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setCheckedR('second')}
              color="white"
            />
            <Text style={{color: 'white'}}>Club</Text>
          </View>
        </View>

        {/* email view */}

        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <IconE name="envelope" size={20} color="white" />
          </View>
          <TextInput
            style={styles.input}
            placeholder="abc@mail.com"
            placeholderTextColor="gray"
            onChangeText={handleTextChange}
            value={text}
          />
        </View>

        {/* password view */}

        <View style={styles.inputContainerp}>
          <View style={styles.iconContainer}>
            <Lock name="lock" size={17} color="#6B6B6B" />
          </View>

          <TextInput
            style={styles.input}
            secureTextEntry={!isPasswordVisible}
            placeholder="Password"
            placeholderTextColor="gray"
            onChangeText={handlePasswordChange}
            value={password}
          />

          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.iconContainer2}>
            <IconE
              name={isPasswordVisible ? 'eye-slash' : 'eye'}
              size={20}
              color="white"
            />
          </TouchableOpacity>
        </View>

        {/* confirm password view */}

        <View style={styles.inputContainerp}>
          <View style={styles.iconContainer}>
            <Lock name="lock" size={17} color="#6B6B6B" />
          </View>

          <TextInput
            style={styles.input}
            secureTextEntry={!isPasswordVisible}
            placeholder="Confirm Password"
            placeholderTextColor="gray"
            onChangeText={handlePasswordChange}
            value={password}
          />

          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.iconContainer2}>
            <IconE
              name={isPasswordVisible ? 'eye-slash' : 'eye'}
              size={20}
              color="white"
            />
          </TouchableOpacity>
        </View>

        {/* trams Condaction view */}

        <View style={styles.forget}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color="white"
              uncheckedColor="white"
              style={{marginLeft: -2}}
            />
            <Text style={{color: 'white', fontSize: 13}}>
              By Clicking this I agree to the{' '}
            </Text>
          </View>

          <Text style={{color: '#38BD10', fontSize: 13}}>
            "Terms & Conditions"
          </Text>
        </View>

        {/* next button view */}

        <View style={styles.buttoncontainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handlePress}
            activeOpacity={0.7} // Set the opacity when the button is pressed
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>

        {/* orr */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
          }}>
          <View style={styles.separator}></View>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 15,
              marginHorizontal: 5,
              marginBottom: 2,
            }}>
            or
          </Text>
          <View style={styles.separator}></View>
        </View>

        {/* google view */}

        <View style={styles.googlecontainer}>
          <TouchableOpacity
            style={styles.googleButton}
            onPress={handlePress}
            activeOpacity={0.7} // Set the opacity when the button is pressed
          >
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/f881/84c6/8dee88f348660b174d22c163e0848498?Expires=1704067200&Signature=TN4wMdUNt9akykaCGtO7Nq9p5DYMmTluvGaX0a1Q9-ba7T8RWVG3zUJlz75eqkMDusd~bRq6YEe9l2gcbim2eREknLRExgPyWvzNz7rMn3wKAErWzYvDZvrtqlVWTP0QQqloXrRJ2Nkcb4mELMTwqYjYkfdBtsnw7NwcocR-QtPq79y9YLR62Kb8lpfta3ASie-kcuFlNt5sB~jMv2Grbg8s0fJ6OvAvdLFDMiuNu5fU7~po8Q5ztuyibOdZPGP2vSpLdMJ6IrCtJx57sEeHLfjBfPjJ1bHe93n5Sej6Hth-pvGDBMCXA1WFimcaLMjJuWgQ24X2yDJ8zl-LirB-hQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }}
              style={styles.otherAuthImage}
            />

            <Text style={styles.otherAuthbuttonText}>
              Continue with Google account
            </Text>
          </TouchableOpacity>
        </View>

        {/* facebook view */}

        <View style={styles.facebookcontainer}>
          <TouchableOpacity
            style={styles.facebookButton}
            onPress={handlePress}
            activeOpacity={0.7} // Set the opacity when the button is pressed
          >
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/f881/84c6/8dee88f348660b174d22c163e0848498?Expires=1704067200&Signature=TN4wMdUNt9akykaCGtO7Nq9p5DYMmTluvGaX0a1Q9-ba7T8RWVG3zUJlz75eqkMDusd~bRq6YEe9l2gcbim2eREknLRExgPyWvzNz7rMn3wKAErWzYvDZvrtqlVWTP0QQqloXrRJ2Nkcb4mELMTwqYjYkfdBtsnw7NwcocR-QtPq79y9YLR62Kb8lpfta3ASie-kcuFlNt5sB~jMv2Grbg8s0fJ6OvAvdLFDMiuNu5fU7~po8Q5ztuyibOdZPGP2vSpLdMJ6IrCtJx57sEeHLfjBfPjJ1bHe93n5Sej6Hth-pvGDBMCXA1WFimcaLMjJuWgQ24X2yDJ8zl-LirB-hQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }}
              style={styles.otherAuthImage}
            />

            <Text style={styles.otherAuthbuttonText2}>
              Continue with Facebook account
            </Text>
          </TouchableOpacity>
        </View>

        {/* apple view */}

        <View style={styles.applecontainer}>
          <TouchableOpacity
            style={styles.appleButton}
            onPress={handlePress}
            activeOpacity={0.7} // Set the opacity when the button is pressed
          >
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/f881/84c6/8dee88f348660b174d22c163e0848498?Expires=1704067200&Signature=TN4wMdUNt9akykaCGtO7Nq9p5DYMmTluvGaX0a1Q9-ba7T8RWVG3zUJlz75eqkMDusd~bRq6YEe9l2gcbim2eREknLRExgPyWvzNz7rMn3wKAErWzYvDZvrtqlVWTP0QQqloXrRJ2Nkcb4mELMTwqYjYkfdBtsnw7NwcocR-QtPq79y9YLR62Kb8lpfta3ASie-kcuFlNt5sB~jMv2Grbg8s0fJ6OvAvdLFDMiuNu5fU7~po8Q5ztuyibOdZPGP2vSpLdMJ6IrCtJx57sEeHLfjBfPjJ1bHe93n5Sej6Hth-pvGDBMCXA1WFimcaLMjJuWgQ24X2yDJ8zl-LirB-hQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }}
              style={styles.otherAuthImage}
            />

            <Text style={styles.otherAuthbuttonText2}>
              Continue with Apple ID
            </Text>
          </TouchableOpacity>
        </View>

        {/* sign View */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 10,
          }}>
          <Text style={{color: 'white', fontSize: 10, textAlign: 'center'}}>
            Already have an account?{' '}
          </Text>
          <Text style={{color: '#38BD10', fontSize: 10, textAlign: 'center'}}>
            {' '}
            SIGN IN!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signgap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  image: {
    width: 190,
    height: 150,
    objectFit: 'scale-down',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    margin: 10,
    padding: 1,
    alignItems: 'center',
    backgroundColor: '#101010',
  },
  inputContainerp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderRadius: 10,
    margin: 10,
    padding: 1,
    alignItems: 'center',
    backgroundColor: '#101010',
  },
  iconContainer: {
    marginHorizontal: 10,
  },
  iconContainer2: {
    marginRight: 10,
    // Align horizontally to the end (right)
  },
  input: {
    color: 'white',

    height: 35,
    margin: 10,
    padding: 2,
    width: 230,
  },
  forget: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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
  separator: {
    height: 1,
    width: '30%',
    backgroundColor: '#1f2937',
    marginVertical: 10,
  },
  googlecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  googleButton: {
    backgroundColor: 'white',
    width: 92 + '%',
    height: 55,
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  otherAuthbuttonText: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
  otherAuthbuttonText2: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  otherAuthImage: {
    width: 30,
    height: 30,
    objectFit: 'scale-down',
  },
  facebookcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  facebookButton: {
    backgroundColor: '#4267B2',
    width: 92 + '%',
    height: 55,
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  applecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  appleButton: {
    backgroundColor: '#101010',
    width: 92 + '%',
    height: 55,
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
