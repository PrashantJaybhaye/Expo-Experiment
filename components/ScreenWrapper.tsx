import { colors } from '@/constants/theme';
import { ScreenWrapperProps } from '@/types';
import React from 'react';
import {
    Dimensions,
    ImageBackground,
    Platform,
    SafeAreaView,
    StatusBar,
    View,
} from 'react-native';

const { height } = Dimensions.get('window');

const ScreenWrapper = ({
  style,
  children,
  showPattern = false,
  isModal = false,
  bgOpacity = 1,
}: ScreenWrapperProps) => {
  let paddingTop = Platform.OS === 'ios' ? height * 0.06 : 40;
  let paddingBottom = 0;

  if (isModal) {
    paddingTop = Platform.OS === 'ios' ? height * 0.02 : 45;
    paddingBottom = height * 0.02;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral900 }}>
      <ImageBackground
        style={{
          flex: 1,
          backgroundColor: isModal ? colors.white : colors.neutral900,
        }}
        imageStyle={{ opacity: showPattern ? bgOpacity : 0 }}
        source={require('../assets/images/bgPattern.png')}
      >
        <View
          style={[
            {
              paddingTop,
              paddingBottom,
              flex: 1,
            },
            style,
          ]}
        >
          <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} />
          {/* Ensures all text children live inside a View container */}
          <View style={{ flex: 1 }}>{children}</View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ScreenWrapper;
