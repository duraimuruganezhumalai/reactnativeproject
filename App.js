import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      { }

      <Image source={require('./assets/18warrantylogo.svg')}
      style = {{width : 180, height : 52}} />
  
     
      <Text>Pre Coverage</Text>
      <Text>Post Coverage</Text>
      <Text>FAQs</Text>
      <View style={styles.signin}>
        <Button title="Sign In" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 12,
    // flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});



{/* <Button
title="Outline Button"
buttonStyle={{
  borderColor: 'rgba(78, 116, 289, 1)',
}}
type="outline"
titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
containerStyle={{
  width: 200,
  marginHorizontal: 50,
  marginVertical: 10,
}}
/> */}
