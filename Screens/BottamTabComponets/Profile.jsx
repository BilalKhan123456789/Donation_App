import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Avatar, Badge} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

const Profile = ({navigation}) => {
  const [file, setfile] = useState(null); // Corrected: use 'setfile' instead of 'setFile'
  const [uploadProgress, setUploadProgress] = useState(0);

  const [image, setimage] = useState(
    'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
  );

  const openCamera = () => {
    const options = {
      mediaType: 'photo', // You can use 'photo' or 'video'
      quality: 0.8, // Image quality (0 to 1)
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled the camera.');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        // Use the image from the camera here
        console.log('Image URI: ', response.assets[0].uri);
        setfile(response.assets[0].uri);
        imageupload(response.assets[0].uri);
      }
    });
  };

  const openGallery = () => {
    const options = {
      mediaType: 'photo', // You can use 'photo' or 'video'
      quality: 0.8, // Image quality (0 to 1)
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled the camera.');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        // Use the image from the camera here
        console.log('Image URI: ', response.assets[0].uri);
        setfile(response.assets[0].uri);
        imageupload(response.assets[0].uri);
      }
    });
  };

  const imageupload = imageurl => {
    const reference = storage().ref(
      'imagesfiles/' + new Date().getTime() + '.jpg',
    );
    try {
      const uploadTask = reference.putFile(imageurl);

      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.error('Error uploading image: ', error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(async downloadURL => {
            const img_url = downloadURL;
            setimage(downloadURL);

            console.log('File available at', downloadURL);
          });
        },
      );
    } catch (error) {
      console.error('Error uploading image: ', error);
    }
  };

  const LogOut = () => {
    navigation.push('Login');
  };

  const handelNotifaction = () => {
    navigation.push('about');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        {/* {/ {/ Header /} /} */}

        <View
          style={{
            backgroundColor: '#0369a1',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
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

          {/* {/ {/ profile /} /} */}

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#65a30d',
              height: 350,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}>
            <View style={styles.imageContainer}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={{
                    uri: `${image}`,
                  }} // Replace with the actual path to your image
                  style={{
                    width: 250,
                    height: 250,
                    borderRadius: 200,
                    objectFit: 'cover',
                    borderWidth: 4,
                    borderColor: '#f8fafc',
                  }}
                />
                <Badge
                  onPress={() => openGallery()}
                  style={{
                    position: 'absolute',
                    top: 30,
                    right: 13,
                    backgroundColor: '#0369a1',
                    width: 35,
                    height: 35,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: '#f8fafc',
                  }}>
                  {/* {/ {/ You can customize the badge content /} /} */}
                  <Icon
                    name="edit-2"
                    size={17}
                    color="#f8fafc"
                    style={{margin: 10}}
                  />
                </Badge>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  gap: 20,
                  marginVertical: 10,
                  alignItems: 'baseline',
                }}></View>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={handelNotifaction}
            style={styles.loginButton}>
            <Text style={styles.loginButtonText}>About Saylani</Text>
            {/* {/ {/ <Login name="login" size={15} color="white" /> /} /} */}
          </TouchableOpacity>

          <TouchableOpacity onPress={LogOut} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>LogOut</Text>
            {/* {/ {/ <Login name="login" size={15} color="white" /> /} /} */}
          </TouchableOpacity>
        </View>
        <Text>
          {'\n'} {'\n'}
          {'\n'} {'\n'}
        </Text>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Searchbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0D6807',
    padding: 15,
    paddingHorizontal: 5,
    borderBottomLeftRadius: 15, // Set your desired bottom left border radius value
    borderBottomRightRadius: 15, // Set your desired bottom right border radius value
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  loginButton: {
    backgroundColor: '#65a30d',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 15,
    margin: 10,
    borderRadius: 30,
    marginTop: 30,
    width: 90 + '%',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
