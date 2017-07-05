// Album Details Component

// Import a library to help create a component
import React, { Component } from 'react';
import {
    Image,
    Linking,
    StyleSheet,
    Text,
    View
} from 'react-native';

// Import App Components
import CardComponent from './Card';
import CardSectionComponent from './CardSection';
import ButtonComponent from './Button';

// Create a Functional Component
const AlbumDetail = ({ album }) =>{
    //Destructure Props
    const { 
        title, 
        artist, 
        thumbnail_image,
        image,
        url
    } = album;

    // Destructure Styles
    const { 
        CoverImageStyle,
        thumbTextStyle,
        thumbnailImageContent, 
        thumbnailWrapper,
        headerContent
    } = styles;

    return (
        <CardComponent>

            <CardSectionComponent>

                <View style={thumbnailWrapper}>
                    <Image 
                        style={thumbnailImageContent}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContent}>
                    <Text style={thumbTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSectionComponent>
            
            <CardSectionComponent>
                    <Image 
                        style={CoverImageStyle}
                        source={{ uri: image }}
                    />
            </CardSectionComponent>

            <CardSectionComponent>
                <ButtonComponent onPress={()=> Linking.openURL(url)}>
                    Buy {title} Album Now!
                </ButtonComponent>
            </CardSectionComponent>

        </CardComponent>
    );
};

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailWrapper:{
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: 10,
    marginRight: 10
  },
  // Gotta Specify first styles for the Image.
  thumbnailImageContent:{
      width: 50,
      height: 50
  },
  thumbTextStyle:{
    fontSize:18
  },
  CoverImageStyle:{
      height:300,
      flex: 1,
      width: null
  }
});


// Make the Component Available
export default AlbumDetail;