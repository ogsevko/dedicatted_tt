import React from 'react';
import {
  StyleSheet, View, Text, ScrollView,
  Image, Platform, StatusBar, Button
} from 'react-native';
import Animated from 'react-native-reanimated';

const images = [
  {
    id: 1,
    uri: require('../assets/image_1.jpg')
  },
  {
    id: 2,
    uri: require('../assets/image_2.jpg')
  },
  {
    id: 3,
    uri: require('../assets/image_3.jpg')
  }
];

const HEADER_HEIGHT = Platform.OS === 'ios' ? 115 : 70;

export function Home({navigation}) {
  const scrollY = new Animated.Value(0);
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  const headerY = Animated.interpolate(diffClampScrollY, {
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT]
  });

  return (
    <View style={styles.wrapper}>
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: HEADER_HEIGHT,
          backgroundColor: 'grey',
          zIndex: 1000,
          elevation: 1000,
          transform: [{ translateY: headerY }],
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>
          Header
        </Text>
      </Animated.View>
      <Animated.ScrollView
        bounces={false}
        scrollEventThrottle={16}
        style={styles.scrollContainer}
        onScroll={
          Animated.event([
            {
              nativeEvent:{
                contentOffset: { y: scrollY }
              }
            }
          ])
        }
      >
        {images.map(image => (
          <View
            key={image.id}
            style={styles.imageContainer}
          >
            <Image
              source={image.uri}
              style={styles.image}
            />
          </View>
        ))}
      </Animated.ScrollView>
      <Button
        title="Go To Info"
        onPress={() => navigation.navigate("Info")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  imageContainer: {
    height: 400,
    margin: 20,
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 10,
  },
  scrollContainer: {
    paddingTop: HEADER_HEIGHT
  }
});
