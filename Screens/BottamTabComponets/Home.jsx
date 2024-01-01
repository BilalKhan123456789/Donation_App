import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';
import React, {useState,useEffect} from 'react';
import Swiper from 'react-native-swiper';
import Heart from 'react-native-vector-icons/AntDesign';
import Comment from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';


const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [iconColor, setIconColor] = useState('black');

  const handleSearch = () => {
    // Implement your search logic here using the searchText state
    console.log('Searching for:', searchText);
    // You can perform your search-related actions here
  };


  const handleIconClick = () => {
    // Toggle the color on click
    const newColor = iconColor === 'black' ? 'red' : 'black';
    setIconColor(newColor);
  };




  const [post, setpost] =useState(null);



  
  useEffect(() => {
    const onValueChange = database()
      .ref('/addpost/')
      .on('value', snapshot => {
      
        const userItem = snapshot.val();
        let items = Object.values(userItem);

        setpost(items)

      
      });

    // Stop listening for updates when no longer required
    return () => database().ref('/addpost/').off('value', onValueChange);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
    
        {/* header  */}
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
        <ScrollView>
        {/* Slider */}
        <View style={{justifyContent: 'center', padding: 10}}>
          <Swiper style={styles.wrapper} showsPagination={false} showsButtons={false} autoplay={true}>
            <View style={styles.slide1}>
          
              <Image
                source={{
                  uri: 'https://scontent.fhdd2-1.fna.fbcdn.net/v/t39.30808-6/326334837_577064273938579_8781686497909691897_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeFTSVeS9PWV8B-LgUewiZFiO3MAFYeIXmE7cwAVh4heYQNQ6oaK5ZbkvZocv-evaXo1YIwajqcNF4JhXhsC9gen&_nc_ohc=YaXfYiPDmDwAX9jTdZR&_nc_ht=scontent.fhdd2-1.fna&oh=00_AfDa8VRDmsnfWK3POCkwHBwU40UNjh_pRpUqPNTQ1iX7Zw&oe=65964301',
                }} // Replace with the actual path to your image
                style={{
                  width: 100 + '%',
                  height: 220,
                  objectFit: 'fill',
                  borderRadius: 20,
                }}
              />
            </View>
            <View style={styles.slide2}>
              <Image
                source={{
                  uri: 'https://theazb.com/wp-content/uploads/2022/10/Saylani-Welfare.jpg',
                }} // Replace with the actual path to your image
                style={{
                  width: 100 + '%',
                  height: 220,
                  objectFit: 'fill',
                  borderRadius: 20,
                }}
              />
            </View>
            <View style={styles.slide3}>
              <Image
                source={{
                  uri: 'https://saylaniweb-home.web.app/images/sliderimage2_rotibank.jpg',
                }} // Replace with the actual path to your image
                style={{
                  width: 100 + '%',
                  height: 220,
                  objectFit: 'fill',
                  borderRadius: 20,
                }}
              />
            </View>
          </Swiper>
        </View>

        {/* Cards */}

        <View style={{margin: 10}}>
          <Text style={{color: 'black', fontSize: 20,textAlign:"center"}}>
            What We are Doing
          </Text>
        </View>

        <ScrollView horizontal={true} style={{marginHorizontal: 16}}>
          <View style={styles.smallcard}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1646927889/website-images/static/44.png',
              }} // Replace with the actual path to your image
              style={{width: 60, height: 60, objectFit: 'fill', marginTop: 10}}
            />
            <Text style={{fontSize: 13,  color: '#0369a1'}}>
              Welfare
            </Text>
          </View>

          <View style={styles.smallcard}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1646927857/website-images/static/41.png',
              }} // Replace with the actual path to your image
              style={{width: 60, height: 60, objectFit: 'fill', marginTop: 10}}
            />
            <Text style={{fontSize: 13,  fontWeight: '500', color: '#0369a1'}}>
              Medical
            </Text>
          </View>

          <View style={styles.smallcard}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1646927849/website-images/static/39.png',
              }} // Replace with the actual path to your image
              style={{width: 40, height: 60, objectFit: 'fill', marginTop: 10}}
            />
            <Text style={{fontSize: 13,  fontWeight: '500', color: '#0369a1'}}>
              Online Sadqah
            </Text>
          </View>

          <View style={styles.smallcard}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1646927853/website-images/static/40.png',
              }} // Replace with the actual path to your image
              style={{width: 60, height: 60, objectFit: 'fill', marginTop: 10}}
            />
            <Text style={{fontSize: 13,  fontWeight: '500', color: '#0369a1'}}>
              RO plant
            </Text>
          </View>

          <View style={styles.smallcard}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1646927923/website-images/static/48.png',
              }} // Replace with the actual path to your image
              style={{width: 60, height: 60, objectFit: 'fill', marginTop: 10}}
            />
            <Text style={{fontSize: 13,  fontWeight: '500', color: '#0369a1'}}>
              Education
            </Text>
          </View>

          <View style={styles.smallcard}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1646927876/website-images/static/43.png',
              }} // Replace with the actual path to your image
              style={{width: 60, height: 60, objectFit: 'fill', marginTop: 10}}
            />
            <Text style={{fontSize: 13,  fontWeight: '500', color: '#0369a1'}}>
              Food
            </Text>
          </View>
        </ScrollView>






 <View style={{margin: 20}}>
          <Text style={{color: 'black', fontSize: 20, textAlign:"center"}}>
          Saylani All Media Post

          </Text>
        </View>

        <ScrollView nestedScrollEnabled={true}>


{/* Post Cards */}



<FlatList
        data={post}
        renderItem={({item}) => (
            <View style={{flexDirection: 'column', marginVertical:5,backgroundColor:"#EFFDE1",borderRadius:30,paddingVertical:5}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
                alignItems: 'center',
                marginVertical: 5,
              }}>
              <View
                style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                <Image
   source={require('../../Assets/images/SaylaniHD.png')}

                  style={{width: 50, height: 50}}
                />

                <View>
                  <Text style={{fontSize: 17,color:"black"}}>Saylani Media</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 5,
                    }}>
                    <Text style={{fontSize: 10,color:"black"}}>{item.title}</Text>
                  </View>
                </View>
              </View>

            </View>
            <View style={{marginHorizontal:10}}>
            <Text style={{fontSize: 15,color:"black"}}>{item.Description}</Text>

            </View>

            {/* Image Post */}
            <View style={{marginVertical: 5}}>
              <Image
                source={{
                  uri: `${item.Image}`,
                }}
                style={{width: 380, height: 319, objectFit: 'cover'}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                marginHorizontal: 10,
                marginVertical: 6,
              }}>

      <Heart name="hearto" size={25} color={iconColor} />
      <Comment name="comment-o" size={25} color={iconColor} />
      <Heart name="sharealt" size={25} color={iconColor} />


            </View>

          </View>
        )}
        keyExtractor={item => item.key}
        style={{marginTop: 0}}
      />


<Text>

        {'\n'} {'\n'}
        {'\n'} {'\n'}
       
       
</Text>
</ScrollView>









<Text>
{'\n'}
        {'\n'} {'\n'}
        {'\n'} {'\n'}
       
       
</Text>


      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Searchbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#16930E',
    padding: 15,
    paddingHorizontal: 5,
    borderBottomRightRadius: 55, // Set your desired bottom right border radius value
  },
  image: {
    width: 45,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    width: 280,
    borderColor: 'White',
    borderWidth: 1,
    borderRadius: 100,
  },
  input: {
    flex: 1,
    height: 40,
    width: 200,

    marginRight: 10,
    paddingHorizontal: 8,
  },

  // swiper style start
  wrapper: {
    height: 200,
    marginTop:10
  },
  wrapper2: {
    
    height: 300,
    backgroundColor:"#3CD01C"
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    borderRadius: 10,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
    borderRadius: 10,
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  // swiper style and
  smallcard: {
    width: 100,
    height: 100,
    backgroundColor: '#F9FEF0',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
borderTopEndRadius:20,
borderTopStartRadius:20,

    marginHorizontal: 5,
  },
  Mediamcard:{
    width: 110,
    height: 145,
    backgroundColor: '#f1f5f9',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
  }
});
