import React from 'react';
import { StyleSheet, Text, Platform, Button, View, StatusBar } from 'react-native';
import Animated from 'react-native-reanimated';

const HEADER_HEIGHT = Platform.OS === 'ios' ? 115 : 70;

export function Info({navigation}) {
  const scrollY = new Animated.Value(0);
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  const headerY = Animated.interpolate(diffClampScrollY, {
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT]
  });

  return (
    <View style={{flex: 1}}>
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
        style={{paddingTop: HEADER_HEIGHT}}
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
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
          porttitor massa id neque aliquam vestibulum morbi blandit cursus.
          Consequat nisl vel pretium lectus quam id leo in. Orci sagittis eu
          volutpat odio facilisis mauris sit amet massa. Venenatis tellus in
          metus vulputate eu scelerisque felis imperdiet proin. In ante metus
          dictum at tempor commodo ullamcorper a lacus. Magna fermentum iaculis
          eu non diam phasellus vestibulum. Tincidunt id aliquet risus feugiat
          in ante metus dictum at. Purus ut faucibus pulvinar elementum. Neque
          sodales ut etiam sit amet nisl purus. Molestie a iaculis at erat pellentesque
          adipiscing commodo elit. Aliquet nec ullamcorper sit amet risus nullam eget felis.
        </Text>
        <Text style={styles.paragraph}>
          Pellentesque elit eget gravida cum sociis natoque penatibus. Natoque
          penatibus et magnis dis parturient montes nascetur. At erat pellentesque
          adipiscing commodo elit at imperdiet. Sem fringilla ut morbi tincidunt
          augue interdum velit euismod. Donec adipiscing tristique risus nec feugiat in.
          Aliquam etiam erat velit scelerisque in dictum non consectetur a. Amet justo
          donec enim diam vulputate ut pharetra sit. Mattis molestie a iaculis at erat.
          Semper auctor neque vitae tempus quam pellentesque nec. Massa ultricies mi quis
          hendrerit dolor magna eget est. Porttitor eget dolor morbi non arcu risus quis varius.
        </Text>
      </Animated.ScrollView>
      <Button
        title="Home"
        onPress={() => navigation.navigate("Home")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 20,
    fontFamily: 'Arial',
    padding: 20
  }
});
