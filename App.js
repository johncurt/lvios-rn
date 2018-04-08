import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class App extends React.Component {

    render() {
        var {height, width} = Dimensions.get('window');
        height = height * .9;
        width = width * .9;
        return (
            <View style={styles.container}>
                <Image style={{width, height: width}} resizeMode={'contain'} source={require('./img/bottle.jpg')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
