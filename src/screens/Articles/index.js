import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Setting2, Edit} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {
  BlogList,
  CalorieCounterList,
  FavoriteList,
  ForYouList,
  HealtyEatingList,
  LifestyleList,
  MakananSehatList,
  TodayList,
  TrendingNowList,
} from '../../../data';
import {ListArticles} from '../../components';
import {SearchNormal, SearchNormal1} from 'iconsax-react-native';
import {fontType, colors} from '../../assets/theme';

const Articles = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={recent.textheader}>Articles</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={recent.text}>For You</Text>
        <ListArticles data={ForYouList} />
        <Text style={recent.text}>Trending Now</Text>
        <ListArticles data={TrendingNowList} />
        <Text style={recent.text}>Healthy Lifestyle</Text>
        <ListArticles data={LifestyleList} />
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddBlog')}>
        <Edit color={colors.white()} variant="Linear" size={20} />
      </TouchableOpacity>
    </View>
  );
};
export default Articles;
const styles = StyleSheet.create({
  Searchbarcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F5F7F8',
    borderRadius: 50,
    width: '100%',
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
  },
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    gap: 30,
    flexDirection: 'row',
    alignItems: 'center',
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
    backgroundColor: colors.blue(),
    padding: 15,
    position: 'absolute',
    bottom: 24,
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
});
const recent = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: colors.grey(0.15),
    borderWidth: 1,
    backgroundColor: colors.grey(0.03),
  },
  label: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Medium'],
    color: 'black',
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
