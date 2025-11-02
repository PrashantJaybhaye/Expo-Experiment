import { colors } from '@/constants/theme'
import { BackButtonProps } from '@/types'
import { verticalScale } from '@/utils/styling'
import { useRouter } from 'expo-router'
import { CaretLeft } from 'phosphor-react-native'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

const BackButton = ({
    style,
    iconSize = 26,
    color = colors.white,
}: BackButtonProps) => {

    const router = useRouter();
    return (
        <TouchableOpacity onPress={() => router.back()} style={[styles.button, style]}>
            <CaretLeft size={verticalScale(iconSize)} color={color} weight='bold'/>
        </TouchableOpacity>)
}

export default BackButton

const styles = StyleSheet.create({
    button: {

    },
});
