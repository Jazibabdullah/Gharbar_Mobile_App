import React from 'react';
import {
  StyleSheet,
  Modal,
  FlatList,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const ModalV = ({visible, setVisible, type}) => {
  const DATA2 = [
    {
      id: '1',
      key: 'Down Payment',
      value: 'February 3, 2021',
      value2: '3050000',
      isTrue: true,
    },
    {
      id: '2',
      key: '1st Installment',
      value: 'May 3, 2021',
      value2: '761750',
      isTrue: false,
    },
    {
      id: '3',
      key: '2nd Installment',
      value: 'August 3, 2021',
      value2: '3050000',
      isTrue: true,
    },
    {
      id: '4',
      key: '3rd Installment',
      value: 'May 3, 2021.',
      value2: '761750',
      isTrue: false,
    },
    {
      id: '5',
      key: '4th Installment',
      value: 'November 3, 2021',
      value2: '3050000',
      isTrue: true,
    },
    {
      id: '6',
      key: '5th Installment',
      value: 'August 3, 2021	',
      value2: '761750',
      isTrue: false,
    },
    {
      id: '7',
      key: '6th Installment',
      value: 'November 3, 2021',
      value2: '3050000',
      isTrue: true,
    },
    {
      id: '8',
      key: '7th Installment',
      value: 'February 3, 2021',
      value2: '761750',
      isTrue: false,
    },
    {
      id: '9',
      key: '8th Installment',
      value: 'May 3, 2021',
      value2: '3050000',
      isTrue: true,
    },
    {
      id: '10',
      key: 'Remaining Amount',
      value: 'At possession	',
      value2: '30050000',
      isTrue: false,
    },
  ];
  const DATA = [
    {
      id: '1',
      key: 'Down Payment',
      value: 'February 3, 2021',
      value2: '3050000',
      isTrue: true,
    },
    {
      id: '2',
      key: '1st Installment',
      value: 'May 3, 2021',
      value2: '761750',
      isTrue: false,
    },
    {
      id: '3',
      key: '2nd Installment',
      value: 'August 3, 2021',
      value2: '3050000',
      isTrue: true,
    },
  ];
  const renderItem = ({item}) => <Item item={item} />;
  const Item = ({item, index}) => (
    <View
      style={[
        styles.item,
        {backgroundColor: item.isTrue ? '#F4F4FC' : '#fff'},
      ]}>
      <Text style={styles.textLight}>{item.key}</Text>
      <Text style={styles.textLight}>{item.value}</Text>
      <Text style={[styles.textLight, {paddingLeft: responsiveWidth(2)}]}>
        {item.value2}
      </Text>
    </View>
  );
  return (
    <Modal
      animationType="slide"
      visible={visible}
      transparent
      onPress={() => setVisible(false)}>
      <View style={styles.container}>
        <View
          style={{
            width: responsiveWidth(100),
            backgroundColor: '#fff',
            alignSelf: 'center',
            justifyContent: 'center',
            maxHeight: responsiveHeight(73),
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 2,
            alignSelf: 'center',
            borderWidth: 0.1,
          }}>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Image
              style={styles.icon}
              source={require('../../assets/cross.png')}
            />
          </TouchableOpacity>
          <View style={styles.innerView}>
            <View style={styles.headingView}>
              <Text style={styles.heading}>Payment Details</Text>
              <Text style={[styles.heading]}>Due Date</Text>
              <Text
                style={[
                  styles.heading,
                  {textAlign: 'left', marginLeft: responsiveWidth(5)},
                ]}>
                Payment
              </Text>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              style={styles.flatlist}
              data={type === 2 ? DATA : DATA2}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: responsiveHeight(6),
    paddingLeft: responsiveWidth(8),
  },
  innerView: {
    width: responsiveWidth(95),
    borderRadius: responsiveWidth(1),
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(3),
    maxHeight: responsiveHeight(63),

    overflow: 'hidden',
    backgroundColor: '#F4F4FC',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    alignSelf: 'center',
    borderWidth: 0.1,
  },
  headingView: {
    backgroundColor: '#075595',
    width: responsiveWidth(95),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: responsiveHeight(4),
  },
  heading: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    width: responsiveWidth(32),
    fontSize: responsiveFontSize(1.4),
  },
  icon: {
    alignSelf: 'flex-end',
    marginRight: responsiveWidth(3),
    width: responsiveWidth(16),
    resizeMode: 'contain',
  },
  text: {
    position: 'absolute',
    left: responsiveWidth(2),
    textAlignVertical: 'center',
    top: responsiveHeight(3),
    paddingHorizontal: responsiveWidth(2),
    height: responsiveHeight(2.8),
    fontFamily: 'Poppins-SemiBold',
    backgroundColor: '#000',
    fontSize: responsiveFontSize(1.5),
    color: 'white',
  },
  textLight: {
    color: 'gray',
    fontFamily: 'Poppins-Regular',
    width: responsiveWidth(31.5),
    textAlignVertical: 'center',

    fontSize: responsiveFontSize(1.4),
  },
});

export default ModalV;
