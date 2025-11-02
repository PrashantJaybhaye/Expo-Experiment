import { colors } from '@/constants/theme'
import React from 'react'
import { ActivityIndicator, ActivityIndicatorProps, View } from 'react-native'

const Loading = ({
    size = 'large',
    color = colors.primaryDark
}: ActivityIndicatorProps) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={size} color={color} />
        </View>
    )
}

export default Loading