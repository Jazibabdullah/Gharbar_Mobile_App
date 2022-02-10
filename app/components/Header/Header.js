/* eslint-disable react-native/no-color-literals */
import React, { useState } from "react"
import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions"
import { NotificationComp } from "../"

export const Header = ({}) => {
  const [visible, setVisible] = useState(false)

  return (
    <View style={styles.container}>
      <NotificationComp visible={visible} setVisible={setVisible} />

      <Image style={styles.icon} source={require("../../../assets/icon.png")} />
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          disabled={visible}
          onPress={() => setVisible(visible ? false : true)}
          style={{ flexDirection: "row" }}
        >
          <Image style={styles.icon} source={require("../../../assets/bell.png")} />
          <Image style={styles.dot} source={require("../../../assets/dotCounter.png")} />
        </TouchableOpacity>
        <Image style={styles.icon} source={require("../../../assets/placeholder.png")} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#F9F9F9",
    elevation: 1,
    flexDirection: "row",
    height: responsiveHeight(10),
    justifyContent: "center",
    justifyContent: "space-between",
    paddingHorizontal: responsiveWidth(3),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    width: responsiveWidth(100),
  },
  buttonsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: responsiveWidth(30),
  },
  dot: {
    marginLeft: responsiveWidth(-3),
    marginTop: responsiveHeight(3),
    resizeMode: "contain",
    width: responsiveWidth(5),
  },
  dotView: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: responsiveWidth(-6.5),
    marginTop: responsiveHeight(-4.5),
    zIndex: 22,
    zIndex: 3,
  },
  icon: {
    resizeMode: "contain",
    width: responsiveWidth(12),
  },
})
