import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Dimensions,
  FlatList,
} from 'react-native';
import {
  Notification,
  Receipt21,
  Clock,
  Message,
  Heart,
  HeartSearch,
  SearchNormal,
  Pencil,
} from 'iconsax-react-native';
import {fontType, colors} from '../../assets/theme';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import {Element3} from 'iconsax-react-native';
import {
  BlogList,
  CategoryList,
  TodayList,
  WorkoutList,
  dataQL,
} from '../../../data';
import {ListHorizontal, ListQL, ListToday} from '../../components';

const windowWidth = Dimensions.get('window').width;

export default function Home() {
  const handleButtonPress = () => {};
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={itemHorizontal.cardItem}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.Searchbarcontainer}>
            {/* Add the search bar */}
            <SearchNormal color="#F5F7F8" variant="Linear" size={24} />
            <TextInput
              style={styles.searchBar}
              placeholder="Search"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
          <Text style={styles.titleweightonic}>WEIGHTONIC</Text>
        </View>
        <View style={styles.listCategory}></View>
        <ListBlog />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 'auto',
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
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal: 5,
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
});

const ListBlog = () => {
  const handleButtonPress = () => {};
  return (
    <ScrollView style={{flex: 1}}>
      <Text style={{...styles.title, paddingHorizontal: 24}}>Today</Text>
      <ListToday data={TodayList} />
      {/* <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{gap: 0}}>
        <View style={itemHorizontal.listCard}>
          <View style={itemHorizontal.cardItem1}>
            <Text style={itemHorizontal.cardImage}>270{'\n'} Calories</Text>
            <View style={itemHorizontal.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, height: 'auto'}}>
                  <Text style={itemHorizontal.cardCategory}>Breakfast</Text>
                  <Text style={itemHorizontal.cardTitle}>2 Slice Omelet</Text>
                  <TouchableOpacity
                    onPress={handleButtonPress}
                    style={styles.buttonContainer}>
                    <Text style={styles.buttonedit}>Edit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={itemHorizontal.listCard}>
          <View style={itemHorizontal.cardItem2}>
            <Text style={itemHorizontal.cardImage2}>60 {'\n'} Calories</Text>
            <View style={itemHorizontal.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '100%'}}>
                  <Text style={itemHorizontal.cardCategory}>A.M. Snack</Text>
                  <Text style={itemHorizontal.cardTitle}>2 Slice Bread</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={itemHorizontal.listCard}>
          <View style={itemHorizontal.cardItem3}>
            <Text style={itemHorizontal.cardImage3}>400 {'\n'} Calories</Text>
            <View style={itemHorizontal.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '100%'}}>
                  <Text style={itemHorizontal.cardCategory}>Lunch</Text>
                  <Text style={itemHorizontal.cardTitle}>
                    Chicken Gordon Blue
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={itemHorizontal.listCard}>
          <View style={itemHorizontal.cardItem4}>
            <Text style={itemHorizontal.cardImage4}>40 {'\n'} Calories</Text>
            <View style={itemHorizontal.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '100%'}}>
                  <Text style={itemHorizontal.cardCategory}>P.M. Snack</Text>
                  <Text style={itemHorizontal.cardTitle}>1 Medium Apple</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={itemHorizontal.listCard}>
          <View style={itemHorizontal.cardItem5}>
            <Text style={itemHorizontal.cardImage5}>450 {'\n'} Calories</Text>
            <View style={itemHorizontal.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '100%'}}>
                  <Text style={itemHorizontal.cardCategory}>Dinner</Text>
                  <Text style={itemHorizontal.cardTitle}>Seared Salmon</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView> */}

      <Text style={{...styles.title, paddingHorizontal: 24}}>Quick Launch</Text>
      <View style={styles.rowContainer}>
        {dataQL.map((item, index) => (
          <ListQL item={item} key={index} />
        ))}
      </View>
      <Text style={{...styles.title, paddingHorizontal: 24}}>
        Workout Routine
      </Text>
      {WorkoutList.map((item, index) => (
        <ListHorizontal item={item} key={index} />
      ))}

      <Text style={{...styles.title, paddingHorizontal: 24}}>Learn</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{gap: 0}}>
        <View style={itemHorizontal.listCard}>
          <View
            style={{
              ...itemHorizontal2.cardItem,
              backgroundColor: '#79AC78',
              width: 150,
              height: 150,
            }}>
            <ImageBackground
              style={itemHorizontal2.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://gcdnb.pbrd.co/images/7fE4eOuRTxt9.png?o=1',
              }}>
              <View style={itemHorizontal2.darkOverlay}></View>
              <View style={itemHorizontal2.cardContent}>
                <View style={itemHorizontal2.cardInfo}>
                  <Text style={itemHorizontal2.cardTitle}>
                    How to burn belly fat
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
        <View style={itemHorizontal.listCard}>
          <View
            style={{
              ...itemHorizontal2.cardItem,
              backgroundColor: '#FF4B91',
              width: 150,
              height: 150,
            }}>
            <ImageBackground
              style={itemHorizontal2.cardImage2}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://gcdnb.pbrd.co/images/h4l6EiidiuTc.png?o=1',
              }}>
              <View style={itemHorizontal2.darkOverlay}></View>
              <View style={itemHorizontal2.cardContent}>
                <View style={itemHorizontal2.cardInfo}>
                  <Text style={itemHorizontal2.cardTitle}>
                    What To Eat And Avoid
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const itemKategori = StyleSheet.create({
  cardItem: {
    width: 'auto',
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    padding: 15,
    position: 'absolute',
    bottom: 0,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '100%',
  },
  cardTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingTop: 8,
  },
  textContainer: {
    flex: 1,
    paddingRight: 8,
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.black(0.5),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
    width: 30,
    height: 30,
  },
});

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
