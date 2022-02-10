import React from "react"
import { FlatList, StyleSheet, Image, Text, View } from "react-native"
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions"

export interface Props {}

export const Updates: React.FC<Props> = ({}) => {
  let postList = [
    {
      id: 0,
      title: "Eid-ul-Azha Greetings ",
      profilePic: "",
      coverPic: "",
      name: "Sarah Ismail",
      date: "September 20,2021",
      description: "The management would like to extend... See more",
      greetings: "AOA Everyone!",
      likes: 10,
      comments: 5,
    },
    {
      id: 1,
      title: "Eid-ul-Azha Greetings ",
      profilePic: "",
      coverPic: "",
      name: "Sarah Ismail",
      date: "September 20,2021",
      description: "The management would like to extend... See more",
      greetings: "AOA Everyone!",
      likes: 10,
      comments: 5,
    },
    {
      id: 2,
      title: "Eid-ul-Azha Greetings ",
      profilePic: "",
      coverPic: "",
      name: "Sarah Ismail",
      date: "September 20,2021",
      description: "The management would like to extend... See more",
      greetings: "AOA Everyone!",
      likes: 10,
      comments: 5,
    },
    {
      id: 3,
      title: "Eid-ul-Azha Greetings ",
      profilePic: "",
      coverPic: "",
      name: "Sarah Ismail",
      date: "September 20,2021",
      description: "The management would like to extend... See more",
      greetings: "AOA Everyone!",
      likes: 10,
      comments: 5,
    },
    {
      id: 4,
      title: "Eid-ul-Azha Greetings ",
      profilePic: "",
      coverPic: "",
      name: "Sarah Ismail",
      date: "September 20,2021",
      description: "The management would like to extend... See more",
      greetings: "AOA Everyone!",
      likes: 10,
      comments: 5,
    },
    {
      id: 5,
      title: "Eid-ul-Azha Greetings ",
      profilePic: "",
      coverPic: "",
      name: "Sarah Ismail",
      date: "September 20,2021",
      description: "The management would like to extend... See more",
      greetings: "AOA Everyone!",
      likes: 10,
      comments: 5,
    },
    {
      id: 6,
      title: "Eid-ul-Azha Greetings ",
      profilePic: "",
      coverPic: "",
      name: "Sarah Ismail",
      date: "September 20,2021",
      description: "The management would like to extend... See more",
      greetings: "AOA Everyone!",
      likes: 10,
      comments: 5,
    },
    {
      id: 7,
      title: "Eid-ul-Azha Greetings ",
      profilePic: "",
      coverPic: "",
      name: "Sarah Ismail",
      date: "September 20,2021",
      description: "The management would like to extend... See more",
      greetings: "AOA Everyone!",
      likes: 10,
      comments: 5,
    },
    {
      id: 8,
      title: "Eid-ul-Azha Greetings ",
      profilePic: "",
      coverPic: "",
      name: "Sarah Ismail",
      date: "September 20,2021",
      description: "The management would like to extend... See more",
      greetings: "AOA Everyone!",
      likes: 10,
      comments: 5,
    },
    {
      id: 9,
      title: "Eid-ul-Azha Greetings ",
      profilePic: "",
      coverPic: "",
      name: "Sarah Ismail",
      date: "September 20,2021",
      description: "The management would like to extend... See more",
      greetings: "AOA Everyone!",
      likes: 10,
      comments: 5,
    },
    {
      id: 10,
      title: "Eid-ul-Azha Greetings ",
      profilePic: "",
      coverPic: "",
      name: "Sarah Ismail",
      date: "September 20,2021",
      description: "The management would like to extend... See more",
      greetings: "AOA Everyone!",
      likes: 10,
      comments: 5,
    },
  ]
  const renderPostItem = ({ item, index }) => {
    return (
      <View style={styles.listItemWrapper}>
        <View style={styles.headerWrapper}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.userImageView}
              resizeMode={"stretch"}
              source={require("../../../assets/profile.png")}
            />
          </View>
          <View style={styles.nameWrapper}>
            <Text style={styles.memberName}>{item.name}</Text>
            <Text style={styles.dateText}>{item.date}</Text>
          </View>
        </View>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.userImageViewSquare}
            resizeMode={"stretch"}
            source={require("../../../assets/bg.png")}
          />
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={[styles.postText, { fontFamily: "Poppins-SemiBold" }]}>{item.title}</Text>
          <Text style={styles.postText}>{item.greetings}</Text>
          <Text style={styles.postText}>{item.description}.</Text>
        </View>
        <View style={styles.likesWrapper}>
          <Text style={styles.likesText}>
            {" "}
            {item.likes} Like {item.comments} Comment
          </Text>
        </View>
        <View style={styles.seperator} />
        <View style={styles.footerWrapper}>
          <View></View>
          <Text style={styles.footerText}>
            <Image
              style={styles.imageStyle}
              resizeMode={"stretch"}
              source={require("../../../assets/heart.png")}
            />
            {"  "} Like
          </Text>
          <View></View>
          <Text style={styles.footerText}>
            <Image
              style={styles.imageStyle}
              resizeMode={"stretch"}
              source={require("../../../assets/comment.png")}
            />
            {"  "} Comment
          </Text>
        </View>
      </View>
    )
  }
  const keyExtractor = (item, index) => item.id

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        data={postList}
        keyExtractor={keyExtractor}
        renderItem={renderPostItem}
      />
    </View>
  )
}

Updates.defaultProps = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

    paddingHorizontal: responsiveFontSize(1),
    marginVertical: responsiveFontSize(1),
  },
  headerWrapper: {
    flexDirection: "row",

    alignItems: "center",
    paddingTop: responsiveFontSize(2),
  },
  headerText: { fontSize: responsiveFontSize(3), color: "black" },
  subHeaderText: { fontSize: responsiveFontSize(1.5), color: "black" },
  headerDetailContainer: {
    flexDirection: "row",
    backgroundColor: "#F4F5F9",
    padding: responsiveFontSize(0.5),
    justifyContent: "space-between",
  },
  listItemWrapper: {
    flex: 1,
    borderRadius: 2,
    borderColor: "white",
    borderWidth: 1,
    overflow: "hidden",
    shadowColor: "grey",
    shadowRadius: 10,
    shadowOpacity: 1,
    paddingVertical: responsiveFontSize(1.5),
    paddingHorizontal: responsiveFontSize(3),
    marginBottom: responsiveWidth(4),
    paddingBottom: responsiveWidth(4),
    elevation: 2,
  },
  listContainer: {},
  imageStyle: {
    width: responsiveWidth(4),
    height: responsiveWidth(4),
    resizeMode: "stretch",
  },
  userImageViewSquare: {
    height: responsiveHeight(30),
    width: responsiveWidth(85),
    borderRadius: 2,
  },
  personImageView: {
    height: responsiveHeight(1),
    width: responsiveHeight(1),
    borderRadius: responsiveHeight(2) / 2,
    borderColor: "white",
    bottom: responsiveHeight(1.5),
    marginLeft: responsiveWidth(10),
  },

  imageWrapper: { paddingVertical: responsiveFontSize(1.5) },
  descriptionWrapper: { flex: 1, flexDirection: "column" },
  dateText: {
    color: "grey",
    fontSize: responsiveFontSize(1.3),

    fontFamily: "Poppins-Regular",
  },
  postText: {
    fontSize: responsiveFontSize(1.7),
    color: "black",
    fontFamily: "Poppins-Regular",
  },
  nameWrapper: { alignItems: "flex-start", justifyContent: "center" },

  memberName: {
    fontSize: responsiveFontSize(2),
    color: "black",
    fontFamily: "Poppins-Regular",
  },
  userImageView: {
    marginLeft: "5%",
    width: responsiveWidth(11),
    height: responsiveWidth(11),
  },
  likesWrapper: { alignItems: "flex-end", paddingTop: responsiveFontSize(3) },
  likesText: {
    color: "#075595",
    fontSize: responsiveFontSize(1.5),
    fontFamily: "Poppins-Regular",
  },
  seperator: {
    padding: 0.3,
    backgroundColor: "#E4E4E4",
    marginVertical: responsiveFontSize(0.5),
  },
  footerWrapper: { flexDirection: "row" },
  footerText: {
    color: "grey",
    paddingHorizontal: responsiveFontSize(1),
    fontSize: responsiveFontSize(1.6),
    fontFamily: "Poppins-Regular",
  },
})
