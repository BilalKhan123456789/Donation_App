import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationStack from './Navigation/NavigationStack'


const App = () => {

  return (
    <View style={{flex:1}}>
      <NavigationStack/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})