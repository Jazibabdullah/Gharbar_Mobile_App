import React, { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions"
import { Header, PreviousInquiries, NewInquiries } from "../../components"

const Inquiries = ({}) => {
  const [update, setUpdate] = useState(true)
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.buttonView}>
        <TouchableOpacity onPress={() => setUpdate(true)}>
          <Text style={update ? styles.button1 : styles.button2}>{"Previous Inquiries"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setUpdate(false)}>
          <Text style={!update ? styles.button1 : styles.button2}>{"Make New Inquiry"}</Text>
        </TouchableOpacity>
      </View>
      {update ? <PreviousInquiries /> : <NewInquiries />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  buttonView: {
    backgroundColor: "#F4F5F9",
    flexDirection: "row",
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(4),
    borderRadius: responsiveWidth(1),
    justifyContent: "space-between",
    width: responsiveWidth(72),
  },
  button1: {
    backgroundColor: "#fff",
    borderRadius: responsiveWidth(1),
    margin: responsiveWidth(1.5),
    fontSize: responsiveFontSize(1.5),
    padding: responsiveWidth(1.5),
    fontFamily: "Poppins-Regular",
    paddingHorizontal: responsiveWidth(2.5),
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
    padding: responsiveWidth(1.5),
    fontFamily: "Poppins-Regular",
    fontSize: responsiveFontSize(1.5),
  },
})

export default Inquiries
