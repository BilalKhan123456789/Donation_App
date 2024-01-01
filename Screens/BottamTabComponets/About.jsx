import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#E2FFAE'}}>
      <ScrollView>
        {/*heading  */}
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Text
            style={{
              color: 'black',
              fontWeight: '900',
              fontSize: 22,
              fontWeight: '500',
            }}>
            About Introduction
          </Text>
        </View>

        {/* {/ image /} */}

        <View style={{justifyContent: 'center', padding: 20}}>
          <Image
            source={{
              uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1647252901/website-images/static/58.jpg',
            }}
            style={styles.image}
          />
        </View>

        {/* {/ Introduction /} */}
        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <Text
            style={{
              color: 'black',
              fontWeight: '900',
              fontSize: 22,
              fontWeight: '500',
            }}>
            Introduction
          </Text>
        </View>

        <View style={{marginHorizontal: 20}}>
          <Text style={{color: 'black', textAlign: 'justify'}}>
            Saylani Welfare International Trust has been serving humanity since
            year 1999. Every year, Saylani welfare is spending billions of
            rupees that is received as donations from individuals like yourself
            for the betterment of the underprivileged and intend to increase the
            volume of spreading more and more relief every year to the deserving
            people.
          </Text>
        </View>
        {/* {/ More /} */}

        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <Text
            style={{
              color: 'black',
              fontWeight: '900',
              fontSize: 22,
              fontWeight: '500',
            }}>
            More
          </Text>
        </View>

        <View style={{marginHorizontal: 20}}>
          <Text style={{color: 'black', textAlign: 'justify'}}>
            Saylani Welfare International Trust has been working for the last 22
            years to improve the conditions of the less privileged, helpless,
            and handicapped individuals. The organization is working day and
            night to make life happier, especially for the middle class, lower
            middle class and even lower class. At time of establishing the
            organization, the founder of Saylani Welfare International Trust and
            a few of his associates had made a commitment to serve the
            distressed people living in Pakistan and abroad in all stages of
            life. It is a blessing in disguise that today the organization is
            serving humanity in more than 63 areas of life without any
            discrimination. The soul, founder and patron of this organization is
            Hazrat Allama Maulana Muhammad Bashir Farooq. He is also a
            well-known spiritual person and Islamic scholar in the Islamic
            world. It is the result of his efforts that today Saylani Welfare
            International Trust is serving humanity all over the world. The
            organization started out as a rented house and today has at least
            630 branches worldwide. The organization also has more than 630
            Dastarkhwan, where thousands of employees are employed. Today, the
            organization spends more than 7 billion annually on the service and
            welfare of humanity. Not only this, but more than 63 spheres of life
            from birth to death (including food, health, education, social
            welfare, clean water, marriage, mass I.T training, vocational
            training, assistance to Syrian and Burmese refugees, pilgrim
            services, school services fees, easy loans, easy employment,
            hairdressing, medical & diagnostic center, laboratory tests, x-ray,
            ultrasound, ECG, consultant clinic, mobile dining, mobile clinic,
            mobile air care clinic & operation theater, and in case of natural
            disasters aid) our organization is serving humanity. More than
            300,000 people are benefited daily by the Saylani. The organization
            provides vocational training to unskilled people in various fields,
            renting of poor people houses, school fees and annual expenses of
            their children, assistance in marriage of their daughters, loan
            facility for running small scale business, rickshaws and motorbikes
            for employment, stalls, shop delivery, finger chips machine, sewing
            machines for women and other items are provided.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 250,
    borderRadius: 30,
  },
});
