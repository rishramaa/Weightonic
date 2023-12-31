import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {fontType, colors} from '../assets/theme';
import {useNavigation} from '@react-navigation/native';
const ItemToday = ({item, variant, onPress}) => {
  return (
    <View style={itemHorizontal.listCard}>
      <View style={itemHorizontal.cardItem1}>
        <Text style={itemHorizontal.cardImage}>
          {item.calories} {'\n'} Calories
        </Text>
        <View style={itemHorizontal.cardContent}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{gap: 5, height: 'auto'}}>
              <Text style={itemHorizontal.cardCategory}>{item.title}</Text>
              <Text style={itemHorizontal.cardTitle}>{item.description}</Text>
              <TouchableOpacity
                onPress={onPress}
                style={styles.buttonContainer}>
                <Text style={styles.buttonedit}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const ListToday = ({data}) => {
  const [bookmark, setBookmark] = useState([]);
  const toggleBookmark = itemId => {
    if (bookmark.includes(itemId)) {
      setBookmark(bookmark.filter(id => id !== itemId));
    } else {
      setBookmark([...bookmark, itemId]);
    }
  };
  const renderItem = ({item}) => {
    variant = bookmark.includes(item.id) ? 'Bold' : 'Linear';
    return (
      <ItemToday
        item={item}
        variant={variant}
        onPress={() => toggleBookmark(item.id)}
      />
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 0}} />}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
export default ListToday;
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

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Baris otomatis berlanjut ke bawah
    justifyContent: 'space-between', // Jarak antara kartu
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  Searchbarcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: (color = '#F5F7F8'),
    borderRadius: 50,
    height: 30,
    paddingLeft: 10,
    marginHorizontal: 30,
    marginLeft: 180,
  },
  searchBar: {
    height: 40,
    paddingLeft: 10,
    margin: 30,
    color: colors.white(),
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 5,
    paddingVertical: 0,
  },
  buttonedit: {
    backgroundColor: 'limegreen',
    fontSize: 10,
    color: 'white',
    borderRadius: 5,
    padding: 10,
    position: 'absolute',
    right: 0,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
    height: 50,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: '#79AC78',
  },

  titleweightonic: {
    position: 'absolute',
    left: 20,
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.white(),
  },

  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
  cardContainer: {
    flex: 1,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'pink',
    margin: 8,
  },

  cardImage: {
    width: '100%',
    height: 100,
  },
  cardText: {
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },

  input: {
    flex: 1,
    padding: 8,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
  },
});
