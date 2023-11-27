import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  BlogList,
  CalorieCounterList,
  FavoriteList,
  HealtyEatingList,
  MakananSehatList,
  TodayList,
} from '../../../data';
import {ListDiscover} from '../../components';
import {Add, Edit, SearchNormal, SearchNormal1} from 'iconsax-react-native';
import {fontType, colors} from '../../assets/theme';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const data = [
  {id: 1, label: 'Breakfast'},
  {id: 2, label: 'Lunch'},
  {id: 3, label: 'Dinner'},
  {id: 4, label: 'Drinks'},
  {id: 5, label: 'Cookies'},
];

const ItemRecent = ({item}) => {
  return (
    <View style={recent.button}>
      <Text style={recent.label}>{item.label}</Text>
    </View>
  );
};
const FlatListRecent = () => {
  const renderItem = ({item}) => {
    return <ItemRecent item={item} />;
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{paddingHorizontal: 24, paddingVertical: 10}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
const Discover = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  return (
    <View
      style={styles.container}
      onPress={() => navigation.navigate('SearchPage')}>
      <View style={styles.header}>
        <Text style={recent.textheader}>Discover</Text>
      </View>
      <TouchableWithoutFeedback>
        <View style={styles.Searchbarcontainer}>
          {/* Add the search bar */}
          <SearchNormal
            color={'black'}
            variant="Linear"
            size={24}
            style={{marginLeft: 10}}
          />
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            placeholderTextColor={'grey'}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </TouchableWithoutFeedback>
      <View>
        <Text style={recent.text}>Categories</Text>
        <FlatListRecent />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={recent.text}>Healty Eating</Text>
        <ListDiscover data={HealtyEatingList} />
        <Text style={recent.text}>Calorie Counters</Text>
        <ListDiscover data={CalorieCounterList} />
        <Text style={recent.text}>Pick Your Favorite</Text>
        <ListDiscover data={FavoriteList} />
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddDiscover')}>
        <Add color={colors.white()} variant="Linear" size={20} />
      </TouchableOpacity>
    </View>
  );
};
export default Discover;
const styles = StyleSheet.create({
  Searchbarcontainer: {
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#cfd4d1',
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
    backgroundColor: '#A8DF8E',
    padding: 15,
    position: 'absolute',
    bottom: 100,
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
