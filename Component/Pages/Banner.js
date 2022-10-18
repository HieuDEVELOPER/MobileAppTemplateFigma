import React from "react";
import { View, Text, StyleSheet, } from "react-native";


const Banner =() =>{
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text>Goodmorning</Text>
        </View>
      </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height: 200,
    },
    banner: {
        
    },


});
export default Banner;