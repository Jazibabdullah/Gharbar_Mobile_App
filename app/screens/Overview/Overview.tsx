import React from "react"
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native"
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions"

import { BarChart } from "react-native-chart-kit"
import { Header, Card } from "../../components"

const Overview = ({}) => {
  const DATA = [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
    {
      id: "5",
    },
    {
      id: "6",
    },
    {
      id: "7",
    },
    {
      id: "8",
    },
  ]
  const DATA2 = [
    {
      id: "1",
      date: "First Item",
    },
    {
      id: "2",
      date: "Second Item",
    },
    {
      id: "3",
      date: "Third Item",
    },
    {
      id: "4",
      date: "Fourth Item",
    },
    {
      id: "5",
      date: "Fifth Item",
    },
    {
      id: "6",
      date: "Sixth Item",
    },
  ]
  const data = {
    labels: ["Oct 2018", "Nov 2018", "Dec 2018", "Jan 2019", "Feb 2019"],
    datasets: [
      {
        data: [3, 3.6, 3.4, 3.8, 5],
      },
    ],
  }
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    barPercentage: 0.7,
    height: 5000,
    fillShadowGradient: `rgba(1, 122, 205, 1)`,
    fillShadowGradientOpacity: 1,
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(1, 122, 205, 1)`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,

    style: {
      borderRadius: 16,
      fontFamily: "Bogle-Regular",
    },
    propsForBackgroundLines: {
      strokeWidth: 1,
      stroke: "#e3e3e3",
      strokeDasharray: "0",
    },
    propsForLabels: {
      fontFamily: "Bogle-Regular",
    },
  }
  const Item = ({ item }) => (
    <View style={styles.item}>
      <Card item={item} />
    </View>
  )
  const renderItem = ({ item }) => <Item item={item} />
  return (
    <View>
      <Header />
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainView}>
          <View style={styles.chartCard}>
            <Text style={[styles.headingText, { marginLeft: responsiveWidth(2) }]}>
              {"Price index"}
            </Text>
            <View style={styles.text}>
              <Text style={styles.textLight}>{"41 Food Court Units - "}</Text>
              <Text style={styles.textDark}>{"4 Units Left"}</Text>
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity>
                <Text style={styles.button1}>{"Food Court Shops"}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.button2}>{"Residential Apartments"}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.button2}>{"Retail Shops"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.chart}>
              <BarChart
                data={data}
                width={responsiveWidth(90)}
                height={220}
                chartConfig={chartConfig}
                yAxisSuffix=" Crore"
                withVerticalLines={true}
              />
            </View>
          </View>
          <Text style={styles.headingText}>{"Construction Progress"}</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={styles.flatlist}
            horizontal={true}
            data={DATA2}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <Text style={styles.headingText}>{"Project Pictures"}</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={styles.flatlist}
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={{ height: responsiveHeight(20) }}></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  flatlist: {
    marginTop: responsiveWidth(5),
  },
  chart: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: responsiveHeight(5),
    width: responsiveWidth(90),
    height: responsiveHeight(65),
  },
  chartCard: {
    backgroundColor: "#fff",
    overflow: "hidden",
    borderRadius: responsiveWidth(2),
    marginTop: responsiveHeight(2),
    width: responsiveWidth(96),
    height: responsiveHeight(65),
    elevation: 1,
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  scrollView: {
    paddingBottom: responsiveHeight(10),
    height: "100%",
  },
  mainView: {
    marginLeft: responsiveWidth(2),
  },
  headingText: {
    color: "#000",
    marginTop: responsiveHeight(3.5),
    fontSize: responsiveFontSize(2.2),
    fontFamily: "Poppins-SemiBold",
  },
  text: {
    flexDirection: "row",
  },
  textLight: {
    color: "gray",
    fontFamily: "Poppins-SemiBold",
    marginLeft: responsiveWidth(2),
    fontSize: responsiveFontSize(1.5),
    marginTop: responsiveHeight(1),
  },
  textDark: {
    color: "#000",
    fontFamily: "Poppins-SemiBold",
    marginTop: responsiveHeight(1),
    fontSize: responsiveFontSize(1.5),
  },
  buttonView: {
    backgroundColor: "#F4F5F9",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: responsiveHeight(4),
    borderRadius: responsiveWidth(1),
    justifyContent: "space-between",
    width: responsiveWidth(90),
  },
  button1: {
    backgroundColor: "#fff",
    borderRadius: responsiveWidth(1),
    margin: responsiveWidth(1),
    fontSize: responsiveFontSize(1.5),
    padding: responsiveWidth(1),
  },
  button2: {
    borderRadius: responsiveWidth(1),
    margin: responsiveWidth(1),
    padding: responsiveWidth(1),
    fontSize: responsiveFontSize(1.5),
  },
  item: {
    flexDirection: "row",
    width: responsiveWidth(80),
  },
})

export default Overview
