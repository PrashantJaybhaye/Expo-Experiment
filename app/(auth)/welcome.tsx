import ScreenWrapper from '@/components/ScreenWrapper'
import React from 'react'
import { StyleSheet, Text } from 'react-native'

const welcome = () => {
  return (
    <ScreenWrapper showPattern={true}>
      <Text>welcome</Text>
    </ScreenWrapper>
  )
}

export default welcome

const styles = StyleSheet.create({})