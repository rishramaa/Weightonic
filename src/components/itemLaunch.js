import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {fontType, colors} from '../assets/theme';
import {backgroundColors} from '../../data';
import {useNavigation} from '@react-navigation/native';

const ListQL = ({item}) => {
  const [bookmark, setBookmark] = useState([]);
  const toggleBookmark = itemId => {
    if (bookmark.includes(itemId)) {
      setBookmark(bookmark.filter(id => id !== itemId));
    } else {
      setBookmark([...bookmark, itemId]);
    }
  };
  const backgroundColor = backgroundColors[item.id % backgroundColors.length];

  return (
    <View style={[styles.cardContainer, {backgroundColor}]}>
      <Image source={{uri: item.image}} style={styles.cardImage} />
      <Text style={styles.cardText}>{item.text}</Text>
    </View>
  );
};
export default ListQL;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    borderRadius: 5,
    margin: 8,
    marginLeft: 25,
    marginRight: 15,
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
});
