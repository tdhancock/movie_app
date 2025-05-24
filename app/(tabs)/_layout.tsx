import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
      name="index" 
      options={{headerShown: false,}} />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})