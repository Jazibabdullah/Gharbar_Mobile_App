import React, { useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from "react-native"
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions"
import PaymentModal from "../modal"
export const Payments = (item) => {
  const [visible, setVisible] = useState(false)
  const [type, setType] = useState(1)

  const DATA2 = [
    {
      id: "1",
      key: "Total Amount",
      value: "1 crore, 1 lac and 60 thousand rupees.",
    },
    {
      id: "2",
      key: "Amount Paid",
      value: "38 lac, 11 thousand, 7 hundred and 50 rupees.",
    },
    {
      id: "3",
      key: "Total Left",
      value: "63 lac, 48 thousand, 2 hundred and 50 rupees.",
    },
  ]
  const renderItem2 = ({ item }) => <Item2 item={item} />
  const Item2 = ({ item }) => (
    <View style={styles.text}>
      <Text style={styles.textDark}>{item.key + ":"}</Text>
      <Text style={[styles.textLight, { width: responsiveWidth(70) }]}>{item.value}</Text>
    </View>
  )
  return (
    <View>
      <PaymentModal visible={visible} setVisible={setVisible} type={type} />
      <FlatList
        style={[{ marginLeft: responsiveWidth(3) }]}
        data={DATA2}
        renderItem={renderItem2}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.barView}>
        <View style={styles.leftBar}>
          <Text style={[styles.textPercent, { color: "#fff" }]}>38% Paid</Text>
        </View>
        <View style={styles.rightBar}>
          <Text style={styles.textPercent}>62% left</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          setType(1)
          setVisible(!visible)
        }}
        style={styles.button}
      >
        <Text style={styles.textBtn}>View Payment Plan</Text>
        <Image style={styles.icon} source={require("../../../assets/arrow.png")} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setType(2)
          setVisible(!visible)
        }}
        style={styles.button}
      >
        <Text style={[styles.textBtn]}>View Paid Installments</Text>
        <Image style={styles.icon} source={require("../../../assets/arrow.png")} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  barView: {
    width: responsiveWidth(80),
    height: responsiveHeight(7),
    flexDirection: "row",
    marginTop: responsiveHeight(5),
    margin: responsiveWidth(3),
  },
  button: {
    width: responsiveWidth(94),
    borderWidth: 0.1,
    height: responsiveHeight(7),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: responsiveHeight(1),
    margin: responsiveWidth(3),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 1,
  },
  text: {
    flexDirection: "row",
    marginTop: responsiveHeight(2),
  },
  icon: {
    width: responsiveWidth(6),
    resizeMode: "contain",
    marginLeft: responsiveWidth(2),
  },
  leftBar: {
    width: responsiveWidth(35),
    height: responsiveHeight(6),

    justifyContent: "center",
    backgroundColor: "#8CC540",
  },
  rightBar: {
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    opacity: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 167, 157, 0.17)",
  },
  textPercent: {
    marginLeft: responsiveWidth(5),
    fontFamily: "Poppins-Regular",
    color: "#000",
  },
  textBtn: {
    alignSelf: "center",
    fontFamily: "Poppins-Regular",
    color: "#000",
  },
  textLight: {
    color: "gray",
    fontFamily: "Poppins-SemiBold",
    fontSize: responsiveFontSize(1.4),
    width: responsiveWidth(25),
    marginTop: responsiveHeight(1),
  },
  textDark: {
    color: "#000",
    width: responsiveWidth(25),
    fontFamily: "Poppins-SemiBold",
    marginTop: responsiveHeight(1),
    fontSize: responsiveFontSize(1.4),
  },
  buttonView: {
    backgroundColor: "#F4F5F9",
    flexDirection: "row",
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(4),
    borderRadius: responsiveWidth(1),
    justifyContent: "space-between",
    width: responsiveWidth(46),
  },
  button1: {
    backgroundColor: "#fff",
    borderRadius: responsiveWidth(1),
    margin: responsiveWidth(1.5),
    fontSize: responsiveFontSize(1.5),
    padding: responsiveWidth(1.5),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  button2: {
    borderRadius: responsiveWidth(1),
    margin: responsiveWidth(1.5),
    padding: responsiveWidth(1.5),
    fontSize: responsiveFontSize(1.5),
  },
})
