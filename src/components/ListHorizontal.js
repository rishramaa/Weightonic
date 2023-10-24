import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {fontType, colors} from '../assets/theme';

const ListHorizontal = ({item}) => {
  const [bookmark, setBookmark] = useState([]);
  const toggleBookmark = itemId => {
    if (bookmark.includes(itemId)) {
      setBookmark(bookmark.filter(id => id !== itemId));
    } else {
      setBookmark([...bookmark, itemId]);
    }
  };
  return (
    <View style={itemHorizontal.listCard}>
      <View style={itemHorizontal2.cardItem}>
        <ImageBackground
          style={itemHorizontal2.cardImage}
          resizeMode="cover"
          imageStyle={{borderRadius: 15}}
          source={{
            uri: item.image,
          }}>
          <View style={itemHorizontal2.cardContent}>
            <View style={itemHorizontal2.cardInfo}>
              <Text style={itemHorizontal2.cardTitle}>{item.title}</Text>
              <Text style={itemHorizontal2.cardText}>{item.description}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};
export default ListHorizontal;

const itemHorizontal = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },

  cardItemPlan: {
    backgroundColor: '#74c24f',
    flexDirection: 'row',
    width: 350,
    height: 250,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#74c24f',
  },

  cardItem1: {
    backgroundColor: '#74c24f',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#74c24f',
  },

  cardItem2: {
    backgroundColor: '#1AACAC',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1AACAC',
  },

  cardItem3: {
    backgroundColor: '#FFA41B',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFA41B',
  },

  cardItem4: {
    backgroundColor: '#A73121',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A73121',
  },

  cardItem5: {
    backgroundColor: '#713ABE',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#713ABE',
  },

  cardCategory: {
    color: 'white',
    fontSize: 15,
    fontFamily: fontType['Pjs-Bold'],
  },

  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-SemiBold'],
    color: 'white',
  },

  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 100,
    height: 100,
    backgroundColor: '#A8DF8E',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontFamily: fontType['Pjs-Bold'],
  },

  cardImagePlan: {
    width: 150,
    height: 150,
    backgroundColor: '#A8DF8E',
    borderRadius: 10,
    display: 'flex',
    position: 'absolute',
    left: 0,

    textAlignVertical: 'center',
    color: 'white',
    fontFamily: fontType['Pjs-Bold'],
  },

  cardImage2: {
    width: 100,
    height: 100,
    backgroundColor: '#64CCC5',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontFamily: fontType['Pjs-Bold'],
  },

  cardImage3: {
    width: 100,
    height: 100,
    backgroundColor: '#F99417',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontFamily: fontType['Pjs-Bold'],
  },

  cardImage4: {
    width: 100,
    height: 100,
    backgroundColor: '#820000',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontFamily: fontType['Pjs-Bold'],
  },

  cardImage5: {
    width: 100,
    height: 100,
    backgroundColor: '#614BC3',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontFamily: fontType['Pjs-Bold'],
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});

const itemHorizontal2 = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  cardItem: {
    width: 350,
    height: 150,
    borderRadius: 10,
    display: 'flex',
  },
  cardItem2: {
    width: 150,
    height: 150,
    backgroundColor: '#79AC78',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    textAlignVertical: 'center',
    borderWidth: 3,
    borderColor: '#B3FFAE',
    shadowColor: 'limegreen',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 2,
  },
  cardItem3: {
    width: 150,
    height: 150,
    backgroundColor: '#FF4B91',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    textAlignVertical: 'center',
    borderWidth: 3,
    borderColor: '#FFE4D6',
    shadowColor: 'pink',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 2,
  },
  cardItem4: {
    width: 150,
    height: 100,
    backgroundColor: '#102C57',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  cardItem5: {
    width: 150,
    height: 100,
    backgroundColor: '#9FC088',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  cardImage: {
    width: 'auto',
    height: 150,
    justifyContent: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  darkOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '100%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 15,
    color: colors.white(),
    textAlign: 'left',
  },

  cardTitle2: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 15,
    color: colors.white(),
    textAlign: 'center',
    paddingTop: '10px',
  },

  cardCategory: {
    color: 'white',
    fontSize: 15,
    fontFamily: fontType['Pjs-Bold'],
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});
