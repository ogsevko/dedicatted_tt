import React from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';

export function Info({navigation}) {
  return (
    <ScrollView>
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
      <Button
        title="Home"
        onPress={() => navigation.navigate("Home")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 20,
    fontFamily: 'Arial',
    padding: 20
  }
});
