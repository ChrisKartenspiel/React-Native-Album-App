// Button Component

// Import a library to help create a component
import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

// Create a Functional Component
const Button = ({ onPress, children}) =>{
    const {
        buttonStyle,
        textStyle
    } = styles;

    return (
        <TouchableOpacity 
            onPress={onPress}
            style={buttonStyle}
        >
            <Text  style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  buttonStyle: {
      flex:1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth:1,
      borderColor: '#007aff',
      marginLeft:5,
      marginRight: 5,
  },
  textStyle: {
    alignSelf:'center',
    color: '#007aff',
    fontSize: 15,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
});


// Make the Component Available
export default Button;