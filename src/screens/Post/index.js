import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import React, {useState, useCallback, useEffect, useRef} from 'react';
import {
  BlogList,
  CalorieCounterList,
  FavoriteList,
  HealtyEatingList,
  MakananSehatList,
  PostResult,
  TodayList,
} from '../../../data';
import {ItemPost} from '../../components';
import {PostData, ProfileData} from '../../../data';
import {
  Add,
  Edit,
  Heart,
  Logout,
  MessageAdd,
  Repeat,
  SearchNormal,
  SearchNormal1,
} from 'iconsax-react-native';
import {fontType, colors} from '../../assets/theme';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionSheet from 'react-native-actions-sheet';

const Post = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const [iconStates, setIconStates] = useState({
    bookmarked: {variant: 'Linear', color: colors.grey(0.6)},
  });
  const [blogData, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [PostData, setPostData] = useState(null);
  const actionSheetRef = useRef(null);
  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };
  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };
  useEffect(() => {
    const subscriber = firestore()
      .collection('Post')
      .onSnapshot(querySnapshot => {
        const blogs = [];
        querySnapshot.forEach(documentSnapshot => {
          blogs.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setBlogData(blogs);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      firestore()
        .collection('Post')
        .onSnapshot(querySnapshot => {
          const blogs = [];
          querySnapshot.forEach(documentSnapshot => {
            blogs.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setBlogData(blogs);
        });
      setRefreshing(false);
    }, 1500);
  }, []);
  const handleLogout = async () => {
    try {
      closeActionSheet();
      await auth().signOut();
      await AsyncStorage.removeItem('userData');
      navigation.replace('Login');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View
      style={styles.container}
      onPress={() => navigation.navigate('SearchPage')}>
      <View style={styles.header}>
        <Text style={recent.textheader}>Post</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <TouchableWithoutFeedback>
          <View style={styles.Searchbarcontainer}>
            {/* Add the search bar */}
            <View style={{gap: 15, alignItems: 'left'}}>
              <FastImage
                style={profile.pic}
                source={{
                  uri: ProfileData.profilePict,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
            </View>
            <TextInput
              style={styles.searchBar}
              placeholder="Whats's on your mind?"
              placeholderTextColor={'grey'}
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
        </TouchableWithoutFeedback>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={recent.text}>Latest Post</Text>
          {loading ? (
            <ActivityIndicator size={'large'} color={colors.blue()} />
          ) : (
            blogData.map((item, index) => <ItemPost item={item} key={index} />)
          )}
        </ScrollView>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddPost')}>
        <Add color={colors.white()} variant="Linear" size={30} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.floatingButton1} onPress={handleLogout}>
        <Logout color={colors.white()} variant="Linear" size={30} />
      </TouchableOpacity>
    </View>
  );
};
export default Post;
const styles = StyleSheet.create({
  Searchbarcontainer: {
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#A8DF8E',
    borderRadius: 50,
    width: 'auto',
    height: 50,
  },
  searchBar: {
    marginLeft: 10,
    color: 'black',
  },
  listCard: {
    paddingHorizontal: 24,
    paddingBottom: 10,
    gap: 10,
    borderBlockEndColor: '#A8DF8E',
    borderWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    gap: 30,
    flexDirection: 'row',
    alignIBOtems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: '#A8DF8E',
  },
  bar: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    alignItems: 'center',
    backgroundColor: colors.grey(0.05),
    borderRadius: 10,
    flex: 1,
  },
  placeholder: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.5),
    lineHeight: 18,
  },
  floatingButton: {
    backgroundColor: 'rgba(168, 223, 142, 0.9)',
    padding: 15,
    position: 'absolute',
    bottom: 170,
    right: 24,
    borderRadius: 10,
    shadowColor: colors.blue(),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  floatingButton1: {
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    padding: 15,
    position: 'absolute',
    bottom: 100,
    right: 24,
    borderRadius: 10,
  },
});
const itemHorizontal = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    paddingTop: 16,
    backgroundColor: '#FFFFFF', // Warna latar belakang item post
    borderRadius: 10,
    borderColor: '#A8DF8E',
    borderWidth: 1,
    marginBottom: 16,
    marginLeft: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeButton: {
    marginRight: 16,
  },
  commentButton: {
    marginRight: 16,
  },
  shareButton: {},
  cardItem1: {
    backgroundColor: colors.black(0.03),
    borderRadius: 15,
    borderColor: '#A8DF8E',
  },
  cardCategory: {
    marginTop: 10,
    color: 'black',
    fontSize: 15,
    fontFamily: fontType['Pjs-Bold'],
  },
  cardTitle: {
    marginBottom: 10,
    fontSize: 14,
    fontFamily: fontType['Pjs-SemiBold'],
    color: 'black',
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 350,
    height: 200,
    backgroundColor: '#A8DF8E',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    justifyContent: 'space-between',
    flex: 1,
    borderColor: '#32a852',
  },
});
const profile = StyleSheet.create({
  pic: {width: 50, height: 50, borderRadius: 50},
  name: {
    color: colors.black(),
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    textTransform: 'capitalize',
  },
  info: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(),
  },
  sum: {
    fontSize: 16,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
  },
  tag: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(0.5),
  },
  buttonEdit: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.grey(0.1),
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
  },
});
const recent = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: colors.grey(0.15),
    borderWidth: 1,
    backgroundColor: '#7A9D54',
  },
  label: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Medium'],
    color: 'white',
  },
  text: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    paddingVertical: 5,
    paddingHorizontal: 24,
  },
  textheader: {
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.white(),
    paddingHorizontal: 24,
  },
});
