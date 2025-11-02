import { colors, radius } from '@/constants/theme'
import { ButtonProps } from '@/types'
import { verticalScale } from '@/utils/styling'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Loading from './Loading'

const Button = ({
    style,
    onPress,
    children,
    loading = false,
}: ButtonProps) => {

    if (loading) {
        return (
            <View style={[styles.Button, style, { backgroundColor: 'transparent' }]}>
                <Loading />
            </View>
        );
    }

    return (
        <TouchableOpacity style={[styles.Button, style]} onPress={onPress} disabled={loading}>
            {children}
        </TouchableOpacity>
    );
};


export default Button

const styles = StyleSheet.create({
    Button: {
        backgroundColor: colors.primary,
        borderRadius: radius.full,
        borderCurve: 'continuous',
        height: verticalScale(56),
        justifyContent: 'center',
        alignItems: 'center',
    },
})