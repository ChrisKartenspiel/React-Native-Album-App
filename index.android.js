// Index.android.js - place code for android 

// Import a library to help create a component
import React from 'react';
import {
    AppRegistry,
    Text,
    StyleSheet,
    View
} from 'react-native';

// Import App Components
import HeaderComponent from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => {

    // This is JSX 
    return (
        <View style={styles.container}>
            <HeaderComponent headerText={'Welcome'} />
            <AlbumList />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  }
});

// Render it to the device
AppRegistry.registerComponent('albums',() => App);