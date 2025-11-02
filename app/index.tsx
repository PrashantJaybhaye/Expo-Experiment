import { colors } from '@/constants/theme';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';


const Splashscreen = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.replace('/(auth)/welcome');
        }, 1500);
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.neutral900} />
            <Animated.Image
                source={require('../assets/images/splashImage.png')}
                entering={FadeInDown.duration(700).springify()}
                style={styles.logo}
                resizeMode={'contain'}
            />
        </View>
    )
}

export default Splashscreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.neutral900,
    },
    logo: {
        height: "23%",
        aspectRatio: 1,
    },

})