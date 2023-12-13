import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  ArrowLeft,
  Like1,
  Receipt21,
  Message,
  Share,
  More,
} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {HealtyEatingList} from '../../../data';
import FastImage from 'react-native-fast-image';
import {fontType, colors} from '../../assets/theme';
//

const DiscoverDetail = ({route}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 52);
  const headerY = diffClampY.interpolate({
    inputRange: [0, 52],
    outputRange: [0, -52],
  });
  const bottomBarY = diffClampY.interpolate({
    inputRange: [0, 52],
    outputRange: [0, 52],
  });
  const {blogId} = route.params;
  const [iconStates, setIconStates] = useState({
    liked: {variant: 'Linear', color: colors.grey(0.6)},
    bookmarked: {variant: 'Linear', color: colors.grey(0.6)},
  });
  const selectedBlog = HealtyEatingList.find(blog => blog.id === blogId);
  const navigation = useNavigation();
  const toggleIcon = iconName => {
    setIconStates(prevStates => ({
      ...prevStates,
      [iconName]: {
        variant: prevStates[iconName].variant === 'Linear' ? 'Bold' : 'Linear',
        color:
          prevStates[iconName].variant === 'Linear'
            ? colors.blue()
            : colors.grey(0.6),
      },
    }));
  };
  return (
    <Animated.View
      style={[styles.container, {transform: [{translateY: headerY}]}]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.white(1)} variant="Linear" size={24} />
          <More
            color={colors.white(1)}
            variant="Linear"
            style={{transform: [{rotate: '90deg'}]}}
          />
        </TouchableOpacity>
      </View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 62,
          paddingBottom: 54,
        }}>
        <FastImage
          style={styles.image}
          source={{
            uri: selectedBlog.image,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}></FastImage>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}></View>
        <Text style={styles.title}>{selectedBlog.title}</Text>
        <Text style={styles.text}>
          Registered dietitian Brittany Rogers advises that consuming a protein
          source with each meal can help meet daily requirements. She notes,
          "Protein-containing foods can also help you feel more full." Here are
          the grams (g) of protein in these high-protein foods per portion size
          of 100 g (about one-fifth of a pound, or 3.5 ounces):
        </Text>
        <Text style={styles.text}>
          1. Chicken breast (skinless, cooked): 32 g {'\n'}2. Turkey breast
          (skinless, roasted): 30 g {'\n'}3. Beef roast (roasted): 27 g {'\n'}4.
          Ground beef (fat content not specified, cooked): 26 g {'\n'}5. Salmon
          (baked or broiled): 25 g {'\n'}6. Halibut (cooked, dry heat): 23 g{' '}
          {'\n'}7. Tilapia (cooked, dry heat): 26 g
        </Text>
        <Text style={styles.text}>
          High protein consumption is often emphasized in dietary strategies for
          various reasons, primarily due to its crucial role in supporting
          overall health and fitness goals. Proteins are essential
          macronutrients composed of amino acids, which serve as the building
          blocks for various tissues in the body. Incorporating a high-protein
          diet can contribute to muscle repair and growth, making it
          particularly beneficial for individuals engaged in regular exercise or
          strength training. Additionally, protein-rich foods promote satiety,
          helping to control appetite and manage weight. Beyond its role in
          muscle health, adequate protein intake is vital for the proper
          functioning of enzymes, hormones, and the immune system. Common
          sources of high-quality protein include lean meats, fish, eggs, dairy
          products, legumes, and plant-based sources like tofu and quinoa. While
          the optimal amount of protein varies based on individual factors such
          as age, activity level, and health goals, a well-balanced diet that
          includes sufficient protein can be a key component of a healthy and
          sustainable nutritional plan.
        </Text>
        <Text style={styles.text}>
          Moreover, a high-protein diet has been associated with increased
          thermogenesis, meaning the body burns more calories during digestion
          compared to fats and carbohydrates. This phenomenon can be
          advantageous for those seeking weight management or fat loss. Protein
          also plays a crucial role in preserving lean body mass during periods
          of calorie restriction, ensuring that weight loss comes primarily from
          fat rather than muscle tissue. The macronutrient's impact on metabolic
          rate and muscle preservation makes it a valuable component of various
          weight loss and body recomposition strategies.
        </Text>
      </Animated.ScrollView>
    </Animated.View>
  );
};
export default DiscoverDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: '#A8DF8E',
  },
  bottomBar: {
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: colors.white(),
    paddingVertical: 14,
    paddingHorizontal: 60,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 200,
    width: 'auto',
    borderRadius: 15,
  },
  info: {
    color: colors.grey(0.6),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
  },
  category: {
    color: colors.blue(),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
  },
  date: {
    color: colors.grey(0.6),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    marginTop: 10,
  },
  text: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.black(),
    marginTop: 10,
    textAlign: 'justify',
  },
  content: {
    color: colors.grey(),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 10,
    lineHeight: 20,
    marginTop: 15,
  },
});
