// Album List Component

// Import a library to help create a component
import React, { Component } from 'react';
import {
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';
import axios from 'axios';

// Import App Components
import AlbumDetailComponent from './AlbumDetail';

// Create a Functional Component
const functional_AlbumList = () =>{
    return (
        <View>
            <Text>Album List!</Text>
        </View>
    );
};

// Creates a Class Component
class AlbumList extends Component {
    // Life Cycle Methods

    /* State vs Props 
       State is for Internal Comm w/ Component
       Props is for Component to Component Comm
    */
    
    // Setting Default State Data
    state = {
        albumsCount: 0,
        isDataFetch: false,
        albums: []
    };

    // When Component Loads
    componentWillMount() {
        // debugger - will add a stop point on the console

        // Get Albums Data via Axios
        axios
            .get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => {
                if(res.status != 200){
                    // Something when wrong
                    console.log("no res 200");
                    return;
                }
                this.setState({ 
                    albumsCount: res.data.length,
                    albums: res.data,
                    isDataFetch: true
                });

            });
    }

    renderAlbums(){
        return this.state.albums.map(album=>
            <AlbumDetailComponent key={album.title} album={album}/>
        );
    }

    // Render Method
    render(){
        return (
            <ScrollView>
                <Text style={styles.dataList}>Album List!</Text>
                {this.renderAlbums()}
            </ScrollView>
        );        
    }
}

const styles = StyleSheet.create({
    dataList: {
        fontSize: 24,
        color: "#020202",
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom:5
    }
});


// Make the Component Available
export default AlbumList;