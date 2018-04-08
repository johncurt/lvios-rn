import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

    constructor(){
        super();
        this.state = {
            bottleRotation: 0
        }
    }

    rotateBottle(){
        let newDeg = Math.random() * 360;
        this.setState({bottleRotation: newDeg})
    }

    render() {
        let {width} = Dimensions.get('window');
        width = width * .9;
        let bottleRotation = this.state.bottleRotation.toString() + 'deg';
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{this.rotateBottle()}}>
                    <Image style={{width, height: width, transform:[{ rotate: bottleRotation }] }} resizeMode={'contain'} source={require('./img/bottle.jpg')}/>
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
