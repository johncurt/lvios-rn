import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Animated } from 'react-native';

export default class App extends React.Component {

    constructor(){
        super();
        this.state = {
            bottleRotation: new Animated.Value(0)
        }
    }

    rotateBottle(){
        let newDeg = Math.random() * 360;
        const curValue = this.state.bottleRotation.__getValue();
        if ( curValue > 720 ){
            newDeg = curValue - newDeg - 720;
        } else {
            newDeg = curValue + newDeg + 720;
        }
        Animated.timing(this.state.bottleRotation, {
            toValue: newDeg,
            duration: 1500
        }).start();
    }

    render() {
        let {width} = Dimensions.get('window');
        width = width * .9;
        const bottleRotation = this.state.bottleRotation.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
        });
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{this.rotateBottle()}}>
                    <Animated.Image style={{width, height: width, transform:[{ rotate: bottleRotation }] }} resizeMode={'contain'} source={require('./img/bottle.jpg')}/>
                </TouchableOpacity>
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
