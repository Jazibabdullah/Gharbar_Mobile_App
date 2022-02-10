/* eslint-disable react-native/no-unused-styles */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/sort-styles */
import React, { useState } from "react"
import { StyleSheet, View, FlatList, Image, TouchableOpacity, Text, ScrollView } from "react-native"
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions"

import { Header, Documents, Payments } from "../../components"

const UnitDetails = ({}) => {
  const [payment, setPayment] = useState(true)
  const DATA = [
    {
      id: "1",
      key: "Floor",
      value: "7th floor",
    },
    {
      id: "2",
      key: "Unit NO",
      value: "FC-335",
    },
    {
      id: "3",
      key: "Size",
      value: "1020 sq. ft,",
    },
    {
      id: "4",
      key: "Purchase Rate",
      value: "9000 sq. ft,",
    },
    {
      id: "5",
      key: "Price",
      value: "9,230,405",
    },
    {
      id: "6",
      key: "Floor",
      value: "09/12/2021",
    },
  ]
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
  const Item = ({ item }) => (
    <View style={styles.text}>
      <Text style={styles.textDark}>{item.key + ":"}</Text>
      <Text style={styles.textLight}>{item.value}</Text>
    </View>
  )

  const renderItem = ({ item }) => <Item item={item} />

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View>
          <View style={styles.bar}>
            <Text style={styles.headingText}>{"Unit Details"}</Text>
            <FlatList
              style={styles.flatlist}
              numColumns={2}
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity onPress={() => setPayment(true)}>
              <Text style={payment ? styles.button1 : styles.button2}>{"Payment Details"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPayment(false)}>
              <Text style={!payment ? styles.button1 : styles.button2}>{"Files"}</Text>
            </TouchableOpacity>
          </View>
          {payment ? <Payments /> : <Documents />}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", flex: 1 },
  icon: {
    alignItems: "center",
    flexDirection: "row",

    marginRight: responsiveWidth(5),
  },
  headingText: {
    color: "#000",
    marginTop: responsiveHeight(1.5),
    fontSize: responsiveFontSize(2.2),
    fontFamily: "Poppins-SemiBold",
  },
  bar: {
    marginTop: responsiveHeight(2),
    backgroundColor: "#F9F9F9",
    alignSelf: "center",
    borderRadius: responsiveWidth(1),
    padding: responsiveWidth(2),
    width: responsiveWidth(95),
  },
  text: {
    flexDirection: "row",
    marginTop: responsiveHeight(2),
  },
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
    color: "#000",
  },
  textBtn: {
    alignSelf: "center",
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
    width: responsiveWidth(48.5),
  },
  button1: {
    backgroundColor: "#fff",
    borderRadius: responsiveWidth(1),
    margin: responsiveWidth(1.5),
    fontSize: responsiveFontSize(1.5),
    padding: responsiveWidth(1.5),
    paddingHorizontal: responsiveWidth(2.5),
    fontFamily: "Poppins-Regular",
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
    paddingHorizontal: responsiveWidth(2.5),
    fontFamily: "Poppins-Regular",
    padding: responsiveWidth(1.5),
    fontSize: responsiveFontSize(1.5),
  },
})

export default UnitDetails
