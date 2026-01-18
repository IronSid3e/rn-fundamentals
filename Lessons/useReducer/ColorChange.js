import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ColorChange({color, onIncrease, onDecrease}) {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`${color} tonunu arttır`} onPress={()=> onIncrease()}/>
      <Button title={`${color} tonunu azalt`} onPress={()=> onDecrease()}/>
    </View>
  )
}

const styles = StyleSheet.create({})