
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import { Image, StyleSheet, Text } from "react-native"
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"
import { Inquiries, Overview, ProjectUpdates, UnitDetails } from "../../screens"
const overView = require("../../../assets/overVew.png")
const overViewFocused = require('../../../assets/overViewFocused.png');
const details = require('../../../assets/details.png');
const detailsFocused = require('../../../assets/detailsFocused.png');
const inquires = require('../../../assets/inquires.png');
const inquiresFocused = require('../../../assets/inquiresFocused.png');
const updates = require('../../../assets/updates.png');
const updatesFocused = require('../../../assets/updatesFocused.png');

const BottomTabStack = createBottomTabNavigator()

const getTabBarIcon =   (route) =>({ focused, color, size }) => {
  return (
    <Image
      style={{
        width: responsiveWidth(5.5),
        resizeMode: "contain",
      }}
      source={
        route === "Overview"
          ? focused
            ? overViewFocused
            : overView
          : route === "Project Updates"
          ? focused
            ? updatesFocused
            : updates
          : route === "My Unit Details"
          ? focused
            ? detailsFocused
            : details
          : focused
          ? inquiresFocused
          : inquires
      }
    ></Image>
  )
}


const screenOptionsBottomTab = ({ route, focused }) => ({
  tabBarIcon: getTabBarIcon(route.name),
  headerShown: false,
  swipeEnabled: true,
  initialRouteName: "Overview",
 
})

const BottomTab = () => {
  return (
    <BottomTabStack.Navigator screenOptions={screenOptionsBottomTab}>
      <BottomTabStack.Screen name={"Overview"} component={Overview} />
      <BottomTabStack.Screen name={"Project Updates"} component={ProjectUpdates} />

      <BottomTabStack.Screen name={"My Unit Details"} component={UnitDetails} />
      <BottomTabStack.Screen name={"Inquiries"} component={Inquiries} />

    
    </BottomTabStack.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarLabelFocusedText: {
    color: "blue",
  },
  tabBarLabelText: {
    color: "black",
    fontSize: responsiveHeight(1.3),
    paddingVertical: responsiveHeight(1),

    textAlign: "center",

    textTransform: "uppercase",
  },

  
})

export default BottomTab
