import React, { Component } from "react";
import { Text,StyleSheet,View,Image,Linking } from "react-native";
import CardSection from "./CardSection";
import Button from './Button';
import Card from "./Card";
import { Entypo } from '@expo/vector-icons'; 

const TourismDetail = ({tourism}) => {
const {name,distric,images,url} = tourism;
const defaultImg = "https://www.travel.taipei/image/176830";
const getImageUrl = (image)=>(image? image.src:defaultImg);
    return (
        <Card>
        <CardSection>
            <View style={styles.thumbnailStyle}>
            <Entypo name="location" size={40} color="black" />
            </View>
        <View style={styles.headerContentStyle}>
          <Text>{name}</Text>
          <Text>{distric}</Text>
        </View>
        </CardSection>
        <CardSection>
        <Image
          style={styles.imageStyle}
          source={{
            uri: getImageUrl(images[0]),
          }}
        />
      </CardSection>
      <CardSection>
        <Button onPress={()=>{Linking.openURL(url)}} />
      </CardSection>
      </Card>
    );
}

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
      },
      thumbnailStyle: {
        height: 50,
        width: 50,
        justifyContent:'center'
      },
      imageStyle: {
        height: 300,
        flex: 1,
        width: null
      }
});

export default TourismDetail;