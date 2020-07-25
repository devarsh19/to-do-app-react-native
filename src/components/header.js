import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";

export const AppHeader = ({ title }) => {
    return (
        <View style={style.container}>
            <Text style={style.text}>
                {title}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        fontSize: 23,
        height: 50,
        backgroundColor: Colors.white,
        color: Colors.black
    },
    text: {
        fontSize: 24, 
        textAlign:"center"
    }
});