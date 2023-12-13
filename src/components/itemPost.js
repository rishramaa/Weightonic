import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {formatDate} from '../utils/formatDate';
import {fontType, colors} from '../assets/theme';
import {Heart, Like, MessageAdd, Repeat} from 'iconsax-react-native';

const ItemPost = ({item, variant, onPress}) => {
  const [iconStates, setIconStates] = useState({
    liked: {variant: 'Linear', color: colors.grey(0.6)},
    bookmarked: {variant: 'Linear', color: colors.grey(0.6)},
  });

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={itemHorizontal.cardItem}
      onPress={() => navigation.navigate('PostDetail', {blogId: item.id})}>
      <View style={itemHorizontal.listCard}>
        <View style={itemHorizontal.borderpost}>
          <Image style={itemHorizontal.cardImage} source={{uri: item?.image}} />
        </View>
        <View style={{gap: 5, height: 'auto'}}>
          <Text style={itemHorizontal.cardCategory}>{item?.title}</Text>
          <Text style={itemHorizontal.cardTitle}>{item?.description}</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => toggleIcon('bookmarked')}>
              <MessageAdd
                color={iconStates.bookmarked.color}
                variant={iconStates.bookmarked.variant}
                size={24}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleIcon('bookmarked')}>
              <Repeat
                color={iconStates.bookmarked.color}
                variant={iconStates.bookmarked.variant}
                size={24}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleIcon('bookmarked')}>
              <Heart
                color={iconStates.bookmarked.color}
                variant={iconStates.bookmarked.variant}
                size={24}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
      <ItemPost
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
export default ItemPost;

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
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10, // Sesuaikan dengan kebutuhan
    borderWidth: 2,
    borderRadius: 12, // Sesuaikan dengan setengah tinggi ikon untuk mendapatkan bentuk bulat
    padding: 8,
    borderColor: '#A8DF8E', // Warna border khusus untuk ikon
  },
  // iconWrapper: {
  //   borderWidth: 2,
  //   borderRadius: 12, // Sesuaikan dengan setengah tinggi ikon untuk mendapatkan bentuk bulat
  //   padding: 8,
  //   borderBlockStartColor: '#A8DF8E', // Warna border khusus untuk ikon
  // },

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
