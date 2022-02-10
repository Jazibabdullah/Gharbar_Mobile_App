import React from "react"
import { StyleSheet, View, Text, Image } from "react-native"
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions"
export const Card = (item) => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={require("../../../assets/background.png")} />
      <Text style={styles.text}>{"June 21,2021"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

    borderRadius: responsiveWidth(0.5),
    elevation: 1,
  },
  icon: {
    alignSelf: "center",
    width: responsiveWidth(74),
    height: responsiveHeight(24),
    margin: responsiveWidth(2),
  },
  text: {
    position: "absolute",
    left: responsiveWidth(2),
    textAlignVertical: "center",
    top: responsiveHeight(3),
    paddingHorizontal: responsiveWidth(2),
    height: responsiveHeight(2.8),
    fontFamily: "Poppins-SemiBold",
    backgroundColor: "#000",
    fontSize: responsiveFontSize(1.5),
    color: "white",
  },
})
