import React from "react";
import { Text,StyleSheet,View ,SafeAreaView} from "react-native";

const Header = (props) => {
    return (
        <SafeAreaView style={styles.headerContainer}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(
    {
        headerContainer : {
            backgroundColor:'#F8F8F8',
            alignItems : 'center',
            justifyContent : 'center',
            shadowColor : '#000',
            padding : 15,
            shadowOffset : {width:0 ,height : 2},
            shadowOpacity : 0.2,
            elevation : 2,
            position : 'relative'
        },
        textStyle : {
            fontSize:20
        }
    }
);

export default Header;