import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Avatar, Divider} from 'react-native-paper';
import Dood from 'react-native-vector-icons/SimpleLineIcons';
import Club from 'react-native-vector-icons/MaterialCommunityIcons';
import Like from 'react-native-vector-icons/AntDesign';
import Dislike from 'react-native-vector-icons/AntDesign';
import Shear from 'react-native-vector-icons/FontAwesome5';

const Insttypr = () => {
  const Data = [
    {
      id: 12322,
      image:
        'https://s3-alpha-sig.figma.com/img/dcf0/9675/28500cdb74b7a135bae259fdda60022e?Expires=1704672000&Signature=oSsnboWjf8B5vHCjTvwlUitpMd9hL1XPPH3x8DQnYicb35gfZxjDZLnwLLuVVE2MilIciBRJtYbfr3AziRINOpCPqOUHEBtlTBjX9aLuMJuqnYmoUDW~NlZ~gb3XCJvSfx8SGvEpepdF~rZK7FTDuIvM0~0B9RkOUr3QuR5YjHHzxaKelNXfCuo6629hF5MDaFXBqh6MjNOuw9H0BH85boTLofBmnrkqYIlImObYTP5xQHOF99blbeCqXoO9ydJDCT7x4sCZZW-Pk-v1rSu7vc3H9hok3nV1M05V6WscFvnnuClYCtQbKgHIHQrAElfhMcMBjTGt5WI3N~lwvCVGdg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'Soccer Sport',
    },
    {
      id: 11233,
      image:
        'https://s3-alpha-sig.figma.com/img/b30b/ca89/ad2f201ead92f50145220f4ebdf0204c?Expires=1704672000&Signature=KRyHFrHHvloXx76u4ozN8IYAPY9Ieb4~Xmth2xoLikCAM5oe67BKUkl5rk2cXuOChbhKhFRXM5LpRekpt5jsdE5whQgEqK-lx~8FXnjfzNfxi8Nq6rxm-3-cINY-QsNTlRKFj4PxWDiN4MfbH9kVt5Vd08pPkHzSM~TrV56JmyoTZdTKjmE0ji-Ea2worVtPz4Yl75CvSdI8bjViAt1~QMT35szyCxvX32V134gGk4luttqBgmPgRKfY-G6l80lCVDCLao3mCfj5BEj4jX-uaQAofdvuUTxWPOU~INrDjn0~JCSGnksjLfKI12sYjef5juTcj3~ALYWoN3YKKhXSxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'piperrolland',
    },
    {
      id: 1424,
      image:
        'https://s3-alpha-sig.figma.com/img/7756/5239/4ead09c62cf7aba27f3e539165b0d24d?Expires=1704672000&Signature=QNpSJumqsXdveckpDw6XYsL2LqwkKfuEGMlx8rJPPVbxorwYEC8Z45OdiCqkphVUWP-PHsE-hWiMYkyDs86xHSdFtYUNVrs6DQck~lppWkCkgJrFvQsdamsRmgHZzFY8HJR0kXJwb9f6xyAMFe4Uddq3~n~6NyO-Q4vQoYvjM0DtiIceV18W~iuj4RsJJe0JUVIMUTw560Arq5uTgW1Ul9m8SMycS02~UZTi5wBlD~MNFpaGfh1h-hvHQn3Mr6V-MqIiprrFby4ayMsnXLneolDz7JwgnFzMWm1jc5rHKf1XObadHfxk3Q5y7dfVkoHPEZFZLd~A8kvS1IifSurwhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'Fireflies',
    },
    {
      id: 12325,
      image:
        'https://s3-alpha-sig.figma.com/img/46f9/77ff/9c2b19c203e5733af6d3ec3aa165ff82?Expires=1704672000&Signature=pBjY45F3rHsWst05XO6Ex07xQ8w4XEVeH566lJ81gTR~r-GOyxagLxG8ceTCiCoWKKqivNG6stYy12rz0OiOBsJFhAN5kMYroKWWAuZ9ID4BK5buSdSz81s0qlOjuT62q8Slrbx5p46MVX~wU4xS9xY3NfLb2ZignwG~DS6BUsI3RLlsSFYMoKvdrcrLof1veXh17b0wrVWr-kmcCbZb9X8HMWCA-95IKa8Q6VoksTRhf5odMlDDv9TnCJBt7DQcoQyw5qJOwiteTgwP6SOJznkyMC~oI0SA4Hqj978FeOwWqtnUl8iBVjceTuXBxfPumNvfrwlWhgEQg8U6CKFYjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'Football FC',
    },
    {
      id: 1437,
      image:
        'https://s3-alpha-sig.figma.com/img/d9a9/1e77/fbaceae806a10e564bcd8b8f8fdec118?Expires=1704672000&Signature=dklMacLKUIBX37YGdjjnZaZtD2d~FHz4Qn7FlDcWDdM-ds~uYBafE4WWVhE9ODsX5G4uTmxvEdKaAYy18nfQiY2dV6I1qHK~xogiw5Ac77k8LfNHygduJXalf6VBFwYYNG8AX5bTo3C7tPC5x9o7yHu4zHW64GKBKlfa1McMxBJiD50BzkGTi~fDpW7soCv46IjZCyl15gfwZTWJurwqqC0~rnpKH9r~Dz6f7Vpnc8SPIP4dy0NmP4atjMamY-dFmGV0bhyHW4G45IqZMyFmgCECTeixZmiEOBmeJdFlxGnbBbnqIylT7brxxqmKe~XybJCabiL8PsDFoFPHvaIeAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'Splyce',
    },
    {
      id: 1128,
      image:
        'https://s3-alpha-sig.figma.com/img/1608/0623/d3011c9f80154044b72c3c77ea842ac6?Expires=1704672000&Signature=OiOqs2GNqnyxDpTPWf8AuaFjCFHoP9TB6Ke55WlGJkSWlbM~vPWkKVDUQrkMPSgaRp0qgB6WyPYl34dAgwFlMWlKZ2ECOe1he~aDHQ-KZ4TuDqtfawJNoN4WXSNMCRTCjtThLlEZaibAYIWF~xVJL8FgD0WhpjVaSr5Ep7ngiEksLeYRdhzzhVqZhUU8pDSSnAKBQKBkpgosPPMe3M6xfBJvsxrREArXYQkpbCJFj~4JcRqf2RiehWmWnUR3hahD0FsNXEviuJLhshyxAdDEx9MNboCQqC3SJPWVm9V9CRegIBMiplIGM2LHKet19X0V8Xx5x4Hh0WbhEGhZrXE4mg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'G2 Esport',
    },
    {
      id: 159,
      image:
        'https://s3-alpha-sig.figma.com/img/068b/de3d/4c1a8a6d2bf7913772cd721fc735d956?Expires=1704672000&Signature=KDRGMoqdC-F-NZzPDQ-sdSAlxRpS45yq32ysP7GYFc0977-xt7-D9syBo5DCZZVNqh4FCYf8eP8kR8FFDMrGLyOEIgkuolGShahoDuE5shnR2VI2ZMO1~6uLuwVD16Ta28xkEhfKr8tyMLLr-XFo4I8JxZDzc91oJ1KOAavHmwPvspTpLK-NZy2IGCspWCLrMM0YMbgZl07i3tPhLIBqc8nu5PuEgaEpYiS5CrE9MXlj7KnwU5maRC1NA~mOEBXN109uRcHGy3d3xZSr1i8lk8iZPyOAEH3ytY6DRBl7yh9RKDB~WE~cOxiyPN46iEBN3JjLBpHRnB1X4YOtkMIwfA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'Team Vitality',
    },
    {
      id: 240,
      image:
        'https://s3-alpha-sig.figma.com/img/63a3/88a6/3d777b8faff6845dd16ee13132878066?Expires=1704672000&Signature=W0Zx-3LKRBhCBIAe9I~kCUT660YSMCTvVc8gtUXjwTTOoBUeMzT3AB3i-j3OUG74vWYowEKTj8BcAPopJJZZyqVnLiIO1uQ1VBvPLdDt9ckb8oNCqlplf~zJACxEVX1Gg0Ep1SI~VJaTy~bmvQHB9p0eeByJP7qEbWrK9hbcxzYpI4n2mmLWDi-LmcWoRp8Rb60L26vQQ-kOsugas57IOF9oPkb51YxOEOHEG0pVD5jCW5Kl0r05ehtgIJ0fm79RmPbfjU8tGaI9vJjzoEi6rS81Sg~4gZpeWu7nDVRhTDzchiSABWkCZza3cF8VzPtGlfYZFmDGfNDEDJGJLWStuQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'W7M Gammers',
    },
  ];

  const userData = [
    {
      id: '1',
      pimage:
        'https://s3-alpha-sig.figma.com/img/46f9/77ff/9c2b19c203e5733af6d3ec3aa165ff82?Expires=1704672000&Signature=pBjY45F3rHsWst05XO6Ex07xQ8w4XEVeH566lJ81gTR~r-GOyxagLxG8ceTCiCoWKKqivNG6stYy12rz0OiOBsJFhAN5kMYroKWWAuZ9ID4BK5buSdSz81s0qlOjuT62q8Slrbx5p46MVX~wU4xS9xY3NfLb2ZignwG~DS6BUsI3RLlsSFYMoKvdrcrLof1veXh17b0wrVWr-kmcCbZb9X8HMWCA-95IKa8Q6VoksTRhf5odMlDDv9TnCJBt7DQcoQyw5qJOwiteTgwP6SOJznkyMC~oI0SA4Hqj978FeOwWqtnUl8iBVjceTuXBxfPumNvfrwlWhgEQg8U6CKFYjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'Football FC',
      post: 'https://s3-alpha-sig.figma.com/img/3ef4/2eda/e7f5fd0341055dd174845639de8d1f5b?Expires=1704672000&Signature=USToWpXRc8yIa-NJ4HXL5JgxGSDeTyGGEtmLfRmdDVPtAqHLSytNAolasWk1ucKd1KiaF9sDT--Wq8lk8E2r7fXpkkX~WSLGpnORjygm4uA1JZyip1dh0SHHGgSSdgWllVDcQwlsJNIUauI3nGeZ2eQyIH49iMIvN2qstNwIvagBsbMF16VhddpDKEaHsCCD73lEkicPwsNnOb9nHFdD0~vOKjJAc19Wr3JJn4rGbuEYMVkt9Y9PbImc5KE6bE0ylPtqFFDNrZ3CxVQsuF72fVicK-PWS-sVEWKGj~r9bo2GP6vw9I~sgt4hNbT9JlTFv3UwbqGaz-VPUMAlHaQk~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },

    {
      id: '2',
      pimage:
        'https://s3-alpha-sig.figma.com/img/7756/5239/4ead09c62cf7aba27f3e539165b0d24d?Expires=1704672000&Signature=QNpSJumqsXdveckpDw6XYsL2LqwkKfuEGMlx8rJPPVbxorwYEC8Z45OdiCqkphVUWP-PHsE-hWiMYkyDs86xHSdFtYUNVrs6DQck~lppWkCkgJrFvQsdamsRmgHZzFY8HJR0kXJwb9f6xyAMFe4Uddq3~n~6NyO-Q4vQoYvjM0DtiIceV18W~iuj4RsJJe0JUVIMUTw560Arq5uTgW1Ul9m8SMycS02~UZTi5wBlD~MNFpaGfh1h-hvHQn3Mr6V-MqIiprrFby4ayMsnXLneolDz7JwgnFzMWm1jc5rHKf1XObadHfxk3Q5y7dfVkoHPEZFZLd~A8kvS1IifSurwhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'Fireflies',
      post: 'https://images.unsplash.com/photo-1526648744555-3b6b75370bf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnV0Ym9sJTIwbWV0Y2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '3',
      pimage:
        'https://s3-alpha-sig.figma.com/img/b30b/ca89/ad2f201ead92f50145220f4ebdf0204c?Expires=1704672000&Signature=KRyHFrHHvloXx76u4ozN8IYAPY9Ieb4~Xmth2xoLikCAM5oe67BKUkl5rk2cXuOChbhKhFRXM5LpRekpt5jsdE5whQgEqK-lx~8FXnjfzNfxi8Nq6rxm-3-cINY-QsNTlRKFj4PxWDiN4MfbH9kVt5Vd08pPkHzSM~TrV56JmyoTZdTKjmE0ji-Ea2worVtPz4Yl75CvSdI8bjViAt1~QMT35szyCxvX32V134gGk4luttqBgmPgRKfY-G6l80lCVDCLao3mCfj5BEj4jX-uaQAofdvuUTxWPOU~INrDjn0~JCSGnksjLfKI12sYjef5juTcj3~ALYWoN3YKKhXSxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'piperrolland',
      post: 'https://images.unsplash.com/photo-1549912529-c7a7f14938aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1dGJvbCUyMG1ldGNofGVufDB8fDB8fHww',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View>
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
      {/* list */}

      <View style={styles.secRow}>
        <View>
          <Avatar.Image
            size={70}
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/f9c7/e738/0e1a3f0610d6a20d76bbaba7cdaf4ac5?Expires=1704672000&Signature=N8Yz-7qTaTKe-pRmz22xiE~i-8R3OF5~x6lnS9qhSD8EK5lYTGQqJJGXN0pbHEczvAdd868nMjruLV5wZScExb-oMlmIA0ChJPGbmV3QNTcrsIPP7rEq1K2kRHm--qpDpjXEVX6TlgTbMl415T~KOajoU-iHyjqvOWlL3UID7GBN7VEBT82zNTQDL1tGIfVTYRuEZZGXSU1n2cKAV~qInSHqJY-aY-N3spiLBMJMUS9sI45EIuiv9nXWeWEoZjKTE9DmmSkc4NOA8O5Q4U8GBihjPJhwijQ-ijB0pHHu3DyEKU2B96SP9RpTccMpOEy6d3NUaWXRP-WhF1TJEYojIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            }}
            style={{marginTop: 10, marginLeft: 10}}
          />
          <Text style={{textAlign: 'center', fontSize: 10, marginTop: 10}}>
            Your story
          </Text>
        </View>
        <View style={{marginTop: 55, marginLeft: -15, zIndex: 1}}>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'white',
              backgroundColor: '#7E71EE',
              height: 17,
              borderRadius: 100,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '',
                marginTop: -8,
              }}>
              +
            </Text>
          </View>
        </View>
        <View style={{marginLeft: 10}}>
          <FlatList
            data={Data}
            renderItem={({item}) => (
              <View
                style={{
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: 3,
                  marginHorizontal: 6,
                }}>
                <View style={styles.story}>
                  <Avatar.Image
                    size={70}
                    source={{uri: item.image}}
                    style={styles.image}
                  />
                </View>
                <Text style={{fontSize: 10, textAlign: 'center'}}>
                  {item.name}
                </Text>
              </View>
            )}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 10}}
          />
        </View>
      </View>

      {/* post  List  */}

      <FlatList
        data={userData}
        renderItem={({item}) => (
          <View style={{flexDirection: 'column', marginTop: 5}}>
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
                  source={{
                    uri: `${item.pimage}`,
                  }} // Provide the path to your image
                  style={{width: 50, height: 50}}
                />

                <View>
                  <Text tyle={{fontSize: 12}}>{item.name}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 5,
                    }}>
                    <Club name="police-badge" size={15} />
                    <Text style={{fontSize: 10}}>Soccer Club</Text>
                  </View>
                </View>
              </View>

              <Dood name="options-vertical" size={20} color="white" />
            </View>
            {/* Image Post */}
            <View style={{marginVertical: 10}}>
              <Image
                source={{
                  uri: `${item.post}`,
                }}
                style={{width: 380, height: 319, objectFit: 'cover'}}
              />
            </View>
            {/* Like Shear */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 10,
                marginVertical: 10,
              }}>
              <View
                style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                <Like name="like1" size={21} color="#38BD10" />
                <Dislike name="dislike1" size={21} color="white" />
              </View>

              <Shear name="share-alt" size={21} color="white" />
            </View>
          </View>
        )}
        keyExtractor={item => item.key}
        style={{marginTop: 30}}
      />
    </View>
  );
};

export default Insttypr;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
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
  secRow: {
    flexDirection: 'row',
  },
  story: {
    borderRadius: 100, // To create a circular avatar, set the borderRadius to half of the width and height
    borderWidth: 3, // Add a 2-pixel border
    borderColor: '#38BD10',
  },
  image: {
    resizeMode: 'cover',
  },
});
