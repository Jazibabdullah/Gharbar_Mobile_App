import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions"
export const Members = (item) => {
  let memberList = [
    { id: 0, name: "Taimoor Liaquat", imgUrl: "", onlineStatus: true },
    { id: 1, name: "Ali bin Arshad", imgUrl: "", onlineStatus: true },
    { id: 2, name: "Romeesa Asghar", imgUrl: "", onlineStatus: false },
    { id: 3, name: "Fiza Rubab", imgUrl: "", onlineStatus: true },
    { id: 4, name: "Aimen Faheem", imgUrl: "", onlineStatus: true },
    { id: 5, name: "Mirza Ghalib", imgUrl: "", onlineStatus: false },
    { id: 6, name: "Quaid e Azam", imgUrl: "", onlineStatus: true },
    { id: 7, name: "Ali ", imgUrl: "", onlineStatus: false },
    { id: 8, name: "Ikram", imgUrl: "", onlineStatus: false },
    { id: 9, name: "Maryam Aziz", imgUrl: "", onlineStatus: true },
  ]

  const keyExtractor = (item, index) => item.id
  const renderItem = ({ index, item }) => {
    return (
      <View style={styles.listItemWrapper}>
        <View
          style={[
            styles.imageWrapper,
            { backgroundColor: !item.onlineStatus ? "#000" : "#075595" },
          ]}
        >
          <View
            style={[
              styles.personImageView,
              { backgroundColor: item.onlineStatus ? "green" : "#FB2A2A" },
            ]}
          ></View>
        </View>
        <View style={styles.nameWrapper}>
          <Text style={styles.memberName}>{item.name}</Text>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.headerText}>Members</Text>
        </View>

        <View style={styles.headerDetailContainer}>
          <Text style={styles.subHeaderText}>79 Members - </Text>
          <Text style={styles.subHeaderTextColorFull}>40 Active</Text>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        data={memberList}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: responsiveWidth(5),
    marginTop: responsiveHeight(2),
  },
  headerText: { fontSize: responsiveFontSize(3.5), color: "black" },
  subHeaderText: { fontSize: responsiveFontSize(1.5), color: "grey" },
  subHeaderTextColorFull: { fontSize: responsiveFontSize(1.5), color: "green" },
  headerDetailContainer: {
    flexDirection: "row",
    marginVertical: responsiveHeight(1),
  },
  listItemWrapper: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: responsiveFontSize(2),
  },
  listContainer: { paddingBottom: responsiveHeight(10) },
  userImageView: {
    marginLeft: "10%",
    borderWidth: 1.5,
    width: responsiveWidth(10),
    height: responsiveHeight(10),
  },
  userImageViewSquare: {
    marginLeft: "10%",

    height: responsiveHeight(10),
    width: responsiveWidth(20),
    borderRadius: 10,
  },
  personImageView: {
    height: responsiveHeight(3),
    width: responsiveHeight(3),
    borderRadius: responsiveHeight(3) / 2,

    backgroundColor: "#8CC540",
    borderWidth: responsiveWidth(1),
    borderColor: "#fff",
    bottom: responsiveHeight(-5.5),
    right: responsiveWidth(-3),
    marginLeft: responsiveWidth(10),
  },

  nameWrapper: { alignItems: "flex-start", justifyContent: "center" },
  imageWrapper: {
    alignItems: "flex-start",
    width: responsiveWidth(17),
    backgroundColor: "red",
    borderRadius: responsiveHeight(17) / 2,
    height: responsiveWidth(17),
  },
  descriptionWrapper: { flex: 1, flexDirection: "column" },
  dateText: {
    color: "blue",
    fontSize: responsiveFontSize(1.3),
    paddingTop: responsiveFontSize(1),
  },
  postByText: { fontSize: responsiveFontSize(1.8), color: "black" },
  memberName: {
    fontSize: responsiveFontSize(2),
    color: "black",
    marginLeft: responsiveWidth(3),
  },
})
