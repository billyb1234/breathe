import React, {Component} from 'react';
import {Animated, View, Text, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo'; 
import Feather from '@expo/vector-icons/Feather';
import BreatheCircle from './circle';
import { connect } from "react-redux";

const style=StyleSheet.create({
  text: {justifyContent: 'center',
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
      },
});

class HomeScreen extends React.Component { 
    render() {
        return(
            <LinearGradient colors={['#6ECCDF', '#086C76']} style={{flex: 1 }}>
              <View style={{ alignItems: 'center', flex: 1 }}>
                <Feather onPress={() => this.props.navigation.navigate('Settings')} name='settings' size={35} color='white' style={{alignSelf: 'flex-end', padding: 15, paddingTop: 30, opacity: 0.8}}></Feather>
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <BreatheCircle in={this.props.in} hold={this.props.hold} out={this.props.out}></BreatheCircle>
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
                <Text style={
                  {color: '#F87883', padding: 15, fontSize: 20, fontWeight: 'bold'}
                  }>Swipe for useful information >> </Text>
              </View>
            </LinearGradient>
        )
    }
  };

  const mapStateToProps = state => {
    return {
      in: state.in,
      hold: state.hold,
      out: state.out,
      sound: state.sound,
      contacts: state.contacts,
    };
  };

export default connect(
  mapStateToProps
)(HomeScreen);