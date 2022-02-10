import React, { useState } from "react"
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions"

export interface Props {}

export const NewInquiries: React.FC<Props> = ({}) => {

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.secondTabView}>
          <Text style={styles.previousStyle}>Account and Billing</Text>
          <TextInput style={styles.input} placeholder="Enter subject here.." />
          <View style={styles.buttonView}>
            <TouchableOpacity>
              <Text style={styles.button1}>{"Accounts and Billing"}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.button2}>{"General Inquiry"}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>Description</Text>
          <TextInput style={styles.multiLine} placeholder="Enter Description here.." />
          <Text style={styles.description}>Attachment</Text>
          <View style={styles.viewFileChoose}>
            <TouchableOpacity style={styles.chooseButton}>
              <Text style={styles.textChooseFile}>Choose File</Text>
            </TouchableOpacity>
            <Text style={styles.noChooseFile}>No File chosen</Text>
          </View>
          <View style={styles.resetView}>
            <TouchableOpacity style={styles.reset}>
              <Text style={styles.textChooseFile}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveDetails}>
              <Text style={styles.textChooseFile}>Save Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

NewInquiries.defaultProps = {}

// styles

const styles = StyleSheet.create({
  button1: {
    backgroundColor: "#E9ECFF",
    borderRadius: responsiveWidth(1),
    color: "#075595",
    elevation: 1,
    fontFamily: "Poppins-Regular",
    fontSize: responsiveFontSize(1.5),
    margin: responsiveWidth(1.5),
    padding: responsiveWidth(1.5),
    paddingHorizontal: responsiveWidth(2.5),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  button2: {
    borderRadius: responsiveWidth(1),
    fontFamily: "Poppins-Regular",
    fontSize: responsiveFontSize(1.5),
    margin: responsiveWidth(1.5),
    paddingHorizontal: responsiveWidth(2.5),
    padding: responsiveWidth(1.5),
  },
  buttonStyle: {
    marginLeft: responsiveWidth(2),
    color: "#075595",
    shadowColor: "#000",
    backgroundColor: "#E9ECFF",
    elevation: 10, // Android
    width: responsiveWidth(35),
    justifyContent: "center",
    height: responsiveHeight(4.5),
    borderRadius: responsiveFontSize(1),
    alignItems: "center",
    flexDirection: "row",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 1,
    shadowRadius: 30.19,
  },
  buttonView: {
    backgroundColor: "#F4F5F9",
    borderRadius: responsiveWidth(1),
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(4),
    width: responsiveWidth(71.5),
  },
  chooseButton: {
    backgroundColor: "black",
    height: responsiveHeight(5),
    justifyContent: "center",
    width: responsiveWidth(25),
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  dateStyle: {
    color: "#1f8dba",
    fontSize: responsiveFontSize(1.6),
  },
  description: {
    color: "black",
    fontFamily: "Poppins-Regular",

    fontWeight: "bold",
    marginTop: responsiveHeight(4),
  },
  descriptionStyle: {
    color: "black",
    fontSize: responsiveFontSize(1.8),
    fontWeight: "bold",
    lineHeight: responsiveHeight(2.5),
    width: "90%",
  },
  diableButtonStyle: {
    alignItems: "center",
    color: "black",
    justifyContent: "center",
    width: responsiveWidth(35),
  },
  disableText: {
    color: "silver",
    fontFamily: "Poppins-Regular",
  },
  generalText: { color: "#1484CD", fontFamily: "Poppins-Regular" },
  input: {
    backgroundColor: "#F8F8F8",
    borderColor: "silver",
    borderRadius: responsiveFontSize(0.5),
    borderWidth: 1,
    fontFamily: "Poppins-Regular",
    height: responsiveHeight(5.5),

    marginTop: responsiveHeight(2),
    width: responsiveWidth(90),
  },
  multiLine: {
    backgroundColor: "#F8F8F8",
    borderColor: "silver",
    borderRadius: responsiveFontSize(0.5),
    borderWidth: 1,
    fontFamily: "Poppins-Regular",

    height: responsiveHeight(20),
    marginTop: responsiveHeight(2),
    paddingLeft: responsiveWidth(2),
    textAlignVertical: "top",
    width: responsiveWidth(90),
  },
  noChooseFile: {
    color: "silver",
    fontFamily: "Poppins-Regular",

    marginLeft: responsiveWidth(4),
  },
  previousStyle: {
    color: "black",
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
  },
  reset: {
    backgroundColor: "black",
    height: responsiveHeight(4.5),
    justifyContent: "center",
    width: responsiveWidth(18),
  },
  resetView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: responsiveHeight(5),
    margin: responsiveWidth(2),
    width: responsiveWidth(80),
  },
  saveDetails: {
    backgroundColor: "#075595",
    justifyContent: "center",
    marginLeft: responsiveWidth(6),
    width: responsiveWidth(30),
  },
  secondTabView: {
    marginLeft: responsiveWidth(5),
    marginTop: responsiveHeight(4),
    width: "95%",
  },
  status: {
    color: "black",
    fontSize: responsiveFontSize(1.6),
    lineHeight: responsiveHeight(3),
    width: "90%",
  },
  statusColorChange: {
    color: "#36802d",
  },
  statusStyle: { color: "#FF6700", fontSize: responsiveFontSize(1.6) },
  subViewStyle: {
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: responsiveFontSize(1),
    flexDirection: "row",
    height: responsiveHeight(6),
    justifyContent: "space-between",
    marginTop: responsiveHeight(4),
    width: "85%",
  },
  textChooseFile: {
    color: "white",
    fontFamily: "Poppins-Regular",
    fontSize: responsiveFontSize(1.6),
    justifyContent: "center",
    textAlign: "center",
  },
  titleStyle: {
    color: "#009AEE",
    fontSize: responsiveFontSize(1.6),
    lineHeight: responsiveHeight(3.5),
  },
  viewFileChoose: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: responsiveHeight(4),
  },
  viewStyle: {
    borderBottomColor: "#C0C0C0",
    borderBottomWidth: 0.167,
    height: responsiveHeight(15),
    marginLeft: responsiveWidth(5),
    marginTop: responsiveHeight(1),
    width: "90%",
  },
})
